import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import Tasks from './components/Tasks/Tasks';
import bg from './images/todo-bg.jpg';

function App() {
    const [todo, setTodo] = useState([]);

    // get todo data
    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setTodo(data));
    }, []);

    // handle add new todo items
    const handleAddTodo = (newTodo) => {
        const allTodo = [...todo];

        allTodo.push(newTodo);
        setTodo(allTodo);
    };

    // handle remove todo item
    const handleRemoveItem = (id) => {
        const updatedTodo = todo.filter((t) => t._id !== id);
        setTodo(updatedTodo);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-full h-screen"
        >
            <div className="bg-[#01130b5c] w-full h-full flex justify-center items-center">
                <div className="lg:w-[800px] md:w-[600px] sm:w-[350px] bg-secondary h-4/5 rounded-lg shadow-lg text-center p-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-green-100 white scrollbar-track-transparent">
                    <Header></Header>
                    <InputForm handleAddTodo={handleAddTodo}></InputForm>
                    <Tasks
                        todo={todo}
                        handleRemoveItem={handleRemoveItem}
                    ></Tasks>
                </div>
            </div>
            
        </div>
    );
}

export default App;
