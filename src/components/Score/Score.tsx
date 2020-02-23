import React, {useState, useRef}from 'react';


interface SingleTodo{
  text:string
  isCompleted?:boolean
}

interface AddTodo{
  textInput: (text:string) => void
}



interface Props{
  todo:SingleTodo
  index:number
  completeTodo: (index:number) => void
  removeTodo: (index:number) => void
}
const Todo:React.FC<Props> = ( { todo , index ,completeTodo , removeTodo  } ) => {
  return <div style={ { textDecoration:todo.isCompleted ? 'line-through' : '' } } className="todo"> 
  { todo.text }
  <div>
    <button onClick= { () => completeTodo(index) }> Complete </button>
    <button style={{ color:'red' }} onClick= { () => removeTodo(index) }> Remove </button>
  </div> 
  </div>
}

const TodoForm:React.FC<AddTodo> = ({ textInput }) => {
  
  const [ value , setValue ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!value) return;
    textInput(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" className="input" placeholder="Add Todo" value={ value } onChange={ e => setValue(e.target.value) } />
    </form>
  )
}

const Score:React.FC = () => {

  const [todos, setTodos] = useState<SingleTodo[]>([
    { text: "Learn about React" , isCompleted: false},
    { text: "Meet friend for lunch" , isCompleted: false},
    { text: "Build really cool todo app" , isCompleted: false}
  ]);

  

  const addTodo = (text:string) => {
    const newTodos = [...todos , { text }];
    setTodos(newTodos);
  }

  const completeTodo = (index:number) => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted === true){      
      newTodos[index].isCompleted = false;
    }
    else {
      newTodos[index].isCompleted = true;
    }
    setTodos(newTodos);
  }

  const removeTodo = (index:number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
      return <div>
        <h1>Joel check test list</h1>

        <div className="todo-list">
        
        {todos.map((todo,index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={ completeTodo } removeTodo={ removeTodo }/>
          
        ))}
        <TodoForm  textInput={addTodo}/>
      </div>
      
    </div>;
    }
  export default Score;