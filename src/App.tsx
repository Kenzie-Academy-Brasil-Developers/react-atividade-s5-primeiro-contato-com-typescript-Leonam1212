import Card from "./components/card/card";
import Input from "../src/components/input/";
import { useState } from "react";
import "./App.css";

interface User {
  name: string;
  age: string;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");

  const handleClick = (name: string, age: string, hobby: string) => {
    const user = { name, age, hobby }
    setUsers([ ...users, user])  
  };

  console.log(users, name, age, hobby)
  return (
    <div className="App">
      <div>
        <Input
         
          placeholder="Nome"
          value = {name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
         
          placeholder="Idade"
          value = {age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          
          placeholder="Hobby"
          value = {hobby}
          onChange={(e) => setHobby(e.target.value)}
        />

        <button onClick = {() => handleClick(name, age, hobby)}>Enviar</button>
      </div>

      <div>
      {users.map((element, index) => (
        <div key={index}>
          <Card name = {element.name} age = {element.age} hobby = {element.hobby}/>
        </div>
      ))}
      </div>


    </div>
  );
}

export default App;
