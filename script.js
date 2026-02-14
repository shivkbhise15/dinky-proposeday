window.addEventListener("load", () => {

  /* ================= VIDEO AUTOPLAY FIX ================= */

  const video = document.getElementById("bgVideo");

  if (video) {
    video.muted = true;
    video.play().catch(() => {
      console.log("Autoplay prevented by browser");
    });
  }

  /* ================= CARD INTERACTION ================= */

  const card = document.querySelector(".card");
  const button = document.getElementById("loveBtn");
  const message = document.getElementById("message");

  button.addEventListener("click", () => {
    card.classList.add("expanded");
    message.classList.add("show");
  });

  /* ================= FLOATING PHOTOS ================= */

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

    const cardRect = card.getBoundingClientRect();
    const padding = 40;

    let x, y;

    do {
      const edgeBias = Math.random();

      if (edgeBias < 0.5) {
        x = Math.random() * (window.innerWidth * 0.25);
      } else {
        x = window.innerWidth * 0.75 +
            Math.random() * (window.innerWidth * 0.25);
      }

      y = Math.random() * (window.innerHeight - 180);

    } while (
      x > cardRect.left - padding &&
      x < cardRect.right + padding &&
      y > cardRect.top - padding &&
      y < cardRect.bottom + padding
    );

    img.style.left = x + "px";
    img.style.top = y + "px";

    photoLayer.appendChild(img);

    setTimeout(() => img.remove(), 10000);
  }

  setInterval(spawnPhoto, 2500);

  /* ================= FLOATING HEARTS ================= */

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
