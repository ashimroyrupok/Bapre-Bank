document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountString = depositInput.value;
    const depositValue = parseFloat(depositAmountString);

const totalAmount = document.getElementById('total-amount')
const previousTotalAmountString = totalAmount.innerText;
const previousTotalAmount = parseFloat(previousTotalAmountString);

const Balance = document.getElementById('balance')
const BalanceString = Balance.innerText;
const newBalance = parseFloat(BalanceString);


depositInput.value = '';

if(isNaN(depositValue)){
    alert('please provide number')
    return;
}


const NewTotalAmount = depositValue + previousTotalAmount
totalAmount.innerText = NewTotalAmount;

const totalNewBalance = newBalance + depositValue;
Balance.innerText = totalNewBalance;




})