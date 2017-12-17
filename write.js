const magik = magikcraft.io;

function write(char = 'a') {
    const STONE = magik.type('Material').STONE

    const number2binary = num => num.toString(2)
    const addLeadingZeros = line => line.padStart(8, "0")
    const lineBlockArray = line => Array.from(addLeadingZeros(number2binary(line)))
    const binaryMap = letterData => letterData.map(line => lineBlockArray(line))
    const getBlock = (x,y,z) => magik.getSender().getWorld().getBlockAt(x, y, z)

    const here = magik.hic()
    let x = here.getX() + 1
    let y = here.getY() + 1
    let z = here.getZ()

    const letterMap = binaryMap(font[char]);

    letterMap.forEach((line, linenum) => 
        line.forEach((char, charnum) => (char == "1" &&
            getBlock(x + charnum, y - linenum, z).setType(STONE))));
}
