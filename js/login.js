const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    var cond = 1;

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
        cond = 0;
    }
    else {
        axios.get(`https://jsonserver-alexares.herokuapp.com/users?user=${usernameValue}`)
        .then(({data}) => {
            if (usernameValue === data[0].user) {
                setErrorFor(username, 'This username already exists');
                cond = 0;
            }
            else setSuccessFor(username);
        })
    }

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        cond = 0;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email'); 
        cond = 0;
	} else {
		axios.get(`https://jsonserver-alexares.herokuapp.com/users?email=${emailValue}`)
        .then(({data}) => {
            if (emailValue === data[0].email) {
                setErrorFor(email, 'This email already exists');
                cond = 0;
            }
            else setSuccessFor(email);
        })
	}

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
        cond = 0;
    }
    else {
        setSuccessFor(password);
    }

    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
        cond = 0;
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
        cond = 0;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
        cond = 0;
	} else{
		setSuccessFor(password2);
	}

    if (cond === 1) {
        axios.post('https://jsonserver-alexares.herokuapp.com/users', {
            user: usernameValue,
            email: emailValue,
            password: passwordValue
        })
        alert('your account has been registered successfully');
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

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

