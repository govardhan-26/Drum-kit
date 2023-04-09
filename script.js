function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // if (!audio) return; // stop the function from running all together

    audio.currentTime = 0; // rewinding to the start if not there takes time to play it again(like 2 to 3 sec)
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
    console.log(this);
}

const keys = document.querySelectorAll('.key');

// event listeners
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));