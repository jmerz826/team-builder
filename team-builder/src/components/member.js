import React from "react";

const Member = (props) => {
    const { details } = props;

    if (!details) {
        return <h3>Assembling team members...</h3>
    }
    return (
        <div className='team-member'>
            <h2>{details.name}</h2>
            <h3>{details.email}</h3>
            <h3>{details.role}</h3>
        </div>
    )
}

export default Member;