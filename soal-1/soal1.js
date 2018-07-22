//Soal 1
 
function drawThreeColsBox(height) {
  var angka = 1;
  for (var i = 0; i < height; i++) {
    var hasil = ''
    for (var j = 0; j < 3; j++) {
      hasil = hasil + angka + ' '
      angka++
    }
    console.log(hasil)
  }
  
}
console.log('drawThreeColsBox(3)')
drawThreeColsBox(3)
console.log('drawThreeColsBox(5)')
drawThreeColsBox(5)
console.log('drawThreeColsBox(1)')
drawThreeColsBox(1)
