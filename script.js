function playSound() {
    var audio = document.getElementById("audio");
    audio.play().catch(error => console.error('Error reproduciendo el audio:', error));
}
