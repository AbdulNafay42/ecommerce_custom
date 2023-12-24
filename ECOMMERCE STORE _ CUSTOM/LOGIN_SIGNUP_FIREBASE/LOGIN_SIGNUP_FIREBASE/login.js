import {auth, signInWithEmailAndPassword} from "./firebase.js ";

const login = () => {
  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        Swal.fire({
          icon: "success",
          title: `${user.email}`,
          text: "Welcome! You have successfully logged in.",
        });
        setTimeout(() => {
          window.location.href = "../../index.html";
        }, 1000);
      }
      console.log("Registered successfully", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorMessage) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
      console.error("Registration error", errorMessage);
    });
};
const loginBtn = document.getElementById("login-btn");

if (loginBtn) {
  loginBtn.addEventListener("click", login);
}
