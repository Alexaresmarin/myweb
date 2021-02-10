const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values
    var usernameValue = username.value.trim();
    var passwordValue = password.value.trim();
    var cond = 1;

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
        cond = 0;
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
        cond = 0;
    }

    if (cond === 1) {
        axios.get(`https://jsonserver-alexares.herokuapp.com/users?email=${usernameValue}`)
        .then(({data}) => {
            if (data[0] === undefined) {
                setErrorFor(username, 'The username and password combination is invalid');
                setErrorFor(password, 'The username and password combination is invalid')
            }
            else {
                if (data[0].password === passwordValue) {
                    console.log(passwordValue)
                    setSuccessFor(username);
                    setSuccessFor(password);
                    alert('You have logged in successfully');
                    window.location.href = "./index2.html";
                }
                else {
                    setErrorFor(username, 'The username and password combination is invalid');
                    setErrorFor(password, 'The username and password combination is invalid')
                }
            }
        })
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
