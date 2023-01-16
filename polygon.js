/* Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2. */

//   the sum of internal angles is equal to 2N - 4 * 90 degrees so:

function angle(n) {
 return ((2*n) - 4) * 90
}

