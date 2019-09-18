import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Form from './Form/Form';
import Team from './Team/Team';
import uuidv1 from 'uuid/v1';
import Modal from './Modal/Modal';
import {CloseButton}from './Modal/components';
import axios from 'axios';
import Loader from './Loader/Loader';
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

const base_url = "http://localhost:5000/api"

function App() {

  const [memberList, setTeamList] = useState([])
  const [member, setMember] = useState(initialMemberState);
  const [formModalOpen, setFormModalStatus] = useState(false);

  useEffect(()=>{
    const getMembers = ()=>{
      axios
      .get(`${base_url}/members`)
      .then(response => {
        console.log(response.data);
        const list = response.data;
        setTeamList(list)
      })
    }

    getMembers();
  },[])

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
    /*
      Since i am using a singlefunction for editing, then inuse this to check
      if it already exists, if exists update member and exit
    */
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

  if(memberList.length === 0) return <Loader />

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
