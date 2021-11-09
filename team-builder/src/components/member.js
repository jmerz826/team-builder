import React from "react";
import styled from 'styled-components';

const MemberDiv = styled.div`
    border: 1px solid white;
    border-radius: 50px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 4%;
    
    a{
        color: white;
    }
`

const Member = (props) => {
    const { details } = props;

    if (!details) {
        return <h3>Assembling team members...</h3>
    }
    return (
        <MemberDiv>
            <h2>{details.name}</h2>
            <h3>{details.role}</h3>
            <a href={`mailto:${details.email}`}>{details.email}</a>
            
        </MemberDiv>
    )
}

export default Member;