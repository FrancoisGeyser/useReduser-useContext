import React, { useContext, useState } from "react";

// State
import { UserManagementContext, actions, createAction } from "../state/reducer";

export default props => {
    const _defaultEntries = {
    name: "",
    email: "",
    phone: ""
    };
    const dispatch = useContext(UserManagementContext);
    const [fields, setFields] = useState({ ..._defaultEntries });

    const handleInputChange = e => {
    setFields({
        ...fields,
        [e.target.id]: e.target.value
    });
    };

    const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(createAction(actions.ADD_USER, fields));
    setFields(_defaultEntries);
    };

    return (
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
        id="name"
        type="text"
        value={fields.name}
        onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
        id="email"
        type="text"
        value={fields.email}
        onChange={handleInputChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
        id="phone"
        type="text"
        value={fields.phone}
        onChange={handleInputChange}
        />
        <button type="submit">Add user</button>
    </form>
    );
};