const redirectToHomepage = () => {
  console.log('In HomePage')
}
const isLoggedin = true

//Long version
if (isLoggedin) {
  redirectToHomepage()
}

//Shorthand Version -> use the && operator if you want to execute a function if a variable is true
isLoggedin && redirectToHomepage()
