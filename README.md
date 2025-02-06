## rock-paper-scissors

#Here is the logic for Rock Paper Scissors

BEGIN RockPaperScissorsGame

    DEFINE choices AS LIST ["rock", "paper", "scissors"]

    FUNCTION getComputerChoice
        RETURN RANDOM_ELEMENT_FROM(choices)

    FUNCTION getUserChoice
        DECLARE userChoice
        PRINT "Enter your choice (rock, paper, scissors):"
        INPUT userChoice
        WHILE userChoice NOT IN choices DO
            PRINT "Invalid choice. Please enter 'rock', 'paper', or 'scissors'."
            INPUT userChoice
        END WHILE
        RETURN userChoice

    FUNCTION determineWinner(userChoice, computerChoice)
        IF userChoice == computerChoice THEN
            RETURN "It's a tie!"
        ELSE IF userChoice == "rock" AND computerChoice == "scissors" THEN
            RETURN "You win!"
        ELSE IF userChoice == "paper" AND computerChoice == "rock" THEN
            RETURN "You win!"
        ELSE IF userChoice == "scissors" AND computerChoice == "paper" THEN
            RETURN "You win!"
        ELSE
            RETURN "Computer wins!"
        END IF

    DECLARE playAgain AS "yes"

    WHILE playAgain == "yes" DO
        DECLARE computerChoice AS getComputerChoice()
        DECLARE userChoice AS getUserChoice()

        DECLARE result AS determineWinner(userChoice, computerChoice)

        PRINT "You chose: " + userChoice
        PRINT "Computer chose: " + computerChoice
        PRINT result

        PRINT "Do you want to play again? (yes/no):"
        INPUT playAgain

    END WHILE

    PRINT "Thank you for playing Rock, Paper, Scissors!"

END RockPaperScissorsGame
