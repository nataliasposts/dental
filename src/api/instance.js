export const registeredUser = (Birthday, FirstName, SecondName, password, email) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));

        if (!usersList) {
            usersList = [];
        }
        const userID = Math.floor(Math.random() * 10000);

        usersList.push({Birthday, FirstName, SecondName, password, email, userID });
        window.localStorage.setItem('registredUsersList', JSON.stringify(usersList));
        res({ data: userID });
    })
};


export const loginedUser = (email) => {
    return new Promise((res, rej) => {
        let usersList = JSON.parse(window.localStorage.getItem('registredUsersList'));
        const userFind = usersList.find(user => user.email === email);
        res(userFind);
    })
}