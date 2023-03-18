console.log("loading_animation.js ;)")

function loadingAnimation() {
    var s = window.screen;
    var c = document.getElementById("c"); /* div id="c" */
    var ctx = c.getContext("2d");

    var width = c.width = s.width;
    var height = c.height = s.height;

    var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$%^&*()*&^%";
    matrix = matrix.split("");

    var font_size = 10;
    var columns = c.width / font_size;
    var drops = [];
    for(var x = 0; x < columns; x++)
        drops[x] = 0;

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "#5AFF19";
        ctx.font = font_size + "px arial";

        for( var i = 0; i < drops.length; i++ ) {
            if (Math.random() > 0.1) { // display text in 10%
                var text = matrix[ Math.floor( Math.random() * matrix.length ) ];
                ctx.fillText(text, i * font_size, drops[i] * font_size);
            }
            if( drops[i] * font_size > c.height && Math.random() > 0.975 )
                drops[i] = 0;
            drops[i] += Math.random(); // add random val
        }

    }

    // invisible in 0.7s
    setTimeout(function() {
        var fadeOutInterval = setInterval(function() {
            if (!document.getElementById("loading_animation").style.opacity) {
                document.getElementById("loading_animation").style.opacity = 1;
            }
            if (document.getElementById("loading_animation").style.opacity > 0) {
                document.getElementById("loading_animation").style.opacity -= 0.01;
            } else {
                clearInterval(fadeOutInterval);
                document.getElementById("loading_animation").style.display = "none";
                document.body.classList.remove("loading");
            }
        }, 15); // every 15ms, changes opacity
    }, 700); // 0.7s

    // Start loading animation
    setInterval(draw, 10); // speed (larger value => slower)
}

// when page is fully loaded, start loading animation
window.addEventListener("load", function() {
    loadingAnimation();
});

