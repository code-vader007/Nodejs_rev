const os = require('os')

//info about user
const user = os.userInfo()
console.log(user)

//returns the system uptime in seconds
console.log("The System uptime is " + os.uptime())