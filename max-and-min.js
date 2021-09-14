const array = [2, 8, 15, 4]

// Long version
let max = -99999
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i]
  }
}

console.log(max)

// Shorthand Version -> use spread operator instead of for loop
Math.max(...array)
Math.min(...array)
