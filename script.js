document.getElementById("messageButton").addEventListener("click", function() {
    let message = document.getElementById("secretMessage");
    message.classList.remove("hidden");
});

document.getElementById("musicButton").addEventListener("click", function() {
    let music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
        this.textContent = "⏸️ Pause Lagu";
    } else {
        music.pause();
        this.textContent = "🎵 Putar Lagu";
    }
});

// Fungsi untuk membuat animasi love berjatuhan
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Jalankan animasi setiap 300ms
setInterval(createHeart, 300);
