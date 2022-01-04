//////////////////////
/// Acessando DOM ///
////////////////////
let btnCadastroCurso = document.querySelector('#btn-criar');
let btnSalvarCurso = document.querySelector('#salvar');
let btnSalvarEdicaoCurso = document.querySelector('#salvar-edicao');
let btnCancelarCadastroCurso = document.querySelector('#cancelar');

////////////////////////
/// Lista de cursos ///
//////////////////////
var dadosCursos =[
    {'imagem': 'novoCursoImagem',
    'titulo': 'novoCursoTitulo',
    'id': 'novoCursoId',
    'descricao' : 'novoCursoDescricao',}
];

////////////////
/// FUNÇÕES ///
//////////////
// Funções: Criar, editar, Deletar
const cadastrarCurso = () => {
    btnSalvarCurso.style.display = 'initial';
    btnSalvarEdicaoCurso.style.display ='none';
    document.querySelector('.modal').classList.add('active');
}

const criarCurso = () => {  
    /////////////////////////
    /// Acessando inputs ///
    ///////////////////////
    let novoCursoImagem = document.getElementById('novo_img').value;
    let novoCursoTitulo = document.getElementById('novo_titulo').value;
    let novoCursoId = document.getElementById('novo_id').value;
    let novoCursoDescricao = document.getElementById('novo_descricao').value;
    
    if(novoCursoId == ""){
        window.alert('Digite um ID válido!')
        return false;
    }    

    for(let i = 0; i < dadosCursos.length; i++) {        
        if (dadosCursos[i]['id'] == novoCursoId){                       
            return window.alert('Esse ID de curso já existe!');
        }        
    }

    dadosCursos.push({
        'imagem': novoCursoImagem,
        'titulo': novoCursoTitulo,
        'id': novoCursoId,
        'descricao' : novoCursoDescricao
    });

    const novoCurso = document.createElement('tr')
    novoCurso.innerHTML = `
        <td>${novoCursoTitulo}</td>
        <td><img src="${novoCursoImagem = './imagens/teste.png'}" class="curso_imagem" alt="imagem curso"/></td>
        <td>${novoCursoDescricao}</td>                
        <td>
            <button class="btn btn-secondary m-1" onclick="abrirEdicaoCurso(${novoCursoId})">editar</button>
            <button class="btn btn-danger m-1" onclick="deletarCurso(${novoCursoId})">excluir</button>
        </td>`;

    novoCurso.classList.add(`container_curso`);
    novoCurso.setAttribute('id', `${novoCursoId}`);
    document.querySelector('#tb-cursos').appendChild(novoCurso);    
    document.querySelector('#form').reset();
    document.querySelector('.modal').classList.remove('active');
}

const cancelarCriacaoCurso = () => {
    limparInputsCriacao()
    document.querySelector('.modal').classList.remove('active');
}

const limparInputsCriacao = () => {
    document.querySelector('#form').reset();
}

const abrirEdicaoCurso = (id) => {
    document.querySelector('.modal').classList.add('active');

    btnSalvarCurso.style.display = 'none';
    btnSalvarEdicaoCurso.style.display ='initial';

    for(let i = 0; i < dadosCursos.length; i++) {        
        if (dadosCursos[i]['id'] == id){
            document.getElementById('novo_img').value = dadosCursos[i]['image'];
            document.getElementById('novo_titulo').value = dadosCursos[i]['titulo'];
            document.getElementById('novo_id').value = dadosCursos[i]['id'];
            document.getElementById('novo_descricao').value = dadosCursos[i]['descricao'];
        }        
    }
}

const atualizarCurso = () => {  
    let atualizaCurso = document.getElementById('novo_id').value

    abrirEdicaoCurso();    
    deletarCurso(atualizaCurso);
    criarCurso();
    document.querySelector('.modal').classList.remove('active');
}

const deletarCurso = (id) => {    
    document.getElementById(id).remove();
    for(let i = 0; i < dadosCursos.length; i++) {        
        if (dadosCursos[i]['id'] == id){
            dadosCursos.splice(i, 1);
        }        
    }
}


////////////////
/// EVENTOS ///
//////////////
btnCadastroCurso.addEventListener('click', cadastrarCurso);
btnSalvarCurso.addEventListener('click', criarCurso);
btnCancelarCadastroCurso.addEventListener('click', cancelarCriacaoCurso);
btnSalvarEdicaoCurso.addEventListener('click', atualizarCurso);