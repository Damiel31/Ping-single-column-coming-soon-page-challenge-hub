function notifyEmailAddress() {
    
    const emailAddress = document.getElementById('emailAddress').value
    let mailFormat = /\S+@\S+\.\S+/

    if (mailFormat.test(emailAddress) == false) {
        document.getElementById('invalidEmailMessage').style.display = 'block'
        document.getElementById('emailAddress').classList.add('emailAddressInvalid')
    } else {
        document.getElementById('invalidEmailMessage').style.display = 'none'
        document.getElementById('emailAddress').classList.remove('emailAddressInvalid')
    }

}