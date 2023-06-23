btn = document.getElementById("btn")


btn.addEventListener("click", function (event) {
    event.preventDefault()
    formula = document.getElementById("formula")
    resultado = document.getElementById("resultado")
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)


    let numporcent = num1
    let numint = num2
    let numporcent2 = numporcent / 100
    let final = numporcent2 * numint
    let resto = numint - final

    let produto = numint * numporcent

    resultado.innerHTML = `Resultado: ${final} `;
    formula.innerHTML = `<h3>Entenda o processo:</h3><br>
    <h4>1º - Divida ${numporcent} por 100:</h4><br>
    ${numporcent}/100 = ${numporcent2}<br>
    <h4> 2º - Agora multiplique ${numporcent2} por ${numint}:</h4><br>
    ${numporcent2} x ${numint}= ${final}<br>
    <h4>Logo, ${numporcent}% de ${numint} é ${final}.</h4><br>
    <h3>Regra de três</h3><br>
    100% - ${numint} <br>
    ${numporcent}% - x<br>
    <h4>Agora multiplique cruzado:</h4><br>
    100 . x = ${numint} . ${numporcent}<br>
    100x = ${produto}<br>
    x = ${produto}/100 <br>
    x = ${final}
    `
        ;

    var ctx = document.getElementById('myChart').getContext('2d')
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Percentual', 'resto'],


            datasets: [{
                label: `percentual e resto de ${numint}`,
                backgroundColor: ['blue', 'rgb(0, 149, 255)'],
                borderColor: 'rgb(0, 22, 189)',
                data: [final, resto]
            }]
        }
    })

});

btn2 = document.getElementById("btn2")

btn2.addEventListener("click", function (event) {
    event.preventDefault()
    formula2 = document.getElementById("formula2")
    resultado2 = document.getElementById("resultado2")
    valor1 = Number(document.getElementById("valor1").value)
    valor2 = Number(document.getElementById("valor2").value)


    let valordiv = valor1 / valor2
    let final2 = 100 * valordiv
    let produto2 = valor1 * 100
    let resto2 = valor2 - valor1

    resultado2.innerHTML = `Resultado: ${final2}% `;
    formula2.innerHTML = `<h3>Entenda o processo:</h3><br>
        <h4>1º - Divida ${valor1} por ${valor2}:</h4><br>
        ${valor1}/${valor2} = ${valordiv}<br>
        <h4>2º - Agora multiplique ${valordiv} por 100:</h4><br>
        ${valordiv} x 100= ${final2}<br>
        <h4>Logo, ${valor1} equivale a ${final2}% de ${valor2}</h4><br>
        <h3>Regra de três</h3><br>
        100% - ${valor2} <br>
        x% - ${valor1}<br>
        <h4>Agora multiplique cruzado:</h4><br>
        100 . ${valor1} = x . ${valor2}<br>
        ${produto2} = ${valor2}x<br>
        x = ${produto2}/${valor2} <br>
        x = ${final2}
        `
        ;

    var ctx2 = document.getElementById('myChart2').getContext('2d')
    var chart = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Percentual', 'resto'],


            datasets: [{
                label: `Percentual e resto de ${valor2}`,
                backgroundColor: ['blue', 'rgb(0, 149, 255)'],
                borderColor: 'rgb(0, 22, 189)',
                data: [valor1, resto2]
            }]
        }
    })

});






