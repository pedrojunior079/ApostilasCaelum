var $tdTotalCursos = document.querySelector('.js-total-de-cursos')
var $tdTotalDeHoras = document.querySelector('.js-total-de-horas')
var $buttonConfirmar = document.querySelector(',js-botao-matricula')
var $totalHoras = 0
var $totalCursos = 0

function adicionarCurso(checkbox){
    if(checkbox.checked){
        $totalCursos ++
        $totalHoras += parseInt(checkbox.value)
    }
    else{
        $totalCursos --
        $totalHoras -= parseInt(checkbox.value)
    }

    $tdTotalDeHoras.textContent = $totalHoras + 'h'
    $tdTotalCursos.textContent = $totalCursos + ' curso(s)'
}

$buttonConfirmar.onClick = confirmarMatriculas

function confirmarMatriculas(){
    if($totalCursos == 0){
        alert('Nenhum curso selecionado')
    }else{
        alert('Matricula confirmada com sucesso')
        window.location.href = 'index.html'
    }
}

