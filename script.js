// Play music when page loads
window.onload = function() {
    document.getElementById("bg-music").play();
};

// Function to cut the cake
function cutCake() {
    document.querySelector(".cake-img").src = "cake-cut.png"; // Change to cut cake image
    document.getElementById("message").classList.remove("hidden"); // Show love message
    startConfetti(); // Start confetti animation
}

// Function to show gift
function showGift() {
    document.getElementById("gift").classList.remove("hidden"); // Reveal gift box
}

// Function to open gift
function openGift() {
    document.querySelector(".gift-img").src = "opened-gift.png"; // Change to opened gift
    document.querySelector(".gift-text").classList.remove("hidden"); // Show gift message
}

// Confetti Effect
function startConfetti() {
    let confettiContainer = document.getElementById("confetti");
    confettiContainer.innerHTML = ""; 

    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
    }
}
