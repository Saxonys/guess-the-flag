// ===== RANDOM COUNTRY LIST (obtained from https://flagcdn.com/en/codes.json) ======
const flags = [
    { country: "France", code: "fr" },
    { country: "Germany", code: "de" },
    { country: "Italy", code: "it" },
    { country: "Spain", code: "es" },
    { country: "United Kingdom", code: "gb" },
    { country: "Sweden", code: "se" },
    { country: "United States", code: "us" },
    { country: "Canada", code: "ca" },
    { country: "Mexico", code: "mx" },
    { country: "Brazil", code: "br" },
    { country: "Argentina", code: "ar" },
    { country: "Colombia", code: "co" },
    { country: "China", code: "cn" },
    { country: "Japan", code: "jp" },
    { country: "India", code: "in" },
    { country: "South Korea", code: "kr" },
    { country: "Saudi Arabia", code: "sa" },
    { country: "Indonesia", code: "id" },
    { country: "South Africa", code: "za" },
    { country: "Egypt", code: "eg" },
    { country: "Nigeria", code: "ng" },
    { country: "Kenya", code: "ke" },
    { country: "Australia", code: "au" },
    { country: "New Zealand", code: "nz" }
  ];
  
  // Set starting values for the game
  let user = {
    name: "",
    score: 0,
    currentAnswer: null,
    guessesLeft: 10
  };
  
  let gameFlags = [];
  
  // On page load, jQuery will load and run game scripts
  $(document).ready(function () {
    console.log("Scripts loaded");
    
    $('#greetBtn').on('click', greetUser);
    $('#resetBtn').on('click', resetGame);
    $('.answer-options').on('click', '.answerBtn', handleAnswer);
    $('#secretZone').on('click', triggerEasterEgg);
  });
  
  // Set the greeting message to input name and start the game
  function greetUser() {
    const name = $('#usernameInput').val().trim();
    if (name) {
      user.name = name;
      $('#greeting').text(`Hello, ${user.name}! Ready to guess some flags?`);
      $('#startArea').hide(); // hide start area and present game area
      $('#gameArea').show();
      startGame();
    }
  }
  
  // Start default game values and load flags
  function startGame() {
    user.score = 0;
    user.guessesLeft = 10;
    updateScore();
    gameFlags = shuffleArray([...flags]); // create a new random flag set
    loadNextFlag();
  }

  // Restart the game to original values and empty inputs again
  function resetGame() {
    user.name = "";
    $('#usernameInput').val('');
    $('#greeting').text("Welcome to Guess the Flag!"); // original greeting message
    user.score = 0;
    user.guessesLeft = 10;
    updateScore(); // update the score to 0
    $('.answer-options').empty();
    $('#gameArea').hide();
    $('#startArea').show();
  }
  
  // Address assigning the flags and final score
    function loadNextFlag() {
    if (user.guessesLeft <= 0) {
      alert("Final score: " + user.score + " out of 10");
      resetGame();
      return;
    }

    const correctFlag = gameFlags.pop();
    user.currentAnswer = correctFlag.country;

    $('#flagImage').attr('src', `https://flagcdn.com/w320/${correctFlag.code}.png`); // claudeai suggested using flagcdn.com for the flag images

    const otherChoices = shuffleArray(flags.filter(flag => flag.country !== correctFlag.country)).slice(0, 3); // get the first 3 random wrong choices

    const allChoices = shuffleArray([correctFlag, ...otherChoices]); // add the correct choice and shuffle with the 3 wrong choices

    const btns = allChoices.map(choice => `<button class="answerBtn">${choice.country}</button>`); // map the choices to the html
    
    $('.answer-options').html(btns.join('')); // add the choices to the html
  }
  
  // Checks if selected answer is correct and updates score accordingly
  function handleAnswer() {
    const selected = $(this).text();
    if (selected === user.currentAnswer) {
      user.score++; // add 1 to score
    } else {
      // do nothing
    }
    user.guessesLeft--; // subtract 1 from guesses left
    updateScore(); // update the score
    loadNextFlag(); // load the next flag
  }
  
  // Assigns score to score variable
  function updateScore() {
    $('#score').text(user.score);
  }
  
  // Shuffle function so we don't reuse the same logic
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
// function triggerEasterEgg() {