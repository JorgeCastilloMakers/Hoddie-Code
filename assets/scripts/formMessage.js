const form = document.getElementById('formMessage');
const nameForm = document.getElementById('name');
const emailForm = document.getElementById('email');
const messageForm = document.getElementById('message');

const takeData = (e) =>{
e.preventDefault()
    if (!nameForm.value || !emailForm.value || !messageForm.value){
        Swal.fire({
            position: 'center',
            title: 'You have to complete all the fields.',
            color: '#000',
            showConfirmButton: false,
            timer: 1500,
          })
    }else{
        let message = `Hi! I am ${nameForm.value}, my email direction is ${emailForm.value} and I need: ${messageForm.value}`
        let whatsppp = `https://api.whatsapp.com/send?phone=5491162744478&text=${message}`;
        sendMessage(whatsppp)
        return 
    }
}



const sendMessage = (whats) => {
    Swal.fire({
        title: 'Thanks',
        text: 'You will be redirected to Whatsapp to send the message.',
        color: '#000',
        showCancelButton: true,
        confirmButtonColor: '#FFDE59',
        cancelButtonColor: '#000'
      }).then((result) => {
        if (result.isConfirmed) {
            window.open(whats, '_blank');
        }else if (result.dismiss){
            return
        }
      })    

}

   
form.addEventListener('submit', takeData )