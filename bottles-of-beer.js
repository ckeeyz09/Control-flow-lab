
var x = prompt("How many bottles of beer on the wall?");
for (i=x; i>=0; i-=1) {
    if (i > 1) {
        console.log(i + ' ' + "bottles of beer on the wall," + ' ' + i + ' '  + "bottles of beer! Take one down and pass it around," + ' ' + (i - 1) + ' ' + "bottles of beer on the wall!")
    }
    else if (i > 0){
      i + ' ' + "bottles of beer on the wall," + ' ' + i + ' '  + "bottles of beer! Take one down and pass it around," + ' ' + (i - 1) + ' ' + "bottle of beer on the wall!")
    }
    else {
        console.log('No more')
    }
}