let total = calculateTotalPrice();
setTotalPriceInHTML(total);

/**
 * Calculate the price of all the items in the list
 *
 * @returns {number}
 */
function calculateTotalPrice()
{
    let receipts = document.getElementsByTagName('li');
    let total = 0.0;

    //Count all the receipts
    for (let i = 0; i < receipts.length; i++) {
        total += parseFloat(receipts[i].innerHTML);
    }

    return total;
}

/**
 * Update the HTML to show the total price
 *
 * @param total
 */
function setTotalPriceInHTML(total)
{
    let totalPlaceholder = document.getElementById('total');
    totalPlaceholder.innerHTML = total.toFixed(2);
}
