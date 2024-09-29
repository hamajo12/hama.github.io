let score = 0;
let currentHole;
let gameInterval;

document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    score = 0;
    document.getElementById('score').textContent = score;
    gameInterval = setInterval(showMole, 1000);
}

function showMole() {
    // 前のモグラを隠す
    if (currentHole) {
        currentHole.classList.remove('active');
    }

    // ランダムな穴を選んでモグラを表示
    const holes = document.querySelectorAll('.hole');
    const randomIndex = Math.floor(Math.random() * holes.length);
    currentHole = holes[randomIndex];
    currentHole.classList.add('active');

    // モグラをクリックしたらスコアを増やす
    currentHole.addEventListener('click', hitMole);
}

function hitMole() {
    if (this.classList.contains('active')) {
        score++;
        document.getElementById('score').textContent = score;
        this.classList.remove('active');
    }
}

// ゲームを止める関数（オプション）
function stopGame() {
    clearInterval(gameInterval);
}
