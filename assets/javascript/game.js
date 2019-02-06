
$( document ).ready(function() {
    
    var randomNumber;
    var playerTotal;
    var crystalOneValue;
    var crystalTwoValue;
    var crystalThreeValue;
    var crystalFourValue;
    //select crystal text <p>
    var crystalOneTextValue = $('#crystal-1-value');
    var crystalTwoTextValue = $('#crystal-2-value');
    var crystalThreeTextValue = $('#crystal-3-value');
    var crystalFourTextValue = $('#crystal-4-value');

    var gameStart = function(){
        // chose random value for goal
        randomNumber = Math.floor(Math.random() * (120 - 19) + 19 );
        //reset player totals to start game
        playerTotal = 0;
        playerNumber.text(playerTotal);
        //Reset Crystal Values on DOM
        crystalOneTextValue.text("");
        crystalTwoTextValue.text("");
        crystalThreeTextValue.text("");
        crystalFourTextValue.text("");
        //generate random numbers for crystals
        crystalOneValue = Math.floor(Math.random() * 12 ) +1;
        crystalSelectOne.attr('value',crystalOneValue);
        //check to make sure all values are unique
        do{
            crystalTwoValue = Math.floor(Math.random() * 12 ) +1;   
            crystalSelectTwo.attr('value',crystalTwoValue);   
            }
        while(crystalTwoValue === crystalOneValue)
        do{
            crystalThreeValue = Math.floor(Math.random() * 12 ) +1;    
            crystalSelectThree.attr('value',crystalThreeValue);
            }
        while(crystalThreeValue === crystalOneValue || crystalThreeValue === crystalTwoValue)
        do{
            crystalFourValue = Math.floor(Math.random() * 12 ) +1;
            crystalSelectFour.attr('value',crystalFourValue);
            }
        while(crystalFourValue === crystalOneValue || crystalFourValue === crystalTwoValue ||crystalFourValue === crystalThreeValue)
        
        // Inset Random Math into DOM
        computerNumber.text(randomNumber);
    }

    var wins = 0;
    var losses = 0;
    var computerNumber = $('#computer-number');
    var playerNumber = $('#player-number');
    var playerWins = $('#wins');
    var playerLosses = $('#loses');
    var crystalSelect = $('.crystals');
    var crystalSelectOne = $('.crystal-1');
    var crystalSelectTwo = $('.crystal-2');
    var crystalSelectThree = $('.crystal-3');
    var crystalSelectFour = $('.crystal-4');
    function checkScore(){
        
        if(playerTotal === randomNumber){
            wins += 1;
            playerWins.text("Wins: " + wins);
            gameStart();

        }
        else if(playerTotal > randomNumber){
            losses += 1;
            playerLosses.text("Losses: " + losses);
            gameStart();
        }
    }

    crystalSelect.on('click', function(){
        var crystalValue = $(this).attr('value');
        crystalValue = parseInt(crystalValue);
        $(this).hasClass('crystal-1') && crystalOneTextValue.text(crystalValue);
        $(this).hasClass('crystal-2') && crystalTwoTextValue.text(crystalValue); 
        $(this).hasClass('crystal-3') && crystalThreeTextValue.text(crystalValue); 
        $(this).hasClass('crystal-4') && crystalFourTextValue.text(crystalValue);  

        playerTotal = playerTotal + crystalValue;
        playerNumber.text(playerTotal);

        checkScore();
        
    });
    
    gameStart();
});