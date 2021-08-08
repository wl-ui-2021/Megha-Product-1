var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');
const decreaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
console.log( itemprice.innerHTML);
// console.log(itemval.value);
if(itemval.value <= 0){
itemval.value = 0;
$('#myModal').modal("show");
//alert('Negative quantity not allowed');
}else{
itemval.value = parseInt(itemval.value) - 1;
itemval.style.background = '#fff';
itemval.style.color = '#000';
itemprice.innerHTML  = parseInt(itemprice.innerHTML) - 15;
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) - 15;
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
}
}
const increaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
// console.log(itemval.value);
if(itemval.value >= 7){
itemval.value = 7;
$('#myModal1').modal("show");
//alert('max 7 allowed');
itemval.style.background = 'red';
itemval.style.color = '#fff';
}else{
itemval.value = parseInt(itemval.value) + 1;
itemprice.innerHTML  = parseInt(itemprice.innerHTML ) + 15;
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + 15;
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
}
}

const  discount_code = () => {
let totalamtcurr = parseInt(total_cart_amt.innerHTML);
let error_trw = document.getElementById('error_trw');
if(discountCode.value === 'Megha'){
let newtotalamt = totalamtcurr - 15;
total_cart_amt.innerHTML = newtotalamt;
error_trw.innerHTML = "congratulation succesfully applid code";
}else{
error_trw.innerHTML = "Try Again! Valid code is Megha";
}
}
function validate()
{
var recipient=document.getElementById('recipient-name')
var numberLink=document.getElementById('number-name')
var paymentMode=document.getElementById('cash-name')


    if(recipient.value.trim()==""||numberLink.value.trim()==""||paymentMode.value.trim()==""){
        alert("you have to fill every field ")
    }
    else{

    }
}

