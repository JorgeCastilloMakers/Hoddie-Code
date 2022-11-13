const checkoutForm = document.getElementById('checkout-form');
let nameBilling = document.getElementById('nameBilling');
let emailBilling = document.getElementById('emailBilling');
let addressBilling = document.getElementById('addressBilling');
const order = document.getElementById('order');
const payMethod = document.getElementById('pay-method');
const btnCloseCheckout = document.getElementById('close-checkout');
const btnPay = document.getElementById('btn-pay');
const totalBill = document.getElementById('totalBill');


const renderOrder = () => {
    order.innerHTML = cart.map(renderOrderItems).join("");

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



//billing data
let userON = localStorage.getItem('userOn');
let usersLogin = [];

if (userON){
    usersLogin = JSON.parse(userON);
}

if(!usersLogin){
    nameBilling.value === undefined ? nameBilling.value = "" : nameBilling.value;
    nameBilling.value;
    addressBilling.value;
}else{
    nameBilling.value = `${usersLogin.name}`
    emailBilling.value = `${usersLogin.email}`
    addressBilling.value = `${usersLogin.address}`
}

let payMethodSelected = payMethod.options[payMethod.selectedIndex].value;

const clientName = "Name: "
const clientEmail = "Email: "
const clientAddress = "Address: "
const payWith = "Pay method: ";




const clientOrder = cart.map(e => JSON.stringify(e))


const takeDataOrder = () => {
    
    let mensaje = `https://api.whatsapp.com/send?phone=5491162744478&text=
                    %0A${clientName}%20${nameBilling.value}%0A
                    ${clientEmail}%20${emailBilling.value}%0A
                    ${clientAddress}%20${addressBilling.value}%0A
                    Order:%20${clientOrder}%0A
                    ${payWith}%20${payMethodSelected}
                    `;
    if(window.confirm("You will be redirected to Whatsapp to send the purchase and the cart will be emptied")){
        window.open(mensaje, '_blank');
        setTimeout(() => {
            alert("Thanks for your purchase! happy coding!");
        }, 3000);
        cart = [];
        saveLocalStorage();
        renderCart();
        renderCounter()
        renderTotal(cart)
        closeCheckoutModal()
    }else{
        return
    }                
    

}

btnPay.addEventListener('click', takeDataOrder)

