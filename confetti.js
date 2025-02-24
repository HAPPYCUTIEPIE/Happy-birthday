const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];

for (let i = 0; i < 100; i++) {
    confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 2,
        speed: Math.random() * 3 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach((piece) => {
        ctx.fillStyle = piece.color;
        ctx.fillRect(piece.x, piece.y, piece.size, piece.size);
        piece.y += piece.speed;
        if (piece.y > canvas.height) piece.y = 0;
    });
    requestAnimationFrame(drawConfetti);
}

drawConfetti();
