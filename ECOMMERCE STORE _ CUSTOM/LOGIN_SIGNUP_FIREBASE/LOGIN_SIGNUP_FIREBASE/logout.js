
import {auth, signOut} from "./firebase.js ";

let logoutUser = document.getElementById("logoutUser")
logoutUser && logoutUser.addEventListener("click", ()=> {
    signOut(auth).then(() => {
        if(logoutUser){

        Swal.fire({
            icon: "success",
            text: "You have successfully logged Out.",
          });
            window.location.href = "LOGIN_SIGNUP_FIREBASE/LOGIN_SIGNUP_FIREBASE/index.html";
    
    
        
                  
        }
    })    


    .catch((  ) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      
      console.log(`Error signing out`);
  });
  

}

)