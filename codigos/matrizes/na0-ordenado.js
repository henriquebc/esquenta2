function gerarAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let cont = 0;

for (let i = 0; i < 5000000; i++) {
  if (cont < 9) {
    process.stdout.write(gerarAleatorio(0, 999) + ",")
    cont++
  } else {
    console.log(gerarAleatorio(0, 999) + " ")
    cont = 0
  }
}