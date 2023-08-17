document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.value;
    const InputWithdrawalTotal = parseFloat(withdrawAmountString);

    const TotalWithdrawal = document.getElementById('total-withdraw');
    const TotalWithdrawalString = TotalWithdrawal.innerText;
    const withdrawalMoney = parseFloat(TotalWithdrawalString);

    const Balance = document.getElementById('balance')
    const BalanceString = Balance.innerText;
    const newBalance = parseFloat(BalanceString);

    withdrawAmount.value = '';

    if(InputWithdrawalTotal > newBalance){
        alert('tor bap er bank e oto taka nai')
        return;
    }

    if(isNaN(InputWithdrawalTotal)){
        alert('please provide number');
        return;
    }

    const withdrawalTotal = withdrawalMoney + InputWithdrawalTotal;
    TotalWithdrawal.innerText = withdrawalTotal;

    const currentBalance = newBalance - InputWithdrawalTotal;
    Balance.innerText = currentBalance;

   





})