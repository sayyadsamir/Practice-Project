
let darkmode = false;
// let lightmode = true;

document.querySelector("#mode").addEventListener('click', function (e) {

    darkmode = !darkmode;

    if (darkmode) {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        document.getElementsByTagName('label').style.color='red'
        
    }
    else {

        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }

}, false)

let arr = [
    {
        name: '',
        pass: ''
    }
]

let obj;

document.querySelector('#Login').addEventListener('click', function () {

    let Username = document.querySelector('#username').value;
    let Password = document.querySelector('#password').value;

    obj = { name: Username, pass: Password };

    if (Username.trim() == "" || Password == "") {

        console.log('Enter A Username and passowrd');

    }
    else if (Password.length < 6) {
        console.log('Password enterd to above 6');
    }
    else {

        arr.push(obj)
        console.log(arr);
    }

}, false)

document.querySelector('#find').addEventListener('click', function () {

    let users = document.querySelector('#Find_User').value;

    let FindUser = arr.find(user => user.name === users);

    if (FindUser) {
        console.log(`user is Available...${users}`);
        alert(`user is Available...${users}`)
    }
    else {
        console.log('Sorry User Not Found In Your Database...');
        alert(`Sorry User Not Found In Your Database...${users}`)
    }
})