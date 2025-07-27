'use strict';

$(function () {
  $("input[type='password'][data-eye]").each(function (i) {
    var $this = $(this),
        id = 'eye-password-' + i;

    $this.wrap($("<div/>", {
      style: 'position:relative',
      id: id
    }));

    $this.css({ paddingRight: 60 });

    $this.after($("<div/>", {
      html: 'Show',
      class: 'btn btn-primary btn-sm',
      id: 'passeye-toggle-' + i
    }).css({
      position: 'absolute',
      right: 10,
      top: ($this.outerHeight() / 2) - 12,
      padding: '2px 7px',
      fontSize: 12,
      cursor: 'pointer'
    }));

    $this.after($("<input/>", {
      type: 'hidden',
      id: 'passeye-' + i
    }));

    var invalid_feedback = $this.parent().parent().find('.invalid-feedback');
    if (invalid_feedback.length) {
      $this.after(invalid_feedback.clone());
    }

    $this.on("keyup paste", function () {
      $("#passeye-" + i).val($(this).val());
    });

    $("#passeye-toggle-" + i).on("click", function () {
      if ($this.hasClass("show")) {
        $this.attr('type', 'password').removeClass("show");
        $(this).removeClass("btn-outline-primary");
      } else {
        $this.attr('type', 'text').val($("#passeye-" + i).val()).addClass("show");
        $(this).addClass("btn-outline-primary");
      }
    });
  });

  $(".my-login-validation").submit(function () {
    const form = $(this);
    if (form[0].checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.addClass('was-validated');
  });
});

// ========== Firebase Login/Register ==========
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm"); // Corrected ID reference

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          window.location.href = "index.html";
        })
        .catch(error => {
          console.error("Login failed:", error);
          alert("Login error: " + error.message);
        });
    });
  }

  if (registerForm) { // This block already exists
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value; // Getting email from the form
      const password = document.getElementById("password").value; // Getting password from the form

      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      // === ADDED Firebase user creation logic ===
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert("Signup successful!");
          window.location.href = "login.html"; // Redirect to login page after successful registration
        })
        .catch(error => {
          alert("Signup error: " + error.message);
        });
      // === END ADDED Firebase user creation logic ===
    });
  }
});