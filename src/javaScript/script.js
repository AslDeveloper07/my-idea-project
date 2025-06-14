const menuBtn = document.getElementById('menuBtn');
        const closeBtn = document.getElementById('closeBtn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        // Burger bosilganda sidebar ochilish
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        });

        // Close sidebar when close button is clicked
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });

        // Overlay bosilganda sidebar yopilishi
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && e.target !== menuBtn) {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            }
        });

        // =============================== ***** Video play & pouse function ***** ================================

        const playButton = document.getElementById('playButton');
        const videoContainer = document.getElementById('videoContainer');
        const videoIframe = document.getElementById('videoIframe');

        // You tube vidooni ID si bilan topish
        const youtubeVideoId = 'dQw4w9WgXcQ'; // Example video ID

        playButton.addEventListener('click', () => {
            // You tube iframe kodi
            videoIframe.innerHTML = `
                <iframe src="https://youtu.be/pvqD46WiBqE?si=wunkifnU7KbHmXFR ${youtubeVideoId}?autoplay=1"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
            `;

            // Videoni kurish uchun
            videoContainer.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            // Video kontinerni yashirish
            videoContainer.style.display = 'none';
            document.body.style.overflow = 'auto';

            // Iffameni remove qilib yuborish
            videoIframe.innerHTML = '';
        });

        // Video iframeni yopish uchun
        videoContainer.addEventListener('click', (e) => {
            if (e.target === videoContainer) {
                videoContainer.style.display = 'none';
                document.body.style.overflow = 'auto';
                videoIframe.innerHTML = '';
            }
        });