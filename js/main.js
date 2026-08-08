document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById("menuBtn");
    const navList = document.getElementById("navList");

    if (menuBtn && navList) {
        menuBtn.addEventListener("click", () => {
            navList.classList.toggle("show");
        });

        // Close navbar when clicking any link
        document.querySelectorAll("#navList a").forEach(link => {
            link.addEventListener("click", () => {
                navList.classList.remove("show");
            });
        });
    }

    // 2. Landing Page Dynamic Background Change
    const landingPage = document.getElementById("home");
    const bgImages = [
        'image/sp.jpg',
        'image/sp9.jpg',
        'image/sp4.jpg',
        'image/sp2.jpg',
        'image/sp6.jpg'
    ];

    let currentBgIndex = 0;
    if (landingPage) {
        setInterval(() => {
            currentBgIndex = (currentBgIndex + 1) % bgImages.length;
            landingPage.style.backgroundImage = `url('${bgImages[currentBgIndex]}')`;
        }, 4000);
    }

    // 3. Modal IPTV Pop-up Manager
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModal");
    const videoModal = document.getElementById("videoModal");

    if (openModalBtn && videoModal) {
        openModalBtn.addEventListener("click", () => {
            videoModal.classList.add("block");
            
            // Create backdrop overlay if it doesn't exist
            if (!document.querySelector(".lay-out")) {
                const overlay = document.createElement("div");
                overlay.className = "lay-out";
                document.body.appendChild(overlay);

                // Close when clicking overlay
                overlay.addEventListener("click", closeModal);
            }
        });
    }

    function closeModal() {
        if (videoModal) videoModal.classList.remove("block");
        const overlay = document.querySelector(".lay-out");
        if (overlay) overlay.remove();
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }

    // 4. Redirect Movie Action Buttons to WhatsApp
    const actionButtons = document.querySelectorAll(".photo-box .btn, .photo-box .box img");
    actionButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.open("https://wa.me/966576263187", "_blank");
        });
    });

});