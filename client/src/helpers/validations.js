'use strict'

module.exports.validateEmail = ( mail ) => {

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    return (true)
  }
    return (false)
}

module.exports.validatePassword = ( pw ) => {
  return /[A-Z]/       .test(pw) &&
         /[a-z]/       .test(pw) &&
         /[0-9]/       .test(pw) &&
         /[^A-Za-z0-9]/.test(pw) &&
         pw.length > 4;
}