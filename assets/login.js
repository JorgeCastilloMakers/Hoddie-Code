
let localUsers = localStorage.getItem('users');
let usersList = [];

if (localUsers){
    usersList = JSON.parse(localUsers);
}
loginError.style.display = 'none';

const loginUser = (e) => {
    e.preventDefault();
    loginError.style.display = 'none';
    let user = emailInput.value;
    let password = passwordInput.value;

    let match = false;

    if (user !== '' && password !== ''){
        usersList.forEach(userEl => {
            if (userEl.email === user){
                if(userEl.password === password){
                    match = true;
                    Swal.fire({
                        position: 'center',
                        imageUrl: '/assets/img/success.gif',
                        title: 'Login successful',
                        color: '#000',
                        with: '200px',
                        imageWidth: 100,
                        imageHeight: 100,
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true
                      })
                      setTimeout(() => {
                        location.href = '/index.html';
                      }, 2000);
                    
                    localStorage.setItem('userOn', JSON.stringify(userEl));
                    return
                }
            }
        });

        if(!match){
            loginError.style.display = 'block';
            loginError.innerHTML = 'Some of the data entered is incorrect, please try again.'
        }
    }else{
        loginError.style.display = 'block';
        loginError.innerHTML = 'Please, complete all the fields.'
    }

}

formLogin.addEventListener('submit', (e) => loginUser(e))