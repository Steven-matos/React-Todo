import React, {Component} from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasks = [];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      taskList: tasks,
      newTask: ''
    };
  }

  toggleTask = clickedId => {
    const newTaskList = this.state.taskList.map(item => {
      if (item.id === clickedId){
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      taskList: newTaskList
    })
  };

  addNewTask = taskText => {
    const newTask = {
      task: taskText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTask]
    });
  };


  // Form Change handler
  handleChanges = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  // Form Submit handler
  handleSubmit = e => {
    e.preventDefault();
    this.addNewTask(this.state.newTask);
    this.setState({ newTask: ''});
  }

  handleClear= () => {
    const newList = this.state.taskList.filter(
      todo => todo.completed === false
    );
    this.setState({
      taskList: newList
    });
  };

  render() {
    return (
      <div className='main-content'>
        <h1>To-do App!</h1>
        <h2>List</h2>
        <TodoList taskList={this.state.taskList} toggleTask={this.toggleTask}/>
        <TodoForm handleClear={this.handleClear} 
                  handleSubmit={this.handleSubmit} 
                  handleChanges={this.handleChanges} 
                  newTask={this.state.newTask}
                  />
      </div>
    );
  }
}

export default App;
