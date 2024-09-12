import React from "react";
import styled from 'styled-components';

const MemberDiv = styled.div`
    border: 1px solid white;
    border-radius: 50px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 4%;
    background-color: slateblue;
    margin-top: 1%;
    width:100%;
    
    a {
        text-decoration: none;
        color:white;
    }

    button{
        border-radius:9999px;
        padding:1.2%;
        color:white;
        background-color: black;
        border:thin solid white;
    }
`

const Member = (props) => {
    const { details, setMemberToEdit, setIsEditing } = props;

    if (!details) {
        return <h3>Assembling team members...</h3>
    }
    return (
        <MemberDiv>
            <h2>{details.name}</h2>
            <h3>{details.role}</h3>
            <a href={`mailto:${details.email}`}>{details.email}</a>
            <button onClick={() => {
                setMemberToEdit(details);
                setIsEditing(true);
            }}>Edit</button>
        </MemberDiv>
    )
}

export default Member;