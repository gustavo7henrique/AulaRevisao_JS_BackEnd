let diaSemana = 'sexta';

switch (diaSemana) {
    case 'segunda' :           //If (diaSemana == 'segunda)
        console.log('Hoje tem SENAI !!!');
        break;
    case 'terça' :           //else if (diaSemana == 'terça')
        console.log('Hoje tem SENAI !!!');
        break;
    case 'quarta' :           //else if (diaSemana == 'quarta' || diaSemana == 'quinta' || diaSemana == 'sexta')
    case 'quinta' :           
    case 'sexta' :           
        console.log('Hoje tem SESI !!!');
        break;
    default :  //else
        console.log('Hoje não tem aula !!!');
        break;     
}

