const magik = magikcraft.io;

function write(char) {
    const font = {
        a:[0,24,36,102,126,126,102,102],
        b:[192,192,192,192,252,194,194,252],
        c:[255,192,192,192,192,192,192,255],
        d:[254,195,195,195,195,195,195,254],
        e:[252,128,128,252,128,128,128,252],
        f:[0,62,32,62,32,32,32,32],
        g:[255,255,192,192,199,195,255,255],
        h:[102,102,102,126,102,102,102,102],
        i:[255,126,24,24,24,24,126,255]
    }

    const bina = letter => letter.map(line => 
            line.toString(2).padStart(8,"0"))
    const a = bina(font[char]);
    
    a.forEach(line=>
        magik.dixit(line)
    );
}
