// Add Function in Donate Now Noakhali Button 
document.querySelector('#btn-donate-now-noakhali').addEventListener('click', function () {
    document.querySelector('#btn-donate-now-noakhali').classList.add('bg-[#B4F461]');
    document.querySelector('#btn-donate-now-feni').classList.remove('bg-[#B4F461]');
    document.querySelector('#btn-donate-now-quota').classList.remove('bg-[#B4F461]');
    const donationAmount = getInputValueById('input-donation-amount-noakhali');
    if (typeof donationAmount !== 'number' || donationAmount <= 0) {
        alert('Please provide valid number.');
        return;
    }
    const preDonationAmount = getTextFieldValueById('display-donation-amount-noakhali'); 
    const currentDonationAmount = preDonationAmount + donationAmount;
    document.querySelector('#display-donation-amount-noakhali').innerText = currentDonationAmount;

    const initialAmount = getTextFieldValueById('initial-amount');
    const currentAmount = initialAmount - donationAmount;
    // set the current amount in initial filed
    document.querySelector('#initial-amount').innerText = currentAmount;

    // Add History For Noakhali  
    // donation title
    const donateTitle = document.querySelector('#donate-title-noakhali').innerText; 
    // get current date
    const date = new Date();
    // create a div
    const div = document.createElement('div');
    div.classList.add('border');
    div.classList.add('rounded-lg');
    div.classList.add('p-8');
    div.classList.add('mb-6');
    div.classList.add('mt-8');
    div.innerHTML = `
        <h2 class='text-2xl mb-4'>${donationAmount} Taka is ${donateTitle}</h2>
        <p>${date}</p>
    `;
    // get donation history container
    const donationHistoryContainer = document.querySelector('#donation-history');
    donationHistoryContainer.appendChild(div); 
});

// Add Function in Donate Now Feni Button 
document.querySelector('#btn-donate-now-feni').addEventListener('click', function () {
    document.querySelector('#btn-donate-now-feni').classList.add('bg-[#B4F461]');
    document.querySelector('#btn-donate-now-noakhali').classList.remove('bg-[#B4F461]');
    document.querySelector('#btn-donate-now-quota').classList.remove('bg-[#B4F461]');
    const donationAmount = getInputValueById('input-donation-amount-feni');
    if (typeof donationAmount !== 'number' || donationAmount <= 0) {
        alert('Please provide valid number.');
        return;
    }
    const preDonationAmount = getTextFieldValueById('display-donation-amount-feni'); 
    const currentDonationAmount = preDonationAmount + donationAmount;
    document.querySelector('#display-donation-amount-feni').innerText = currentDonationAmount;

    const initialAmount = getTextFieldValueById('initial-amount');
    const currentAmount = initialAmount - donationAmount;
    // set the current amount in initial filed
    document.querySelector('#initial-amount').innerText = currentAmount;

    // Add History For Feni  
    // donation title
    const donateTitle = document.querySelector('#donate-title-feni').innerText;
    // get current date
    const date = new Date();
    // create a div
    const div = document.createElement('div');
    div.classList.add('border');
    div.classList.add('rounded-lg');
    div.classList.add('p-8');
    div.classList.add('mb-6');
    div.classList.add('mt-8');
    div.innerHTML = `
        <h2 class='text-2xl mb-4'>${donationAmount} Taka is ${donateTitle}</h2>
        <p>${date}</p>
    `;
    // get donation history container
    const donationHistoryContainer = document.querySelector('#donation-history');
    donationHistoryContainer.appendChild(div);
});

// Add Function in Donate Now Quota Button 
document.querySelector('#btn-donate-now-quota').addEventListener('click', function () {
    document.querySelector('#btn-donate-now-quota').classList.add('bg-[#B4F461]');
    document.querySelector('#btn-donate-now-noakhali').classList.remove('bg-[#B4F461]');
    document.querySelector('#btn-donate-now-feni').classList.remove('bg-[#B4F461]');
    
    const donationAmount = getInputValueById('input-donation-amount-quota');
    if (typeof donationAmount !== 'number' || donationAmount <= 0) {
        alert('Please provide valid number.');
        return;
    }
    const preDonationAmount = getTextFieldValueById('display-donation-amount-quota'); 
    const currentDonationAmount = preDonationAmount + donationAmount;
    document.querySelector('#display-donation-amount-quota').innerText = currentDonationAmount;

    const initialAmount = getTextFieldValueById('initial-amount');
    const currentAmount = initialAmount - donationAmount;
    // set the current amount in initial filed
    document.querySelector('#initial-amount').innerText = currentAmount;

    // Add History For Quota  
    // donation title
    const donateTitle = document.querySelector('#donate-title-quota').innerText;
    // get current date
    const date = new Date();
    // create a div
    const div = document.createElement('div');
    div.classList.add('border');
    div.classList.add('rounded-lg');
    div.classList.add('p-8');
    div.classList.add('mb-6');
    div.classList.add('mt-8');
    div.innerHTML = `
        <h2 class='text-2xl mb-4'>${donationAmount} Taka is ${donateTitle}</h2>
        <p>${date}</p>
    `;
    // get donation history container
    const donationHistoryContainer = document.querySelector('#donation-history');
    donationHistoryContainer.appendChild(div);
});


// Show Donation Cards
document.querySelector('#btn-donation').addEventListener('click', function () {
    document.querySelector('#btn-donation').classList.add('bg-[#B4F461]');
    document.querySelector('#btn-history').classList.remove('bg-[#B4F461]');
    // remove the hidden class list from donation cards section 
    document.querySelector('#card-container').classList.remove('hidden');
    // add the hidden class to the history section
    document.querySelector('#donation-history').classList.add('hidden');
})

// Show Donation History
document.querySelector('#btn-history').addEventListener('click', function () {
    document.querySelector('#btn-history').classList.add('bg-[#B4F461]');
    document.querySelector('#btn-donation').classList.remove('bg-[#B4F461]');
    // remove the hidden class list from history section
    document.querySelector('#donation-history').classList.remove('hidden');
    // add the hidden class to the donation cards section
    document.querySelector('#card-container').classList.add('hidden');
})

