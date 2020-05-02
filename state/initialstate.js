const loaders = {
    // our app uses this to determine if we're loading our list
    loadingUsers: false, 
}

const users = {
    // our initial list of items
     userList: []
}

const errorhandling = {
    loadingError : false
}

export default {
    ...loaders,
    ...errorhandling,
    ...users
};