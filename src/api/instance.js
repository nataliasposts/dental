export const registeredUser = (Birthday, FirstName, SecondName, password, email) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));

        if (!usersList) {
            usersList = [];
        }
        const userId = Math.floor((Math.random() * 1000)+1);
        const loggedIn = true;
        usersList.push({Birthday, FirstName, SecondName, password, email, userId, loggedIn });
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res({ dataId: userId,  dataLogged: loggedIn});
    })
};

export const loginUser = (email) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const userData = usersList.find(user => user.email === email);
        res(userData);
    })
};


