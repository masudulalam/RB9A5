document.querySelector('#btn-donate-now').addEventListener('click', function() {
    // get donation amount
    let donationAmount = document.querySelector('#input-donation-amount').value;
    // donation amount convert string to number
    donationAmount = parseFloat(donationAmount);
    if(typeof donationAmount !== 'number' || donationAmount <= 0) {
        alert('Please provide valid number.');
        return;
    }
    // get previous donation amount
    let preDonationAmount = document.querySelector('#display-donation-amount').innerText;
    // previous donation amount convert string to number
    preDonationAmount = parseFloat(preDonationAmount);
    // added previous donation amount and donation amount together and store the variable 
    const currentDonationAmount = preDonationAmount + donationAmount;
    // Finally display the current donation amount
    document.querySelector('#display-donation-amount').innerText = currentDonationAmount;

    // get the initial amount Field
    const initialAmountField = document.querySelector('#initial-amount');
    // get the initial amount
    let initialAmount = initialAmountField.innerText;
    initialAmount = parseFloat(initialAmount);
    const currentAmount = initialAmount - donationAmount;
    // set the current amount in initial filed
    initialAmountField.innerText = currentAmount;
});

// display cards event
document.querySelector('#btn-donation').addEventListener('click', function(){
    // remove the hidden class list from donation cards section 
    document.querySelector('#donation-card').classList.remove('hidden');
    // add the hidden class to the history section
    document.querySelector('#donation-history').classList.add('hidden');

})
// display history event
document.querySelector('#btn-history').addEventListener('click', function(){
    // remove the hidden class list from history section
    document.querySelector('#donation-history').classList.remove('hidden');
    // add the hidden class to the donation cards section
    document.querySelector('#donation-card').classList.add('hidden');

})