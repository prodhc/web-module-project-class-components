import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const todos = [
  {
    name: 'Wash the car',
    id: 123,
    purchased: false
  },
  {
    name: 'Make Dinner',
    id: 124,
    purchased: false
  },
  {
    name: 'Go for a 30 minute walk',
    id: 1235,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleTodo = (id) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          purchased: !todo.purchased
        }
      } else {
        return (todo);
      }
    });

    this.setState({
      todos: newTodos
    });
  }

  addTodo = (title) => {
    const newTodo = {
      name:title,
      id:this.state.todos.length,
      purchased: false
    };
    
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearPurchased = () => {
    const newTodos = this.state.todos.filter(todo => {
      return(todo.purchased === false);
    });


    this.setState({
      todos: newTodos
    })
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>My To Do List</h1>
           <TodoForm addTodo={this.addTodo}/>
         </div>
        <TodoList clearPurchased={this.clearPurchased} toggleTodo={this.toggleTodo} todos={this.state.todos} />
       </div>
    );
  }
}

export default App;