//Capturando o evento submit do formulário

const form = document.querySelector('#formulario')


form.addEventListener('submit', function (evento) {
    evento.preventDefault()
    const inputPeso = evento.target.querySelector('#peso')
    const inputAltura = evento.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado("Peso inválido", false)
        return
    }

    if (!altura) {
        setResultado("Altura inválida", false)
        return
    }

    const imc = getIMC(peso, altura)
    const nivelImc=getNivelImc(imc)

const msg=`Seu IMC é: ${imc} (${nivelImc})`
setResultado(msg,true)
})

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']


    // não preciso de else if encadeado pois o return já paraa execução
    if (imc >= 39.9) {
        return nivel[5]
    } else if (imc >= 34.9) {
        return nivel[4]
    } else if (imc >= 29.9) {
        return nivel[3]
    } else if (imc >= 24.9) {
        return nivel[2]
    } else if (imc >= 18.5) {
        return nivel[1]
    } else if (imc < 18.5) {
        return nivel[0]
    }
}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}


function criarP() {
    const p = document.createElement('p')

    return p
}

function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ""


    const p = criarP()

     if(isValid){
        p.classList.add('paragrafo-resultado')
     }else{
        p.classList.add('bad')
     }


    p.innerHTML = mensagem
    resultado.appendChild(p)
}