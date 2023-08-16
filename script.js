// For Navbar
let navbar = document.querySelector('.navbar');

document.querySelector('#Menu').onclick = () => {
    navbar.classList.toggle('active');
}

// For Country Code
function country_code () {
    var val = document.getElementById("country").value;

    if (val === "select country") {
      document.getElementById("output").value = "";
    }

    else if (val === "tz"){
      document.getElementById("output").value = "+255";
    }
      
    else if (val === "za"){
      document.getElementById("output").value = "+27";
    }
  
    else if (val === "zm"){
        document.getElementById("output").value = "+260";
    }

    else if (val === "gh"){
        document.getElementById("output").value = "+233";
    }

    else if (val === "ng"){
      document.getElementById("output").value = "+234";
    }
   }

 