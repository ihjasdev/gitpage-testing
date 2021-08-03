//ICT-18-812
$(document).ready(function () {
  $("#RegisterForm").on("submit", function (e) {
    e.preventDefault();
    validateForm();
  });
});

function validateForm() {
  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var dob = $("#dob").val();
  var nic = $("#nic").val();
  var email = $("#email").val();
  var conf_email = $("#conf_email").val();
  var contact = $("#contact").val();

  var notempty =
    fname != "" &&
    lname != "" &&
    dob != "" &&
    nic != "" &&
    dob != "" &&
    nic != "" &&
    email != "" &&
    conf_email != "" &&
    contact != "";
  if (notempty) {
    var RegName = new RegExp("^[a-zA-Z0-9_]*$");
    var RegNIC = /^([\d]{9}(\V|\X))|([\d]{12})$/;
    var RegEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var RegContact = /^[\d]{10}$/;

    //first name check
    if (!RegName.test(fname)) {
      document.getElementById("fnamealert").innerHTML = "Invalid first name.";
    }
     //last name check
    if (!RegName.test(lname)) {
      document.getElementById("lnamealert").innerHTML = "Invalid last name.";
    }
    //NIC check
    if (!RegNIC.test(nic)) {
      document.getElementById("nicalert").innerHTML = "Invalid NIC.";
    }
    //Contact number check
    if (!RegContact.test(contact)) {
      document.getElementById("contactalert").innerHTML =
        "Invalid Contact Number.";
    }
    // email check
    if (email == conf_email) {
      if (!RegEmail.test(email)) {
        document.getElementById("emailalert").innerHTML =
          "Invalid email. Check your email again";
        document.getElementById("conf-emailalert").innerHTML =
          "Invalid email. Check your email again";
      }
    }
    if (email != conf_email) {
      document.getElementById("conf-emailalert").innerHTML =
        "Email missmatch Both emails must be same";
    }
    // DOB check
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    // check if age is greater than or equal 30
    if (age >= 30) {
      window.alert("You are not eligible for the competition!.");
      return;
    }

    const dobalert = document.getElementById("dobalert");

    // check if given dob is a future date
    if (dob > today) {
      dobalert.innerHTML = "Date of birth can't be a future date!.";
      return;
    }

    // check if age is greater than 19 (for univeristy student)
    if (age < 19) {
      dobalert.innerHTML = "Date of birth is invalid!.";
      return;
    } else {
      window.alert("Registration successful!"); //If all of them are correct
    }
  }
}
