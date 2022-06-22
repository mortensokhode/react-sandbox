var plusOne = makeAdder(1)
var plusTen = makeAdder(10)

document.getElementById("plusOne").textContent = `plusOne(4):  ${plusOne(4)}`
document.getElementById("plusTen").textContent = `plusTen(4):  ${plusTen(4)}`

var authorizedUser = User()
var loginName = 'Morten'
var passWord = 'holyShit3'
authorizedUser.login(loginName, passWord)
document.getElementById("myLogin").textContent = `authorizedUser.login(${loginName}, ${passWord}):  ${authorizedUser.login(loginName, passWord)}`



function makeAdder(x) {
  function Add(y) {
    return x + y
  }

  return Add
}

function User() {
  var userName, passWord

    function doLogin(user, pw) {
      userName = user
      passWord = pw

      // and whatever one wants to do during the login follow between these lines
        return ((new Date().getTime() % 2) === 0) ? true : false
      // ...and then the login part is over
    }

    var publicAPI = {
      login: doLogin
    }

    return publicAPI
}
