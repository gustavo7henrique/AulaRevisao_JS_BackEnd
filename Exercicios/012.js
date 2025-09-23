function pi(){
    let Pi = 3.14;
    console.log(`Valor de PI é aproximadamente: ${Pi}`);
    return Pi
}

function areaCircunferencia(raio){
    let PI = pi;
    let area = PI * (2 * raio);
    console.log(`A área da circunferencia de raio ${raio} é: ${area}`);
    
}
areaCircunferencia(10)