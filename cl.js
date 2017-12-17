var magik = magikcraft.io;

// explode  
function cl(repeats, delay) {
    var sender2 = sender;
    repeats = parseInt(repeats) || 1;
    delay = parseInt(delay) || 200;
    magik.fulmen();        
    repeats--;
    if (sender.isSneaking()) {
        magik.dixit("l done via sneak");
        return;
    }
    if (repeats > 0) {
        var task = magik.setTimeout(
            function() {
                sender = sender2;
                cl(repeats, delay);
            },
            delay
        );
    } else {
        magik.dixit("e done");
    }
}