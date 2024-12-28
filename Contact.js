
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN_k4GjMD5p3rXnHBhqgfaV-U7S8D-Ivw",
  authDomain: "contact-form-f2b2a.firebaseapp.com",
  databaseURL: "https://contact-form-f2b2a-default-rtdb.firebaseio.com",
  projectId: "contact-form-f2b2a",
  storageBucket: "contact-form-f2b2a.firebasestorage.app",
  messagingSenderId: "517314640927",
  appId: "1:517314640927:web:be20935bebba9ceed8292a"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var phone = getElementVal("phone");
  
    saveMessages(name, emailid, msgContent, phone);
  
    // Enable alert
    document.querySelector(".alert").style.display = "block";
  
    // Remove the alert after 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Redirect to another page after the form submission
    setTimeout(() => {
      window.location.href = "https://chatgpt.com/";  // Replace with your desired URL
    }, 3000); // Delay to allow alert to disappear before redirecting
  
    // Reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent, phone) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      phone: phone,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  



  ////Light Section/////

  function toggleLight(){
    const body = document.querySelector('body');
    body.classList.toggle('light');
  }