import React, {useState} from 'react';
import logo from './logo.svg';
import Form from './Form/Form';
import Team from './Team/Team';
import './App.css';


const initialMemberList = [
  {
    name:"Durotolu",
    email:"dorotolu@gmail.com",
    role:"software developer"
  }
]
const listProperties = Object.keys(initialMemberList[0])


function App() {

const [memberList, setTeamList] = useState(initialMemberList)

  return (
    <div className="App">
      <div className="App-form-container">
      <Team 
        listProperties={listProperties}
        className="App-form-container"
        memberList={memberList} 
      />
      <Form />
      </div>
    </div>
  );
}

export default App;
