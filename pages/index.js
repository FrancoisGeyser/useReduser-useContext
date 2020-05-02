import React, { useReducer, useEffect, useState } from "react";

// Data
import initialState from "../state/initialstate";
import { reducer, StateContext, UserManagementContext, actions, createAction } from "../state/reducer";

// Components
import AddUser from "../components/AddUser";
import UserList from "../components/UserList";

export default function Home(props) {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [loadingTime, setLoadingTime] = useState(0)
  useEffect(() => {
    // simulate loading of items from an API
    dispatch({
        type: actions.GET_USERS
    });
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          return response.json()
        })
        .then(json => {
          if (json.length > 0) {
            json.map(user => dispatch(createAction(actions.ADD_USER, { name: user.name, email: user.email, phone: user.phone })))
            setTimeout(() =>dispatch(createAction(actions.GET_USERS_SUCCESS)), loadingTime)
          } else {
            dispatch(createAction(actions.ERROR))
          }
        })
  }, [loadingTime]);
  return (
    <div>
      <h1>useReducer test</h1>
      <div>
      <UserManagementContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
        <hr />
                <div>
                  <h2>Fake api error</h2>
                  <button onClick={()=>dispatch(createAction(actions.ERROR))}>Error</button>
                  <button onClick={()=>dispatch(createAction(actions.CLRERROR))}>Clear Error</button>
                  <h2>Fake slow api call</h2>
                  <button onClick={()=>setLoadingTime(4000)}>Slow loading</button>
                </div>
            <div >
                <h2>Add a new user</h2>
                <AddUser />
            </div>
            <div >
                <h2>User list</h2>
                  {state.loadingUsers && <div>...loading</div>}
                  {state.loadingError && <div>!!ERROR!!</div>}
                  {!state.loadingUsers & !state.loadingError ? <UserList /> : <div/>}
            </div>
        </StateContext.Provider>
    </UserManagementContext.Provider>
      </div>
    </div>
  )
}
