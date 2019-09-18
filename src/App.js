import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Form from './Form/Form';
import Team from './Team/Team';
import uuidv1 from 'uuid/v1';
import Modal from './Modal/Modal';
import './App.css';


const initialMemberList = [
  {
    id: uuidv1(),
    name: "Durotolu",
    email: "dorotolu@gmail.com",
    role: "software developer"
  }
]
const listProperties = ["Id","Name","Email","Role"];

const initialMemberState = {
  id: "",
  name: "",
  email: "",
  role: "",
}

function App() {

  const [memberList, setTeamList] = useState(initialMemberList)
  const [member, setMember] = useState(initialMemberState)

  useEffect(
    () => { console.log(memberList) }, [memberList]
  )

  const addToMemberList = () => {
    const id = { id: uuidv1() };
    const newMember = { ...member, ...id }
    const newMemberList = memberList.concat(newMember);
    setTeamList(newMemberList);
    setMember(initialMemberState);

  }

  const onFieldChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMember({
      ...member, ...{ [name]: value }
    });
  }

  // const onFormSubmit = () =>{

  // }


  return (
    <div className="App">
      <div className="App-form-container">
        <Form
          addToMemberList={addToMemberList}
          onFieldChange={onFieldChange}
          onFormSubmit={addToMemberList}
          memberDetail={member}
        />
      </div><br />
      <div className="App-team-container">
        <Team
          listProperties={listProperties}
          memberList={memberList}
        />
      </div>
      <Modal><p>hhhhh</p></Modal>
    </div>
  );
}

export default App;
