const { maxVal1, maxVal2} = require('./algoritimos')



const fs = require('fs');

function lerMatrizDeArquivo(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
        return
      }

      // Processa os dados para criar um vetor (array)
      const linhas = data.trim().split('\n')
      const matriz = linhas.map(line => line.split(','))

      resolve(matriz)
    });
  });
}

  const filePath = 'matrizes\\nao-ordenadas\\100000000.txt'
  lerMatrizDeArquivo(filePath)
  .then(matriz => {
    console.time('tempo-de-execucao')
    const init = 0
    const fim = matriz.length - 1
    const memoriaAntes = process.memoryUsage()
    const resultado1 = maxVal2(matriz,init,fim)
    const memoriaDepois = process.memoryUsage()
    console.timeEnd('tempo-de-execucao')

    // Calcule a diferença de memória
    const diferencaDeMemoria = {
      rss: memoriaDepois.rss - memoriaAntes.rss
    }

    console.log('Diferença de Memória:', diferencaDeMemoria)
  })
  .catch(err => {
    console.error('Erro ao ler o arquivo:', err)
  })
  /*
const filePath = 'matrizes\\nao-ordenadas\\100.txt'
lerMatrizDeArquivo(filePath)
  .then(matriz => {
    console.time('tempo-de-execucao')
    const memoriaAntes = process.memoryUsage()
    const resultado1 = maxVal1(matriz)
    const memoriaDepois = process.memoryUsage();
    console.timeEnd('tempo-de-execucao')

    // Calcule a diferença de memória
    const diferencaDeMemoria = {
      rss: memoriaDepois.rss - memoriaAntes.rss
    }

    console.log('Diferença de Memória:', diferencaDeMemoria)
  })
  .catch(err => {
    console.error('Erro ao ler o arquivo:', err)
  })*/