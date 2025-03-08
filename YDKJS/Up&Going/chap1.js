console.log("loaded Successfully");

function purchasePhone() {
  // account balance
  let accountBalance = 100000;
  console.log("Starting balance- ", accountBalance);

  // spending threshold
  const SPENDING_THRESHOLD = 90000;

  // accessory price
  const ACCESSORY_PRICE = 10000;

  // TAX
  const TAX_RATE = 0.13;

  let phonePrice;

  // phone price
  phonePrice = Number(
    prompt("What is the price of the phone you want to buy? ")
  );
  accountBalance > SPENDING_THRESHOLD;

  // total cost of purchase
  let totalCost = phonePrice + ACCESSORY_PRICE + phonePrice * TAX_RATE;

  console.log("total cost after tax- ", totalCost);

  // condition to buy phone
  if (totalCost <= SPENDING_THRESHOLD && accountBalance > SPENDING_THRESHOLD) {
    accountBalance = accountBalance - totalCost;
    console.log("New balance -", accountBalance);
    console.log(
      `\n Phone Price: $${phonePrice} \n
       Accessory Price: $${ACCESSORY_PRICE} \n
       TAX: ${TAX_RATE * 10}% \n
       Total Cost: $${totalCost} \n
       Current Balance: $${accountBalance}
      `
    );
  } else {
    console.log("Insufficient Funds");
  }
}

purchasePhone();
