import React, { useContext } from "react";

// State
import {
    UserManagementContext,
    StateContext,
    actions,
    createAction
} from "../state/reducer";

export default props => {
    const state = useContext(StateContext);
    const dispatch = useContext(UserManagementContext);

    const handleRemoveItem = id => {
    dispatch(createAction(actions.REMOVE_USER, id));
    };

    return (
    <>
        {state.userList.length == 0 && <p>no items in list</p>}
        {state.userList && (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {state.userList &&
                state.userList.map(item => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                    <button onClick={() => handleRemoveItem(item.id)}>
                        remove
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        )}
    </>
    );
};