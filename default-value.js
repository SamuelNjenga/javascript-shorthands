let finalName

const getName = () => {
    return null
}

// const getName = () => {}

// const getName = () => {
//   return 'Samuel Njenga'
// }

let name = getName()

//Longer Version
if (name !== null && name !== undefined && name !== '') {
  finalName = name
} else {
  finalName = 'Rahul'
}

//console.log('Final Name is ', finalName)

// Shorthand Version -> Set default values with the OR operator and if the value on the left side is falsy it will use the one on the right
let finalName = getName() || 'Rahul'

console.log('Final Name is ', finalName)
