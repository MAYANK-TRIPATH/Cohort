// import React, {Fragment} from "react";
// import { useState } from "react";

// function App() {


//   return (
//     <div>
//       <HeaderwithButton/>
//       <Header title="Mayank2"></Header>
//       <Header title="Mayank2"></Header>
//     </div>
//   )
// }

// function HeaderwithButton() {
//   const [title, setTitle] = useState("My name is Mayank");
//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   }

//   return <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//   </div>
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// -----------KEYS IN REACT-----------------------

// let counter = 4;

// function App() {
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: "go to gym",
//     description: "Go fast"
//   },{
//     id: 2,
//     title: "go to job",
//     description: "EArn money"
//   },{
//     id: 3,
//     title: "Have fun",
//     description: "Enjoy"
//   }])
//   function addTodo() {
//     setTodos([...todos, {
//       id: counter++,
//       title: Math.random(),
//       description: Math.random()
//     }])
//     }
  

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h3>
//       {description}
//     </h3>
//   </div>
// }


//-----------------Wrapper--------------------------------------

function App() {
  return <div>
  <CardWrapper innerComponenet={TextComponent} />
  </div>
}

function TextComponent() {
  return <div>
    hi there
  </div>
}

function CardWrapper({children}) {
  return <div style={{border: "2px solid black", padding: 20}}>
    {children}
  </div>
}

export default App;