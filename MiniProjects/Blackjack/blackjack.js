//document.querySelector(".selector");
const messageEl = document.querySelector("#message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.querySelector("#card-el");

let cardArray = []

let sum = 0;

let hasBlackjack = false;
let isAlive = false;
let isReset = false;

let message = "";

let playerEl = document.querySelector("#player-el");

function getRandomCard()
{
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber;
    if(randomNumber >  10)
    {
        return 10;
    }
    else if(randomNumber === 1)
    {
        return 11;
    }
}

function startGame()
{
    if ( isAlive === false && hasBlackjack === false && isReset === false)
    {
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cardArray.push(firstCard);
        cardArray.push(secondCard);
        sum = cardArray[0] + cardArray[1];
        renderGame();
    }
}

async function renderGame()
{
    cardsEl.textContent = "Cards: ";

    for(let i = 0; i < cardArray.length; i++)
    {
        cardsEl.textContent += cardArray[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20)
    {
        message = "Do you wanna draw a new card?";
    }
    else if(sum === 21)
    {
        message = "You've got Blackjack.";
        hasBlackjack = true;
        reset();
    }
    else
    {
        message = "You're out of the game.";
        isAlive = false;
        reset();
    }
    await setTimeout(() => {
        messageEl.textContent = message;
    },2000);
}

function newCard()
{
    if(isAlive === true && hasBlackjack === false && isReset === false)
    {
        let newCard = getRandomCard();
        sum += newCard;
        cardArray.push(newCard);
        renderGame();
    }
}

function reset()
{
    isReset = true;

    setTimeout(() => {
        messageEl.textContent = ".";
    }, 1000);
    setTimeout(() => {
        messageEl.textContent += ".";
    }, 1000);
    setTimeout(() => {
        messageEl.textContent += ".";
    }, 1000);
    
    setTimeout(() => {
        sumEl.textContent = "Sum: ";
        cardsEl.textContent = "Cards: ";
        cardArray = [];
        sum = 0;

        messageEl.textContent = "Wanna play again ?";

        isAlive = false;
        hasBlackjack = false;
        isReset = false;
    }, 5000);
}