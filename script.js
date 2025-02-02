document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("clickButton");
    const intro = document.getElementById("intro");
    const message = document.getElementById("message");

    if (!button) {
        console.error("Buton bulunamadı! HTML'de id 'clickButton' olarak tanımlandığından emin ol.");
        return;
    }

    button.addEventListener("click", function() {
        console.log("Butona tıklandı!");

        intro.style.display = "block";

        setTimeout(function() {
            intro.style.display = "none";
            message.style.display = "block";
        }, 1500);

        // 3 saniye sonra havai fişekleri başlat
        setTimeout(function() {
            startFireworks();
        }, 3000);

        // 6 saniye sonra sayfayı kapat
        setTimeout(function() {
            window.close();
        }, 6000);
    });

    // Havai fişekleri başlatan fonksiyon
    function startFireworks() {
        for (let i = 0; i < 25; i++) { // Daha fazla havai fişek
            setTimeout(createFirework, i * 80);
        }
    }

    // Havai fişekleri oluşturan fonksiyon
    function createFirework() {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        document.body.appendChild(firework);

        const colors = ["red", "yellow", "blue", "green", "purple", "orange", "pink", "cyan"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 2);

        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.background = randomColor;

        setTimeout(() => {
            firework.remove();
        }, 1200);
    }
});
