document.querySelector('.first-button').addEventListener('click', function () {
    document.querySelector('.animated-icon1').classList.toggle('open');

    const navPopup = document.querySelector('.nav-popup');
    navPopup.classList.toggle('show');

    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
    }

    overlay.classList.toggle('show');

    if (navPopup.classList.contains('show')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    overlay.addEventListener('click', function () {
        navPopup.classList.remove('show');
        overlay.classList.remove('show');
        document.body.classList.remove('no-scroll');
        document.querySelector('.animated-icon1').classList.remove('open'); // Reset animated icon
    });
});

document.querySelector('.card').addEventListener('click', function() {
  this.classList.toggle('flipped');
});
