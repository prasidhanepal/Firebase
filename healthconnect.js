// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe44p-GHUWgb5BLndsjMlpxlhj14Zr73A",
  authDomain: "health-connect-2d235.firebaseapp.com",
  databaseURL: "https://health-connect-2d235-default-rtdb.firebaseio.com",
  projectId: "health-connect-2d235",
  storageBucket: "health-connect-2d235.appspot.com",
  messagingSenderId: "466769571310",
  appId: "1:466769571310:web:d332ea19b8a85c528332ff",
  measurementId: "G-14SRZ07W2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Handle Sign Up Form Submit
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Simple validation
  if (!fullName || !phone || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Generate unique user ID (timestamp-based)
  const userId = `user_${Date.now()}`;

  // Save to Firebase Realtime Database
  set(ref(db, 'users/' + userId), {
    fullName: fullName,
    phone: phone,
    email: email,
    password: password // ⚠️ NOTE: Don't store plain text passwords in real production apps.
  })
    .then(() => {
      alert("Sign up successful!");
      signupForm.reset();
    })
    .catch((error) => {
      console.error("Error saving to database:", error);
      alert("Failed to sign up. Please try again.");
    });
});


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// import { getDatabase, set, get, ref, update, remove } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAe44p-GHUWgb5BLndsjMlpxlhj14Zr73A",
//   authDomain: "health-connect-2d235.firebaseapp.com",
//   databaseURL: "https://health-connect-2d235-default-rtdb.firebaseio.com",
//   projectId: "health-connect-2d235",
//   storageBucket: "health-connect-2d235.firebasestorage.app",
//   messagingSenderId: "466769571310",
//   appId: "1:466769571310:web:d332ea19b8a85c528332ff",
//   measurementId: "G-14SRZ07W2N"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// // Handle Sign Up Form Submit
// const signupform = document.getElementById("signupForm");
// const message = document.getElementById("message");

// signup-Form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const fullname = document.getElementById("fullname").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value;
//   const confirmPassword = document.getElementById("confirmPassword").value;

//   if (password !== confirmPassword) {
//     message.textContent = "Passwords do not match.";
//     message.style.color = "red";
//     return;
//   }

//   // Generate unique user ID (e.g., timestamp-based)
//   const userId = Date.now();

//   // Save to Firebase Realtime Database
//   set(ref(db, 'users/' + userId), {
//     fullname: fullname,
//     email: email,
//     password: password // Note: Never store plain passwords in real apps
//   })
//     .then(() => {
//       message.textContent = "Sign up successful!";
//       message.style.color = "blue";
//       signupForm.reset();
//     })
//     .catch((error) => {
//       console.error("Error writing to database:", error);
//       message.textContent = "Failed to sign up.";
//       message.style.color = "red";
//     });
// });