import React from 'react';

const TaskItem = ({todo, handleRemoveItem}) => {
    const {_id, name, description} = todo;

    return (
        <tr>
            <th className="bg-transparent text-accent border-0">
                <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                />
            </th>
            <td className="bg-transparent text-accent border-0">{name}</td>
            <td className="bg-transparent text-accent border-0">
                {description}
            </td>
            <td className="bg-transparent text-accent border-0 text-right">
                <button onClick={() => handleRemoveItem(_id)} className="btn btn-error text-white btn-xs">
                    Remove
                </button>
            </td>
        </tr>
    );
};

export default TaskItem;
