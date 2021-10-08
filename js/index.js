const billAmount = document.querySelector('.bill-amount');
const tipButtons = document.querySelectorAll('button[class^="tip"]');
const customTip = document.querySelector('.tip_custom');
const peopleNumber = document.querySelector('.people-number');
const personTip = document.querySelector('.person_tip');
const personTotal = document.querySelector('.total_price');
const resetBtn = document.querySelector('.reset_btn');
const zeroPeopleError = document.querySelector('.people-zeroError');
const zeroBillError = document.querySelector('.bill_zeroError');


tipButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        zeroBillError.innerText = '';
        zeroPeopleError.innerText = '';
        if (billAmount.value == 0 && peopleNumber.value == 0) {
            zeroBillError.innerText = "Can't be 0$";
            zeroPeopleError.innerText = "Can't be 0";
            personTip.innerText = '$0.00';
            personTotal.innerText = '$0.00';
            customTip.value = '';
        } else if (billAmount.value == 0 && !peopleNumber.value == 0) {
            zeroBillError.innerText = "Can't be 0$";
            personTip.innerText = '$0.00';
            personTotal.innerText = '$0.00';
            customTip.value = '';
        } else if (peopleNumber.value == 0 && !billAmount.value == 0) {
            zeroPeopleError.innerText = "Can't be 0";
            personTip.innerText = '$0.00';
            personTotal.innerText = '$0.00';
            customTip.value = '';
        } else {
            customTip.value = '';
            personTipCost = parseFloat(billAmount.value) * (parseFloat(this.innerText) / 100) / peopleNumber.value;
            personTotalCost = parseFloat(billAmount.value) / peopleNumber.value + personTipCost;
            personTip.innerText = "$" + personTipCost.toFixed(2)
            personTotal.innerText = "$" + personTotalCost.toFixed(2);
        }
    })
})

customTip.addEventListener('change', function (e) {
    if (billAmount.value == 0 && peopleNumber.value == 0) {
        zeroBillError.innerText = "Can't be 0$";
        zeroPeopleError.innerText = "Can't be 0";
        personTip.innerText = '$0.00';
        personTotal.innerText = '$0.00';
    } else if (billAmount.value == 0 && !peopleNumber.value == 0) {
        zeroBillError.innerText = "Can't be 0$";
        personTip.innerText = '$0.00';
        personTotal.innerText = '$0.00';
    } else if (peopleNumber.value == 0 && !billAmount.value == 0) {
        zeroPeopleError.innerText = "Can't be 0";
        personTip.innerText = '$0.00';
        personTotal.innerText = '$0.00';
    } else {
        personTipCost = parseFloat(billAmount.value) * (parseFloat(this.value) / 100) / peopleNumber.value;
        personTotalCost = parseFloat(billAmount.value) / peopleNumber.value + personTipCost;
        personTip.innerText = "$" + personTipCost.toFixed(2)
        personTotal.innerText = "$" + personTotalCost.toFixed(2);
    }
})

resetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    billAmount.value = '';
    peopleNumber.value = '';
    personTip.innerText = '$0.00';
    personTotal.innerText = '$0.00';
    customTip.value = '';
})