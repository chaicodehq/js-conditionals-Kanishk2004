/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  const availableSizes = ["small", "medium", "large"];
  const coffeeType = ["regular", "latte", "cappuccino", "mocha"];
  let totalPrice = 0;

  if (!availableSizes.includes(size) || !coffeeType.includes(type)) {
    return -1;
  }
  if (size === "small") totalPrice = 3;
  if (size === "medium") totalPrice = 4;
  if (size === "large") totalPrice = 5;

  switch (type) {
    case "latte":
      totalPrice += 1;
      break;
    case "cappuccino":
      totalPrice += 1.5;
      break;
    case "mocha":
      totalPrice += 2;
      break;
  
    default:
      totalPrice += 0;
      break;
  }

  extras.extraShot ? totalPrice += 0.75 : totalPrice += 0;
  extras.whippedCream ? totalPrice += 0.5 : totalPrice += 0;

  return totalPrice
  
}
