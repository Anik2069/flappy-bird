var block = document.getElementById('block');
var hole = document.getElementById('hole');
var character = document.getElementById('character');
var jumping = 0;
var count = 0;
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";

    count++;
    //console.log(random)
});

setInterval(function() {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (jumping == 0) {
            character.style.top = (characterTop + 3) + "px";
        }

        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        var cTop = -(500 - characterTop);

        if ((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
            alert("Game Over. Score " + count);
            character.style.top = 100 + "px";
            count = 0;
        }
        // console.log(chacharacterTop);
    },
    10);

function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function() {
        var chacharacterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        if (chacharacterTop > 6 && jumpCount < 15) {
            character.style.top = (chacharacterTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10)
}