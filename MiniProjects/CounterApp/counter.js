//document.getElementById("count_el").innerText = 5;
let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

let counterHome = 0;
let counterAway = 0;

function HomeScorePlusOne()
{
    counterHome++;
    homeScore.textContent = counterHome;
    CheckScore();
}
function HomeScorePlusTwo()
{
    counterHome += 2;
    homeScore.textContent = counterHome;
    CheckScore();
}
function HomeScorePlusThree()
{
    counterHome += 3;
    homeScore.textContent = counterHome;
    CheckScore();
}
function AwayScorePlusOne()
{
    counterAway++;
    awayScore.textContent = counterAway;
    CheckScore();
}
function AwayScorePlusTwo()
{
    counterAway += 2;
    awayScore.textContent = counterAway;
    CheckScore();
}
function AwayScorePlusThree()
{
    counterAway += 3;
    awayScore.textContent = counterAway;
    CheckScore();
}
function Reset()
{
    counterHome = 0;
    counterAway = 0;
    homeScore.textContent = counterHome;
    awayScore.textContent = counterAway;
}
function CheckScore()
{
    if(counterHome > 9 || counterAway > 9)
    {
        Reset();
    }
}