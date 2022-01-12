const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );
        console.log("testing1");
    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Sorry... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
}
console.log("testing2");
function signIn() {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    // let formData = JSON.parse(localStorage.getItem('formData')) || [];
    // let exist = formData.length && 
    // JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    
    console.log("testing3");
   
    if (email === "user@gmail.com" && pwd === "user") {
        window.location.href = "../checkout.html";
 
  
} else {
    alert("Invalid information");
    console.error();
    return;
    }
}
