window.addEventListener("DOMContentLoaded", () => {

    // Button
    document.getElementById("loveBtn").addEventListener("click", () => {
  document.querySelector(".card").classList.add("expanded");
  document.getElementById("message").classList.add("show");
  document.getElementById("loveBtn").style.display = "none";
});


    // Photos
    const photos = [
        "photos/pic1.jpg",
        "photos/pic2.jpg",
        "photos/pic3.jpg"
    ];

    const photoLayer = document.getElementById("photo-layer");

    function spawnPhoto() {
        const img = document.createElement("img");
        img.src = photos[Math.floor(Math.random() * photos.length)];
        img.classList.add("photo");

        const card = document.querySelector(".card");
        const rect = card.getBoundingClientRect();

        let x, y;
        const padding = 40;

        do {
            const edgeBias = Math.random();

            if (edgeBias < 0.5) {
                // left side
                x = Math.random() * (window.innerWidth * 0.25);
            } else {
                // right side
                x = window.innerWidth * 0.75 +
                    Math.random() * (window.innerWidth * 0.25);
            }

            y = Math.random() * (window.innerHeight - 180);

        } while (
            x > rect.left - padding &&
            x < rect.right + padding &&
            y > rect.top - padding &&
            y < rect.bottom + padding
        );

        img.style.left = x + "px";
        img.style.top = y + "px";

        photoLayer.appendChild(img);

        setTimeout(() => img.remove(), 9000);
    }


    setInterval(spawnPhoto, 2500);

    // Hearts
    const heartLayer = document.getElementById("heart-layer");

    function spawnHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = 10 + Math.random() * 8 + "s";

        heartLayer.appendChild(heart);

        setTimeout(() => heart.remove(), 15000);
    }

    setInterval(spawnHeart, 1200);

});
