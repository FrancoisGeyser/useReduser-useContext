export const adduser = (state, action) => {
    const lastId = state.userList.length
    const newUser = {
    ...action.payload,
    id: lastId + 1
    };
    return {
    ...state,
    userList: [...state.userList, newUser]
    };
}

export const removeuser = (state, action) => {
  return state.userList.filter(
        item => item.id !== action.payload
    )
}