const billAmount = document.querySelector('.bill-amount');
const tipButtons = document.querySelectorAll('button[class^="tip"]');
const customTip = document.querySelector('.tip_custom');
const peopleNumber = document.querySelector('.people-number');
const personTip = document.querySelector('.person_tip');
const personTotal = document.querySelector('.total_price');
const resetBtn = document.querySelector('.reset_btn');
const zeroPeopleError = document.querySelector('.people-zeroError');
const zeroBillError = document.querySelector('.bill_zeroError');
const inputs = document.querySelectorAll('input');

window.onload = function () {
    if (window.innerWidth >= 1440 && billAmount.value == 0 && peopleNumber.value == 0) {
        resetBtn.classList.add('noActive');
        resetBtn.style.backgroundColor = 'hsl(183, 78%, 24%)';
        resetBtn.disabled = true;
    }
}

window.addEventListener('resize', function () {
    if (window.innerWidth < 1440) {
        resetBtn.classList.remove('noActive');
        resetBtn.style.backgroundColor = '';
        resetBtn.disabled = false;
    } else if (window.innerWidth >= 1440 && billAmount.value == 0 && peopleNumber.value == 0) {
        resetBtn.classList.add('noActive');
        resetBtn.style.backgroundColor = 'hsl(183, 78%, 24%)';
        resetBtn.disabled = true;
    } else {
        resetBtn.classList.remove('noActive');
        resetBtn.classList.add('Active');
        resetBtn.style.backgroundColor = '';
        resetBtn.disabled = false;
    }
})

peopleNumber.addEventListener('change', function () {
    if (peopleNumber.value != 0 || billAmount.value != 0) {
        resetBtn.disabled = false;
        resetBtn.classList.remove('noActive');
        resetBtn.classList.add('active');
        resetBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
    } else {
        resetBtn.disabled = true;
        resetBtn.classList.remove('active');
        resetBtn.classList.add('noActive');
        resetBtn.style.backgroundColor = 'hsl(183, 78%, 24%)';
    }

    if (peopleNumber.value != 0) {
        peopleNumber.style.border = 'none';
    }
})

billAmount.addEventListener('change', function () {
    if (billAmount.value != 0 || peopleNumber.value != 0) {
        resetBtn.disabled = false;
        resetBtn.classList.remove('noActive');
        resetBtn.classList.add('active');
        resetBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
    } else {
        resetBtn.disabled = true;
        resetBtn.classList.remove('active');
        resetBtn.classList.add('noActive');
        resetBtn.style.backgroundColor = 'hsl(183, 78%, 24%)';
    }

    if (billAmount.value != 0) {
        billAmount.style.border = 'none';
    }
})
tipButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        zeroBillError.innerText = '';
        zeroPeopleError.innerText = '';
        if (billAmount.value <= 0 && peopleNumber.value <= 0) {
            zeroBillError.innerText = "Can't be 0$ or less";
            zeroPeopleError.innerText = "Can't be 0 or less";
            personTip.innerText = '$0.00';
            personTotal.innerText = '$0.00';
            customTip.value = '';
            peopleNumber.style.outline = 'none !important';
            peopleNumber.style.border = '2px solid hsl(13, 70%, 61%)';
            billAmount.style.outline = 'none !important';
            billAmount.style.border = '2px solid hsl(13, 70%, 61%)';
        } else if (billAmount.value <= 0) {
            zeroBillError.innerText = "Can't be 0$ or less";
            personTip.innerText = '$0.00';
            personTotal.innerText = '$0.00';
            customTip.value = '';
            billAmount.style.outline = 'none !important';
            billAmount.style.border = '2px solid hsl(13, 70%, 61%)';
        } else if (peopleNumber.value <= 0) {
            zeroPeopleError.innerText = "Can't be 0 or less";
            personTip.innerText = '$0.00';
            personTotal.innerText = '$0.00';
            customTip.value = '';
            peopleNumber.style.outline = 'none !important';
            peopleNumber.style.border = '2px solid hsl(13, 70%, 61%)';
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
    if (this.value <= 0) {
        alert('Za mały tip');
        this.value = '';
    } else if (billAmount.value <= 0 && peopleNumber.value <= 0) {
        zeroBillError.innerText = "Can't be 0$ or less";
        zeroPeopleError.innerText = "Can't be 0 or less";
        personTip.innerText = '$0.00';
        personTotal.innerText = '$0.00';
        peopleNumber.style.outline = 'none !important';
        peopleNumber.style.border = '2px solid hsl(13, 70%, 61%)';
        billAmount.style.outline = 'none !important';
        billAmount.style.border = '2px solid hsl(13, 70%, 61%)';
    } else if (billAmount.value <= 0) {
        zeroBillError.innerText = "Can't be 0$ or less";
        personTip.innerText = '$0.00';
        personTotal.innerText = '$0.00';
        billAmount.style.outline = 'none !important';
        billAmount.style.border = '2px solid hsl(13, 70%, 61%)';
    } else if (peopleNumber.value <= 0) {
        zeroPeopleError.innerText = "Can't be 0 or less";
        personTip.innerText = '$0.00';
        personTotal.innerText = '$0.00';
        peopleNumber.style.outline = 'none !important';
        peopleNumber.style.border = '2px solid hsl(13, 70%, 61%)';
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
    resetBtn.disabled = true;
    resetBtn.classList.remove('active');
    resetBtn.classList.add('noActive');
    resetBtn.style.backgroundColor = 'hsl(183, 78%, 24%)';
})

resetBtn.addEventListener('mouseover', function () {
    if (resetBtn.classList.contains('active')) {
        resetBtn.style.backgroundColor = 'hsl(173, 61%, 77%)';
    }
})

resetBtn.addEventListener('mouseout', function () {
    if (resetBtn.classList.contains('active')) {
        resetBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
    }
})