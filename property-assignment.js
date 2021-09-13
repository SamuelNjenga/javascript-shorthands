let firstName = 'Node.js'
let lastName = 'Express.js'

//Long Version

// let obj = { firstname: firstName, lastname: lastName }
// console.log(obj.firstname, obj.lastname)

// Shorthand Version -> if variable name and object key name is the same, just mention the variable name
let obj = { firstName, lastName }
console.log(obj.firstName, obj.lastName)
