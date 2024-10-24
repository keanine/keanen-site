function initialize_js() {
    // var intervalId = window.setInterval(function(){
    //     update();
    //   }, 1000);
}

var counter = 5;

function collect_key(i) {
    document.getElementById('clefkey' + i).remove();

    var sfx_collect_key = document.getElementById('collect_key_audio');
    sfx_collect_key.currentTime = 0;
    sfx_collect_key.play();

    var padlock_fill = document.getElementById('padlock_fill');

    var percentage = ((counter - 1) * 9) + 35;
    padlock_fill.style.clipPath = "polygon(0% " + percentage + "% , 100% " + percentage + "%, 100% 100%, 0% 100%)";

    counter -= 1;
    if (counter == 0) {
        //alert("Success!");
    }
}

function click_padlock() {
    if (counter == 0) {
        alert("Padlock clicked");
    }
}

function update() {
    bounce_clefkeys();
}

function bounce_clefkeys()
{
    //var clefkey = document.getElementById('clefkey' + 1)
    //clefkey.style.transform = `translate(${0}px, ${0}px)`
    //clefkey.style.transform = 'rotate(45deg)';
}