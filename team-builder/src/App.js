import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import React, {useState} from 'react';

const initalFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  // Initialize team members to empty array
  const [teamMembers, setTeamMembers] = useState([]);

  const [formValues, setFormValues] = useState(initalFormValues);

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
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form update={updateForm} values={formValues} submit={ submitForm}/>
      </header>
    </div>
  );
}

export default App;
