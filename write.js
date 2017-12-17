const magik = magikcraft.io;

function write() {
    const font = {
        a:[0,24,36,138,198,198,138,138],
        b:[192,192,192,192,252,194,194,252],
        c:[255,192,192,192,192,192,192,255],
        d:[254,195,195,195,195,195,195,254],
        e:[252,128,128,252,128,128,128,252],
        f:[0,62,32,62,32,32,32,32],
        g:[255,255,192,192,199,195,255,255],
        h:[102,102,102,126,102,102,102,102],
        i:[255,126,24,24,24,24,126,255]
    }

    function binary(letter) {
        return letter.map(line => line.toString(2));
    }

    const a = binary(font.a);
    
    a.forEach(line=>magik.dixit(line.padstart(8,"0")));
}
