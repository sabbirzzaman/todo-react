import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import Tasks from './components/Tasks/Tasks';
import bg from './images/todo-bg.jpg';

function App() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setTodo(data));
    }, []);

    const handleAddTodo = (newTodo) => {
        const allTodo = [...todo];
        
        allTodo.push(newTodo);
        setTodo(allTodo);
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
                <div className="w-[800px] bg-secondary h-4/5 rounded-lg shadow-lg text-center p-8">
                    <Header></Header>
                    <InputForm
                        handleAddTodo={handleAddTodo}
                    ></InputForm>
                    <Tasks todo={todo}></Tasks>
                </div>
            </div>
        </div>
    );
}

export default App;
