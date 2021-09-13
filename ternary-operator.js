//Long version
let points = 89
let result
if (points >= 50) {
  result = 'Pass'
} else {
  result = 'Fail'
}
console.log(result)

//Shorthand Version -> Write if else statement in one line using ternary operator(?)
let result = points >= 50 ? 'Pass' : 'Fail'
console.log(result)
