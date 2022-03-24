const PostUser = (user = {}) =>{
    let allUsers = GetUsers() || [];
    user.id = Date.now();

    console.log(user);

    allUsers = [
		...allUsers,
		user
	]

    localStorage.setItem('users', JSON.stringify(allUsers));
}

const GetUsers = () =>{
    return JSON.parse(localStorage.getItem('users'));
}

const GetUserByName = (name = "") =>{
    let allUsers = GetUsers();

    return allUsers.filter(x => x.name === name);
}

const GetUserByEmail = (email = "") =>{
    let allUsers = GetUsers();

    return allUsers.filter(x => x.email === email);
}

export{
    PostUser,
    GetUserByName,
    GetUserByEmail
}