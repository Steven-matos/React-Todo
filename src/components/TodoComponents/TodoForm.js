import React from 'react';

const TodoForm = ({handleSubmit, handleChanges, newTask, handleClear}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='newTask' value={newTask} onChange={handleChanges}/>
            <button type='submit'>Add Todo</button>
            <button onClick={handleClear}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;