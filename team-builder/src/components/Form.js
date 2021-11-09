import React from 'react';

const Form = (props) => {
    const { values, update, submit } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return (
        <form className='form-container' onSubmit={onSubmit}>
            <label>Name:
                <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                />
            </label>
            <label>Email:
                <input
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            <label>Role:
                <select value={values.role} name='role' onChange={onChange} >
                    <option value=''>-- Select a Role --</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Full Stack Engineer'>Full Stack Engineer</option>
                    <option value='Designer'>Designer</option>
                    <option value='Bum'>Bum</option>
                </select>
            </label>
            <input
                type='submit'
                value='Add team member!'
            />
        </form>
    )
}

export default Form;