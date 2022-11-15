const checkoutForm = document.getElementById('checkout-form');
let nameBilling = document.getElementById('nameBilling');
let emailBilling = document.getElementById('emailBilling');
let addressBilling = document.getElementById('addressBilling');
const order = document.getElementById('order');
const payMethod = document.getElementById('pay-method');
const btnCloseCheckout = document.getElementById('close-checkout');
const btnPay = document.getElementById('btn-pay');
const totalBill = document.getElementById('totalBill');

let userON = localStorage.getItem('userOn');
let usersLogin = [];

if (userON){
    usersLogin = JSON.parse(userON);
}


const renderOrder = () => {
    order.innerHTML = cart.map(renderOrderItems).join("");

    if(!usersLogin.email){
        nameBilling.value = "";
        emailBilling.value = "";
        addressBilling.value = "";

    }else{
        nameBilling.value = `${usersLogin.name}`
        emailBilling.value = `${usersLogin.email}`
        addressBilling.value = `${usersLogin.address}`
    }

}

const renderOrderItems = (orderCart) => {
    const { id, name, size, quantity, price} = orderCart;
    totalBill.innerText = `Total: $${cartTotal()}`
    return `
        <div>
            <h4>ID: #${id}</h4>
            <h4>Name: ${name}</h4>
            <h4>Size: ${size}</h4>
            <h4>Quantity: ${quantity}</h4>
            <h4>Price: $${price}</h4>
        </div>
    `
}

const closeCheckoutModal = () => {
    checkoutModal.style.display = "none";
}

btnCloseCheckout.addEventListener('click', closeCheckoutModal)

let payMethodSelected = payMethod.options[payMethod.selectedIndex].value;

const clientName = "Name: "
const clientEmail = "Email: "
const clientAddress = "Address: "
const payWith = "Pay method: ";
const totalTicket = `Total: $${cartTotal()}`;

const prepareTicket = (orderCart) => {
    const { id, name, size, quantity, price} = orderCart;  
    let ticket = `ID: ${id}, Name: ${name}, Size: ${size}, Quantity: ${quantity},Price: $${price}    `;
    return ticket
}

let buildTicket =  cart.map(prepareTicket).join("");

const takeDataOrder = () => {
    if(!nameBilling.value || !emailBilling.value || !addressBilling.value){
        Swal.fire({
            position: 'center',
            title: 'You have to complete all the Billing data',
            color: '#000',
            showConfirmButton: false,
            timer: 1500,
          })

    }else if(!cart.length){
        if(!cart.length){
            Swal.fire({
                position: 'center',
                title: 'The cart is empty, please add something.',
                color: '#000',
                showConfirmButton: false,
                timer: 2000,
              })
            }
        return
    }
    let mensaje = `https://api.whatsapp.com/send?phone=5491162744478&text=
                    ${clientName}%20${nameBilling.value}%0A
                    ${clientEmail}%20${emailBilling.value}%0A
                    ${clientAddress}%20${addressBilling.value}%0A
                    Order:%20${JSON.stringify(buildTicket)}%0A
                    ${payWith}%20${payMethodSelected}%0A
                    ${totalTicket}
                    `;


        Swal.fire({
        title: 'Happy Coding!!',
        text: 'You will be redirected to Whatsapp to send the purchase and the cart will be emptied',
        color: '#000',
        showCancelButton: true,
        confirmButtonColor: '#FFDE59',
        cancelButtonColor: '#000'
      }).then((result) => {
        if (result.isConfirmed) {
            window.open(mensaje, '_blank');
            cart = [];
            saveLocalStorage();
            renderCart();
            renderCounter()
            renderTotal(cart)
            closeCheckoutModal()
        }else if (result.dismiss){
            return
        }
      })                
       
    

}

btnPay.addEventListener('click', takeDataOrder)

