//Constant Declarations

const TL_button = document.getElementById('TL_button');
const MM_button = document.getElementById('MM_button');
const BR_button = document.getElementById('BR_button');

// Add event listeners to the buttons
TL_button.addEventListener('click', function (event) {
    handleButtonClick('TL_button');
});

MM_button.addEventListener('click', function (event) {
    handleButtonClick('MM_button');
});

BR_button.addEventListener('click', function (event) {
    handleButtonClick('BR_button');
});


//Functions

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



function releasePhish() {
    document.getElementById("myPhish").style.display = "block";
}


function cancelPhish() {
    document.getElementById("myPhish").style.display = "none";
}

function byePhish() {
    alert("Your Phish is now in UQ Pond! Good luck!");
    document.getElementById("myPhish").style.display = "none";
}
function back() {

    location.href = "phish.html";
}

function openWin() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function activatePhish() {
    document.getElementById("button").style.backgroundColor = "lightblue";
}