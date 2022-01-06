'use strict';
// DOM botões
let btnCadastroCurso = document.querySelector('#cadastro_curso');
let btnSalvarCurso = document.querySelector('#salvar');
let btnSalvarEdicaoCurso = document.querySelector('#salvar-edicao');
let btnCancelarCadastroCurso = document.querySelector('#cancelar');




// modal

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
        if(e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
            
        }              
            
    })
    }
    
}


const btnmodal = document.querySelector('.btn.btn-primary');
btnmodal.addEventListener('click', () => iniciaModal('modal'));

// cadastro

function iniciarCadastro() {
    btnSalvarCurso.style.display = 'initial';
    btnSalvarEdicaoCurso.style.display = 'none';
    document.querySelector('.modal').classList.add('mostrar');





}

var cursosInformacoes =[   
        {'curso': 'novoCurso',
        'descricao': 'novoDescricao',
        'imagem': 'novoCursoImagem',}
]

// cadastrar
const criarCurso = () => {
    let novoCurso = document.getElementById('curso').value;
    let novoDescricao = document.getElementById('descricao').value;
    let novoCursoImagem = document.getElementById('img').value;
    let btnSalvarCurso = document.getElementById('salvar')
    let professor = document.getElementById('prof')

    for (let i = 0; i < cursosInformacoes.length; i++) {
        const element = cursosInformacoes[i];
        
    }


    cursosInformacoes.push({
        'curso': novoCurso,
        'descricao': novoDescricao,
        'imagem': novoCursoImagem,
        
    })

    const cursoCriado = document.createElement('div')
    cursoCriado.innerHTML = `
    <img src="${novoCursoImagemgem = '../imagens/teste.png'}" class="curso_imagem" alt="imagem curso">                
        <h2 class="curso_titulo">${novoCurso}</h2>
        
        <span class="curso_professor">Professor: ${professor}</span>
        <p class="curso_descricao">${novoDescricao}</p>
        <p class="curso_descricao">${novoDescricaoo}</p>
        <div class="curso_botoes_editar_deletar">
            <button class="curso_botao_editar" onclick="abrirEdicaoCurso(${cursoCriado})">Editar</button>
            <button class="curso_botao_deletar" onclick="deletarCurso(${cursoCriado})">Deletar</button>
        </div>`;

    cursoCriado.classList.add(`container_curso`);
    cursoCriado.setAttribute('Professor', `${professor}`);
    document.querySelector('#container').appendChild(cursoCriado);
    document.querySelector('#form').reset();  
    
    btnSalvarCurso.addEventListener('click', criarCurso);


} 
const cancelarCriacaoCurso = () => {
    limparInputsCriacao()
    document.querySelector('.modal').classList.remove('active');

    btnCancelarCadastroCurso.addEventListener('click', () => cancelarCriacaoCurso());

}

const limparInputsCriacao = () => {
    document.querySelector('#form').reset();
}

const abrirEdicaoCurso = (id) => {
    document.querySelector('.modal').classList.add('active');

    btnSalvarCurso.style.display = 'none';
    btnSalvarEdicaoCurso.style.display ='initial';

    for(let i = 0; i < cursosInformacoes.length; i++) {        
        if (dadosCursos[i]['id'] == id){
            document.getElementById('img').value = dadosCursos[i]['img'];                   
            document.getElementById('descricao').value = dadosCursos[i]['descricao'];
            document.getElementById('curso').value = dadosCursos[i]['curso'];
        }        
    }   
}


btnCadastroCurso.addEventListener('click', iniciarCadastro);
btnSalvarCurso.addEventListener('click', criarCurso);
btnCancelarCadastroCurso.addEventListener('click', cancelarCriacaoCurso);
btnSalvarEdicaoCurso.addEventListener('click', atualizarCurso);