let arr = [1, 2, 3, 4]
// Long version
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
//Shorthand Version -> using for of instead of for loop

for (const val of arr) {
  console.log(val)
}

//Shorthand Version -> using for in instead of for loop
for (const index in arr) {
  console.log(arr[index])
}
