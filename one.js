function validateIndianMobileNumber(number){
    var regex=/^[6-9]\d{9}$/;
    return regex.test(number);

}
var phoneNumber="9876543210";
if(validateIndianMobileNumber(phoneNumber)){
    console.log("valid indian mobile number")

}
else{
    comsole.log("Invalid indian mobile number")
}