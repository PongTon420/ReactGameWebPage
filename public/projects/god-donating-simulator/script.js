const donateButton = document.getElementById('donate-button');
const donationAmountDisplay = document.getElementById('donation-amount');
const donationInput = document.getElementById('donation-input');
const prayerButton = document.getElementById('pray-button');
const NameInput = document.getElementById('name-input');

const donateSound = new Audio('./sound/fnaf-hooray.mp3');
donateSound.volume = 0.5;
donateSound.loop = false;
donateSound.preload = 'auto';

let donationAmount = 0;
donationAmountDisplay.textContent = donationAmount;

donateButton.addEventListener('click', function () {
    donationInput.disabled = true;
    donateButton.disabled = true;
    setTimeout(() => {
        donationInput.disabled = false;
        donateButton.disabled = false;
        donationInput.focus();
    }, 600);
    donateSound.currentTime = 0;
    donateSound.play();

    const inputAmount = parseInt(donationInput.value, 10);
    if (isNaN(inputAmount) || inputAmount <= 0) {

        alert('Please enter a valid donation amount.');
        return;
    }
    if (inputAmount > 10000000000) {
        alert('Donation amount cannot exceed 10,000,000,000 VND.');
        return;
    }
    donationAmount += inputAmount;
    donationAmountDisplay.textContent = donationAmount.toLocaleString('vi-VN') + ' VND';
    donationInput.value = '';

    const donatorNameDisplay = document.getElementById('donator-name');
    if (NameInput.value === 'You') return alert('You cannot donate as "You". Please enter a different name.');
    if (NameInput.value.length > 20) return alert('Name cannot exceed 20 characters.');
    switch (NameInput.value) {
        case '':
            donatorNameDisplay.textContent = 'You have';
            break;
        default:
            donatorNameDisplay.textContent = NameInput.value + ' has';
    }
    NameInput.value = '';
    const donationMessage = document.getElementById('donation-message');
    donationMessage.style.display = 'block';
    const donationAmountDisplayMessage = document.getElementById('donation-amount-display');
    donationAmountDisplayMessage.textContent = inputAmount.toLocaleString('vi-VN') + ' VND';
    fadeOutMessage(donationMessage, 500);
})

function fadeOutMessage(element, duration) {
    setTimeout(() => {
        element.style.transition = 'opacity 1s';
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = 'none';
            element.style.opacity = 1;
        }, 500);
    }, duration);
}
