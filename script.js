let sm = Number(prompt("Digite o salário mensal"))
let pr = Number(prompt("Digite o valor do percentual de reajuste"))
let ns1 = (sm/100*pr)
let ns2 = ns1+sm
alert("O novo salário é "+ns2)