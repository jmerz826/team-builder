import logo from './logo.svg';
import './App.css';
import Form from './components/form.js';
import React, { useEffect, useState } from 'react';
import Member from './components/member.js';

const initalFormValues = {
  name: '',
  email: '',
  role: '',
}

// Test
// const dummyTeam = [
//   {
//     name: 'Dave',
//     email: 'dave@gmail.com',
//     role: 'backend engineer'
//   }
// ]

function App() {
  // Initialize team members to empty array
  const [teamMembers, setTeamMembers] = useState([]);

  const [formValues, setFormValues] = useState(initalFormValues);

  const [memberToEdit, setMemberToEdit] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeamMembers(teamMembers.concat(newMember));
    setFormValues(initalFormValues);
  }

  const editMember = () => {
    // console.log(memberToEdit);

    setIsEditing(false);
    setMemberToEdit('');
  }

  useEffect(() => {
    // console.log(memberToEdit);
    setFormValues(memberToEdit);
  }, [memberToEdit])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Assemble Your Team!</h1>
        <Form update={updateForm} values={formValues} submit={submitForm} setMemberToEdit={setMemberToEdit} isEditing={isEditing} editMember={ editMember}/>
        <div className='team-members'>
          {teamMembers.map(member => {
            return (
              <div>
              <Member details={member} setMemberToEdit={setMemberToEdit} setIsEditing={setIsEditing} />
            </div>
            )
          })}
          
        </div>
      </header>
    </div>
  );
}

export default App;
