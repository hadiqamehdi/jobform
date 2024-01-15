// script.js
function submitForm() {
    // Get form elements
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const jobRole = document.getElementById('job_role').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const pincode = document.getElementById('pincode').value;
    const date = document.getElementById('date').value;
    const upload = document.getElementById('upload').value;
  
    // Check if any of the required fields are empty
    if (!firstName || !lastName || !email || !jobRole || !address || !city || !pincode || !date || !upload) {
      alert('Please fill in all the required fields.');
    } else {
      // You can add additional validation or form submission logic here
      alert('Application submitted successfully!');
      // Reset the form after submission if needed
      document.getElementById('jobApplicationForm').reset();
    }
  }
  
