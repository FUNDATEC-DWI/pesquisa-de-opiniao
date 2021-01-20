let votos = [0, 0];

function votarNaOpcao(indice) {
  let quantidadeDeVotos = votos[indice];
  quantidadeDeVotos++;
  votos[indice] = quantidadeDeVotos;
}

document.getElementById("opcao-lpi").addEventListener("click", function () {
  votarNaOpcao(0);
});

document.getElementById("opcao-dwi").addEventListener("click", function () {
  votarNaOpcao(1);
});

document
  .getElementById("btnVerResultados")
  .addEventListener("click", function () {
    //   document.getElementById("viewResultados").hidden = false;
    //   document.getElementById("viewVotacao").hidden = true;

    document.getElementById("viewVotacao").className = "escondido";
    document.getElementById("viewResultados").className = "";

    let chartElement = document.getElementById("graficoResultado");

    let configuracoesDoGrafico = {
      type: "bar",
      data: {
        labels: ["LPI", "DWI"],
        datasets: [
          {
            label: "Quantidade de votos",
            data: votos,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 10,
                max: 100,
                min: 0,
              },
            },
          ],
        },
      },
    };

    let chart = new Chart(chartElement, configuracoesDoGrafico);
  });

//   document.getElementById("viewResultados").hidden = true;

document.getElementById("viewResultados").className = "escondido";
