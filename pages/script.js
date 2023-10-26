//Constant Declarations for learn.html
const TL_button = document.getElementById('TL_button');
const MM_button = document.getElementById('MM_button');
const BR_button = document.getElementById('BR_button');

// Add event listeners to the buttons for learn.html
TL_button.addEventListener('click', function (event) {
    handleButtonClick('TL_button');
});

MM_button.addEventListener('click', function (event) {
    handleButtonClick('MM_button');
});

BR_button.addEventListener('click', function (event) {
    handleButtonClick('BR_button');
});


//Handle buttons being clicked and doing appropriate response
function handleButtonClick(buttonId) {
    switch (buttonId) {
        case 'TL_button':
            console.log('Top Left button was pressed.');
            // Add your code for TL_button here
            alert('This level has already been complete')
            break;
        case 'MM_button':
            console.log('Middle button was pressed.');
            // Add your code for MM_button here
            break;
        case 'BR_button':
            console.log('Bottom Right button was pressed.');
            // Add your code for BR_button here
            alert('Complete previous levels to access this one')
            break;
        default:
            console.log('Unknown button was pressed.');
            break;
    }
}

// displays a popup when phish is released at pond
function releasePhish() {
    document.getElementById("myPhish").style.display = "block";
}

//cancels releasing phish
function cancelPhish() {
    document.getElementById("myPhish").style.display = "none";
}

//changes button color when a phish is selected to be released
function activatePhish(id) {
    document.getElementById("myPhish").style.display = "block";
    if (document.getElementById(id).style.backgroundColor == "rgb(162, 196, 223)") {
        document.getElementById(id).style.backgroundColor = "#e2f2ff";
    }
    else {
        document.getElementById(id).style.backgroundColor = "#A2C4DF";
    }
} 

//closes popup and alerts phish has been released 
function byePhish() {
    alert("Your Phish is now in UQ Pond! Good luck!");
    document.getElementById("myPhish").style.display = "none";
}

//handles loading screen and popup when user wants to phish
function catchPhish() {
    document.getElementById("goPhish").style.display = "block";
        setTimeout(function() {
            document.getElementById("goPhish").style.display = "none";
        }, 3000);
        setTimeout(function() {
            document.getElementById("caught-phish").style.display = "block";
        }, 3000);
}

//shows popup if user answered correctly
function right() {
    document.getElementById("caught-phish").style.display = "none";
    document.getElementById("congrats").style.display = "block";
}

//shows popup if user answers incorrect
function wrong() {
    document.getElementById("caught-phish").style.display = "none";
    document.getElementById("incorrect").style.display = "block";
}

//closes popup
function closePopup() {
    document.getElementById("congrats").style.display = "none";
    document.getElementById("incorrect").style.display = "none";
}