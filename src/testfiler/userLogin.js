import React from 'react';
import { ReactComponent as Logo } from "../img/logo2.svg";

const ReactLogo = () => {
  return( 
    <svg className="ReactLogo">
        <Logo />
    </svg>
 );
}


export default userLogin;

var authorizedUser = User()
var loginName = 'mortenso.kodehode@gmail.com'
var passWord = 'holyShit3'
authorizedUser.login(loginName, passWord)
document.getElementById("myLogin").textContent = `authorizedUser.login(${loginName}, ${passWord}):  ${authorizedUser.login(loginName, passWord)}`


function User() {
    var userName, passWord
    var bLogin 
  
      function doLogin(user, pw) {
        userName = user
        passWord = pw
  
        // and whatever one wants to do during the login follow between these lines
        sLogin = ((new Date().getTime() % 2) === 0) ? `${userName} has been logged on` : `${userName} has NOT been logged on`
        
        return sLogin
        // ...and then the login part is over
      }
  
      var publicAPI = {
        login: doLogin
      }
  
      return publicAPI
  }