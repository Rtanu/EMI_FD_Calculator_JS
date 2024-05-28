function CalculateEMI() {
    const amount = document.getElementById("amount").value;
    const rate = document.getElementById("rate").value;
    const months = document.getElementById("months").value;

    if (amount && rate && months) {
        const interest = (amount * (rate * 0.01)) / months;
        const totalEMI = ((amount / months) + interest).toFixed(2);

        document.getElementById("total").innerHTML = 
            `Your amount is ₹${amount} <br>` + 
            `Your interest is ₹${(interest * months).toFixed(2)} <br>` + 
            `Your total EMI per month is ₹${totalEMI}`;
    } else {
        document.getElementById("total").innerHTML = "Please enter all the fields";
    }
}

function FixedDeposit() {
    const amount = document.getElementById("amount").value;
    let rate = document.getElementById("rate").value;
    const months = document.getElementById("months").value;

    if (amount && rate && months) {
        rate /= 100;
        const years = months / 12;
        const totalFD = Math.round(amount * (1 + rate * years));

        document.getElementById("total").innerHTML = 
            `Your amount is ₹${amount} <br>` + 
            `Your interest is ₹${(totalFD - amount)} <br>` + 
            `Your total Fixed Deposit amount is ₹${totalFD}`;
    } else {
        document.getElementById("total").innerHTML = "Please enter all the fields";
    }
}
