import React, {Fragment} from "react";
import { useState } from "react";

function App() {


  return (
    <div>
      <HeaderwithButton/>
      <Header title="Mayank2"></Header>
      <Header title="Mayank2"></Header>
    </div>
  )
}

function HeaderwithButton() {
  const [title, setTitle] = useState("My name is Mayank");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
  </div>
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App;