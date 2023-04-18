function compareFractions(fraction1, fraction2) {
  // Convert fractions to decimal numbers
  const decimal1 = fraction1[0] / fraction1[1];
  const decimal2 = fraction2[0] / fraction2[1];

  // Compare decimal numbers
  if (decimal1 > decimal2) {
    return "Fraction 1 is greater than Fraction 2";
  } else if (decimal1 < decimal2) {
    return "Fraction 2 is greater than Fraction 1";
  } else {
    return "Fraction 1 is equal to Fraction 2";
  }
}

// Example usage
const fraction1 = [2, 3]; // represents 2/3
const fraction2 = [3, 4]; // represents 3/4
const result = compareFractions(fraction1, fraction2);
console.log(result); // Output: "Fraction 2 is greater than Fraction 1"
