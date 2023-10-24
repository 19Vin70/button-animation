const button = document.getElementById('movableButton');

button.addEventListener('mouseover', () => {
    moveButtonRandomly();
});

function moveButtonRandomly() {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
