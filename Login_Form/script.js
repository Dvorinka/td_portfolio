function myFunction(passwordId) {
  var passwordField = document.getElementById(passwordId);
  var imgContainer = passwordField.parentElement.querySelector("div[style*='position: absolute']");
  var img1 = imgContainer.children[0];
  var img2 = imgContainer.children[1];

  if (passwordField.type === "password") {
    passwordField.type = "text";
    img1.style.display = "none";
    img2.style.display = "block";
  } else {
    passwordField.type = "password";
    img1.style.display = "block";
    img2.style.display = "none";
  }
}

function validatePasswords() {
  var pass1 = document.getElementById('pass1').value;
  var pass2 = document.getElementById('pass2').value;
  var errorMessage = document.getElementById('error-message');

  if (pass1 !== pass2) {
    errorMessage.style.display = "block";
    return false;
  }

  errorMessage.style.display = "none";
  return true;
}

function changeImage() {
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");

  img1.style.display = "none";
  img2.style.display = "block";

  setTimeout(function() {
    setTimeout(function() {
      img1.style.display = "block";
      img2.style.display = "none";
    }, 1500);
  }, 1500);
}

function changeImage2() {
  var img3 = document.getElementById("img3");
  var img4 = document.getElementById("img4");

  img3.style.display = "none";
  img4.style.display = "block";

  setTimeout(function() {
    setTimeout(function() {
      img3.style.display = "block";
      img4.style.display = "none";
    }, 1500);
  }, 1500);
}

function changeImage3() {
  var img5 = document.getElementById("img5");
  var img6 = document.getElementById("img6");

  img5.style.display = "none";
  img6.style.display = "block";

  setTimeout(function() {
    setTimeout(function() {
      img5.style.display = "block";
      img6.style.display = "none";
    }, 1500);
  }, 1500);
}