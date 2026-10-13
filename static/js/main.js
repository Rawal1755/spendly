// main.js — students will add JavaScript here as features are built

// Landing page: "See how it works" video modal
(function () {
    var modal = document.getElementById('video-modal');
    if (!modal) return;

    var openBtn = document.getElementById('video-modal-open');
    var closeBtn = document.getElementById('video-modal-close');
    var frame = document.getElementById('video-modal-frame');

    function openModal() {
        // Set src on open so the video loads (and autoplays) only when needed
        frame.src = frame.dataset.src;
        modal.hidden = false;
        document.body.classList.add('modal-open');
        closeBtn.focus();
    }

    function closeModal() {
        modal.hidden = true;
        document.body.classList.remove('modal-open');
        // Clearing src unloads the iframe, which stops the video
        frame.src = '';
        openBtn.focus();
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Click on the dark overlay (outside the content box) closes
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
})();
