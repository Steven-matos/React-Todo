// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({taskList, toggleTask}) => {
    return (
        <div>
            {taskList.map(task => (
                <Todo key={task.id} task={task.task} toggleTask={toggleTask} />
            ))}
        </div>
    );
};

export default TodoList;