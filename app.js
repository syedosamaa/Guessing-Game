var input = document.getElementById("input");

var guessBtn = document.getElementById("guessBtn");

var randomNumber = Math.floor(Math.random() * 10) + 1;

guessBtn.addEventListener('click', function () {
    var userGuess = Number(input.value);

    if (userGuess === randomNumber) {

        Swal.fire({
            title: "Congratulations",
            text: "You Guess Correct number",
            icon: "success",
            confirmButtonColor:"#347aeb"
        });
    }

    else {
        Swal.fire({
            title: "Incorrect!",
            text: "You Guess incorrect number",
            icon: "error",
            confirmButtonColor:"#347aeb"
        });
    }
});