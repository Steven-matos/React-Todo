import React from 'react';

const TodoForm = ({handleSubmit, handleChanges, newTask, handleClear}) => {
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input type='text' name='newTask' value={newTask} placeholder='Tasks' onChange={handleChanges}/>
            <div className='btn-container'>
                <button type='submit'>Add Todo</button>
                <button onClick={handleClear}>Clear Completed</button>  
            </div>
            
        </form>
    );
};

export default TodoForm;