document.addEventListener("DOMContentLoaded", function() {
    const denominations = [500, 200, 100, 50, 20, 10];
    const totalCashElement = document.getElementById("totalCash");
    const totalNotesElement = document.getElementById("totalNotes");
    const amountInWordsElement = document.getElementById("amountInWords");

    function updateTotals() {
        let totalCash = 0;
        let totalNotes = 0;

        denominations.forEach(value => {
            let quantity = document.getElementById(`note${value}`).value || 0;
            quantity = parseInt(quantity);
            totalCash += quantity * value;
            totalNotes += quantity;
            document.getElementById(`total${value}`).innerText = quantity * value;
        });

        totalCashElement.innerText = totalCash;
        totalNotesElement.innerText = totalNotes;
        amountInWordsElement.innerText = numberToWords(totalCash);
    }

    function numberToWords(num) {
        if (num === 0) return "Zero";
        return num.toLocaleString("en-IN") + " Rupees"; // Converts number to Indian format
    }

    denominations.forEach(value => {
        document.getElementById(`note${value}`).addEventListener("input", updateTotals);
    });

    document.getElementById("clearAll").addEventListener("click", function() {
        denominations.forEach(value => {
            document.getElementById(`note${value}`).value = 0;
            document.getElementById(`total${value}`).innerText = "0";
        });
        updateTotals();
    });

    document.getElementById("copyDetails").addEventListener("click", function() {
        let text = `Total Cash: ${totalCashElement.innerText}\nTotal Notes: ${totalNotesElement.innerText}\nIn Words: ${amountInWordsElement.innerText}`;
        navigator.clipboard.writeText(text);
        alert("Details copied!");
    });
});
