import React from "react";

const Member = (props) => {
    const { details } = props;

    if (!details) {
        return <h3>Assembling team members...</h3>
    }
    return (
        <div className='team-member'>
            <h2></h2>
        </div>
    )
}

export default Member;