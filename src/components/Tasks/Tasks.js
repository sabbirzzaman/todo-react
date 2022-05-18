import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const Tasks = ({todo, handleRemoveItem}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full block">
                <thead>
                    <tr>
                        <th className="bg-transparent text-accent border-0"></th>
                        <th className="bg-transparent text-accent border-0">
                            Task Name
                        </th>
                        <th className="bg-transparent text-accent border-0">
                            Task Description
                        </th>
                        <th className="bg-transparent text-accent border-0 text-right">
                            Clear
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((todo, index) => <TaskItem key={index} todo={todo} handleRemoveItem={handleRemoveItem}></TaskItem>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Tasks;
