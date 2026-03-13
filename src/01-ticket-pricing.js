/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Validate age input
  if (typeof age !== 'number' || age < 0) {
    return -1;
  }

  let price;

  // Determine base price based on age groups
  if (age <= 12) {
    price = 8; // Children
  } else if (age <= 17) {
    price = 12; // Teens
  } else if (age <= 59) {
    price = 15; // Adults
  } else {
    price = 10; // Seniors
  }

  // Add weekend surcharge if applicable
  if (isWeekend) {
    price += 3;
  }

  return price;
}
