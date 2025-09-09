function goHome() { window.location.href = 'index.html'; }
function shareSite() { alert('Share this site with your friends!'); }
function goToNetflix() { window.open('https://www.netflix.com', '_blank'); }
let players = [
    { img: 'player 456.jpg', text: 'Gi-hun (Player 456)' },
    { img: 'player 001.jpg', text: 'Oh Il-nam (Player 001)' },
    { img: 'player 067.jpg', text: 'Kang Sae (Player 067)' }
];
let currentPlayer = 0;
function nextPlayer() {
    currentPlayer = (currentPlayer + 1) % players.length;
    document.getElementById('player-image').src = players[currentPlayer].img;
    document.getElementById('player-text').innerText = players[currentPlayer].text;
}
function flipCard() { alert('Flipping to show player description!'); }
function registration() {document.getElementById('quiz-section').style.display = 'block' ;}
function startQuiz() { window.location.href = 'quiz.html'; }
function revealFact() { document.getElementById('fact-text').style.display = 'block'; }