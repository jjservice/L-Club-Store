
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

  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var phone = getElementVal("phone");

  
    saveMessages(name, emailid, msgContent, phone);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
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


