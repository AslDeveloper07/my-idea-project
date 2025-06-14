const menuBtn = document.getElementById('menuBtn');
        const closeBtn = document.getElementById('closeBtn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        // Toggle sidebar when burger icon is clicked
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

        // Close sidebar when overlay is clicked
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







        const playButton = document.getElementById('playButton');
        const videoContainer = document.getElementById('videoContainer');
        // const closeBtn = document.getElementById('closeBtn');
        const videoIframe = document.getElementById('videoIframe');

        // Replace this with your YouTube video ID
        const youtubeVideoId = 'dQw4w9WgXcQ'; // Example video ID

        playButton.addEventListener('click', () => {
            // Create YouTube iframe
            videoIframe.innerHTML = `
                <iframe src="https://youtu.be/pvqD46WiBqE?si=wunkifnU7KbHmXFR ${youtubeVideoId}?autoplay=1"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
            `;

            // Show video container
            videoContainer.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            // Hide video container
            videoContainer.style.display = 'none';
            document.body.style.overflow = 'auto';

            // Remove iframe to stop video playback
            videoIframe.innerHTML = '';
        });

        // Close video when clicking outside
        videoContainer.addEventListener('click', (e) => {
            if (e.target === videoContainer) {
                videoContainer.style.display = 'none';
                document.body.style.overflow = 'auto';
                videoIframe.innerHTML = '';
            }
        });