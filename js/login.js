// step 1
document.getElementById('btn-signIn').addEventListener('click', function(){

    // step 2 get the email value
    // always remember use .value to get value from input fieldl.
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;
    // step 3
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;
    

    // step 4. compare email and the password
    // Danger : can't compare password and email in client site
    if (email === 'bap@beta.com' && password === "secret"){
        window.location.href = 'bank.html'
    }
    else{
        alert('thik koira sob kichu bosa harmajada')
    }

})