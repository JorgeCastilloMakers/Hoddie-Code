registerError.style.display = 'none'
let localUsers = localStorage.getItem('users');
let usersList = [];


if (localUsers){
    usersList = JSON.parse(localUsers);
}

passError.style.display = "none";
nameError.style.display = "none";
emailError.style.display = "none";

const showError = (message) => {
    registerError.innerText = message;
}
const isEmpty = (value) => {
    value === "" ? true : false;
    return 
}


const isNameCorrect = (userName) => {
    if(userName.length > 5){
        return true
    }
} 

const checkUserName = () =>{
    let valid = false;

    const userName = nameUser.value.trim();
    if(isEmpty(userName)){
        console.log("hey")
        showError("You have to complete all the fields");
    } else if (!isNameCorrect(userName)){
        showError("")
        nameError.style.display = "block";
        nameError.innerText = "The name have to contains minimum 6 characters"
    }else{
        nameUser.style = `border: 1px solid green`;
        valid = true;
    }

    return valid;
}
const isEmailValue = (email) => {
    const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegx.test(email)
}

const checkEmailUsed = (email) => {
    let check = usersList.some(e => e.email === email);
    return check

}

const checkUserEmail = () => {
    let valid = false;

    const email = emailUser.value.trim();
    
    if(isEmpty(email)){
        showError("You have to complete all the fields");
    } else if (!isEmailValue(email)){
        emailError.style.display = "block";
        emailError.innerText = "The email is not valid";
    }else if(checkEmailUsed(email)){
        emailError.style.display = "block";
        emailError.innerText = "The email is used"
    }else{
        emailUser.style = `border: 1px solid green`;
        valid = true;
    }
    return valid;

}
const isPassSecure = (password) => {
    const passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passRegx.test(password)
}
const checkUserPassword = () => {
    let valid = false;

    const password = passwordUser.value.trim();
    if(isEmpty(password)){
        showError("You have to complete all the fields");
    }else if(!isPassSecure(password)){
        showError("")
        passError.style.display = "block";
        passError.innerText = "The password must contains minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
    }else{
        passwordInput.style = `border: 1px solid green`;
        valid = true;
    }

    return valid;
}

const checkAddress = () => {
    let valid = false;

    const address = addressUser.value.trim();

    if(address === ""){
        showError("You have to complete all the fields");
    }else{
        addressUser.style = `border: 1px solid green`;
        valid = true;
    }
    return valid
}

const saveUser = (e) => {
    e.preventDefault();
    registerError.style.display = 'none';
    let name = nameUser.value;
    let email = emailUser.value;
    let address = addressUser.value;
    let password = passwordUser.value;


    let isNameValid = checkUserName();
    let isEmailValid = checkUserEmail();
    let isPasswordValid = checkUserPassword();
    let isAddressValid = checkAddress();


    

    if (isNameValid && isEmailValid && isAddressValid && isPasswordValid ){
        
        let newUser = {
            name,
            email,
            address,
            password,
            orders: []
        }

        usersList.push(newUser);
        let users = JSON.stringify(usersList);
        localStorage.setItem('users', users);
        Swal.fire({
            position: 'center',
            imageUrl: '/assets/img/success.gif',
            title: 'Register is complete!',
            color: '#000',
            with: '200px',
            imageWidth: 100,
            imageHeight: 100,
            showConfirmButton: false,
            timer: 1500,

          })
          setTimeout(() => {
            location.href = './login.html';
          }, 1500);

    }else{
        registerError.style.display = 'block';
    }

}

const suggestName = () => {
    nameUser.setAttribute('placeholder', "Cannot be less than 5 characters.")
}
const suggestEmail = () => {
    emailUser.setAttribute('placeholder', "email@example.com")
}
const suggestPassword = () => {
    passwordUser.setAttribute('placeholder', "Minimum 8 characters, 1 uppercase and lowercase letter and number:")
}

const removeSuggest = () => {
    registerError.style.display = 'none'
    nameUser.removeAttribute('placeholder');
    emailUser.removeAttribute('placeholder');
    passwordUser.removeAttribute('placeholder');
    passError.style.display = "none";
    nameError.style.display = "none";
    emailError.style.display = "none"; 
    passwordInput.style = ``;
    emailUser.style = ``;
    nameUser.style = ``;
} 

formRegister.addEventListener('submit', (e) => saveUser(e));
nameUser.addEventListener('focus', suggestName);
nameUser.addEventListener('focusout', removeSuggest);
emailUser.addEventListener('focus', suggestEmail);
emailUser.addEventListener('focusout', removeSuggest);
passwordUser.addEventListener('focus', suggestPassword);
passwordUser.addEventListener('focusout', removeSuggest);