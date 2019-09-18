import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Form from './Form/Form';
import Team from './Team/Team';
import uuidv1 from 'uuid/v1';
import Modal from './Modal/Modal';
import {CloseButton}from './Modal/components';
import './App.css';


const initialMemberList = [
  {
    id: uuidv1(),
    name: "Durotolu",
    email: "dorotolu@gmail.com",
    role: "software developer"
  }
]
const listProperties = ["Id", "Name", "Email", "Role"];

const initialMemberState = {
  id: "",
  name: "",
  email: "",
  role: "",
}

function App() {

  const [memberList, setTeamList] = useState(initialMemberList)
  const [member, setMember] = useState(initialMemberState);
  const [formModalOpen, setFormModalStatus] = useState(false)

  const openFormModal = () => {
    setFormModalStatus(true);
  }

  const closeFormModal = () => {
    setFormModalStatus(false);
  }

  const addToMemberList = () => {

    let newMember = {...member};
    if (member.id === "") {
      const id = { id: uuidv1() };
      newMember = { ...member, ...id }
    }

    if(checkIfExist()) {
      updateMember();
      return;
    }
    const newMemberList = memberList.concat(newMember);
    setTeamList(newMemberList);
    setMember(initialMemberState);
  }

  const checkIfExist = () => {
    let found =  false;
    found = memberList.find(el => (el.id !== "" && member.id));
    
    if(found) found = true;
    console.log(found)
    return found;
  }

  const updateMember = () => {
    const filteredMembers = memberList.filter(el => el.id !== member.id);
    const updatedMembers = [...filteredMembers,member] 
    setTeamList(updatedMembers);
    closeFormModal();
  }

  const onFieldChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMember({
      ...member, ...{ [name]: value }
    });
  }

  const openModalForEditing = (member) => {
    openFormModal();
    setMember(member);
  }

  // const onFormSubmit = () =>{

  // }
  // onClose={setFormModalClose}

  return (
    <div className="App">
      <div className="App-team-container">
        <Team
          listProperties={listProperties}
          memberList={memberList}
          openFormModal={openFormModal}
          updateMember={openModalForEditing}
        />
      </div>
      <Modal 
        size="tiny" 
        open={formModalOpen} 
        dimmer="blurring" 
        closeOnDimmerClick={false}
        modalHeader="Membership"
        contentHeader="Add Member"
        closeFormModal={closeFormModal}
      >
        <Form
          addToMemberList={addToMemberList}
          onFieldChange={onFieldChange}
          onFormSubmit={addToMemberList}
          memberDetail={member}
        />
        {/*</div>*/}
      </Modal>
    </div>
  );
}

export default App;
