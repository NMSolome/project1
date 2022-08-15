function validationForm() {
    let username1 = document.forms["SampleForm"]["fname"];
    let username2 = document.forms["SampleForm"]["lname"];
    let email = document.forms["SampleForm"]["Email"];
    let pass = document.forms["SampleForm"]["Password"];

    // var strUser1 = e.options[e.selectedIndex].text;
    // let nameerr = document.forms["RegForm"] ["nameerr"];
    nameRegex = /^[A-Za-z]+$/
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@#$!%*?&^()]{10,}$/

    if (username1.value == "" || !nameRegex.test(username1.value)) {
        alert("Please enter your first name. Use alphabet only");
        username1.style.border = "2px solid red";
        username1.innerHTML = "Please enter your first name. Use alphabet only "
        // username1.focus();
        return false;
    }
    else {
        username1.style.border = "2px solid green";
    }
    if (username2.value == ""  || !nameRegex.test(username2.value)) {
        alert("Please enter your last name. Use alphabet only");
        username2.style.border = "2px solid red";
        username2.innerHTML = "Please enter your last name"
        // username2.focus();
        return false;
    }
    else {
        username2.style.border = "2px solid green";
    }
    if (email.value == "" || !emailRegex.test(email.value)) {
        alert("Please enter your email");
        email.style.border = "2px solid red";
        email.innerHTML = "Please enter your email"
        // email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0) {
        // alert("Please enter a valid email address");
        email.style.border = "2px solid red";
        email.innerHTML = "Please enter a valid email address ........@.... . ...."
        // email.focus();
        return false;
    }
    else {
        email.style.border = "2px solid green";
    }
    if (pass.value == "" || !passRegex.test(pass.value)) {
        alert("Please enter a valid password. A valid password must contain an uppercase and lower case letters, a number and a special character");
        pass.style.border = "2px solid red";
        // phone.focus();
        return false;
    }
    else {
        pass.style.border = "2px solid green";
    }

    var cb = document.getElementById("terms");
    if (!cb.checked) {
        alert("Please accept our terms and conditions");
        cb.focus();
        return false;
    }
    // Select validation
    var e = document.getElementById("select");
    var optionsSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;

    if (optionsSelIndex == 0) {
        alert("Please select your age bracket");
        return false;
    } else {
        alert("Success !! You have selected an age group : " + optionSelectedText);
    }

    // checkbox validation
var check = document.getElementById("flexRadioDefault1");
if (
    document.getElementById("flexRadioDefault1").checked == true || 
    document.getElementById("flexRadioDefault2").checked == true
) {
    alert("Welldone")
}else {
    alert("Relationship status??");
    check.focus()
    return false;
}

function validation(formid){
    //perform your validations
    if (valid)
        $("#formid").submit();
    else
       alert("Validation error");
    }

}











    // let relate = document.forms["SampleForm"]["form-check2"];
    // if (relate == "") {
    //     alert("Please select marital status")
    //     relate.style.border = "2px solid red";
    //     relate.focus();
    //     return false;
    // } else {
    //     relate.style.border = "2px solid green";
    // }
    // Check box validation (! negates)




    // const relate = document.getElementsByName("form-check2");
    
    // if (cb != true) {
    //     alert("Please accept our terms and conditions");
    //     return false;
    // } else {
    //     (cb == true);
    //     return true
    //     cb.style.border = "2px solid green";


    // if (strUser == 0) {
    //     alert("Please select a user");
    // }

    // var e = document.getElementById("maritalStatus");
    // var strUser = e.options[e.selectedIndex].value;
    // var strUser1 = e.options[e.selectedIndex].text;
    // 


