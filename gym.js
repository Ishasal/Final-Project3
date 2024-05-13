
"use strict";
/*
     Final project
      Author: Isha
      Date:   05.09.24
      Filename: gym.js
 */
    
    // submit//
    
    function submit() {
      let name = document.getElementById("name");
      let number = document.getElementById("number");
      let email = document.getElementById("email");

      if (name.value === "") {
          alert("Please enter your name");
      } else if (number.value === "") {
          alert("Please enter your phone number");
      } else if (number.value.length !== 10) {
          alert("Please enter a 10-digit phone number");
      } else if (email.value === "") {
          alert("Please enter your email");
      } else if (!isValidEmail(email.value)) {
          alert("Please enter a valid email address");
      } else {
          alert("Thanks for reaching us, an email will be sent to you shortly: " + name.value);
      }
  }
  
  function isValidEmail(email) {
      // Basic email validation
      return email.includes('@') && email.includes('.');
  }
  
  document.getElementById("submitButton").addEventListener("click", submit);
  
 // Sample timetable data (replace with your own data)
const timetableData = [
  { day: 'Monday', time: '08:00 AM - 09:00 AM', class: 'Yoga' },
  { day: 'Monday', time: '05:00 PM - 06:00 PM', class: 'Pilates' },
  { day: 'Tuesday', time: '07:00 AM - 08:00 AM', class: 'Zumba' },
  { day: 'Wednesday', time: '06:00 PM - 07:00 PM', class: 'Spin' },
  { day: 'Thursday', time: '09:00 AM - 10:00 AM', class: 'CrossFit' },
  { day: 'Friday', time: '05:30 PM - 06:30 PM', class: 'HIIT' },
];


