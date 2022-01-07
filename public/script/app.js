//////////////////////
/// Acessando DOM ///
////////////////////
let btnCadastroCurso = document.querySelector('#btn-criar');
let btnSalvarCurso = document.querySelector('#salvar');
let btnSalvarEdicaoCurso = document.querySelector('#salvar-edicao');
let btnCancelarCadastroCurso = document.querySelector('#cancelar');


////////////////////////
/// Lista de cursos ///
///////////////////////
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
    /*document.querySelector('#novo_img').addEventListener("change", function (){

        console.log(document.getElementById('#novo_img'));

        //const reader = new FileReader();

        //reader.readAsDataURL();
    })*/

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
        <td>${novoCursoId}</td>
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


////////////////
/// PRE-LOAD ///
////////////////
// Função para pre-carregar os arquivos que já vieram na pagina
function preLoad() {

    dadosCursos.push({
        'imagem': 'imagens/ilustra-web.png',
        'titulo': 'Desenvolvimento Web',
        'id': 1,
        'descricao' : 'Consequatur debitis ipsa numquam illum placeat quod deleniti.'
    });

    dadosCursos.push({
        'imagem': 'imagens/ilustra-marketing.png',
        'titulo': 'Marketing Digital',
        'id': 2,
        'descricao' : 'Consequatur debitis ipsa numquam illum placeat quod deleniti.'
    });

    dadosCursos.push({
        'imagem': 'imagens/ilustra-ux.png',
        'titulo': 'Consultoria UX',
        'id': 3,
        'descricao' : 'Consequatur debitis ipsa numquam illum placeat quod deleniti.'
    });

    const novoCurso1 = document.createElement('tr')
    novoCurso1.innerHTML = `
        <td>Desenvolvimento Web</td>
        <td>ID</td>
        <td><img src="imagens/ilustra-web.png" class="curso_imagem" alt="imagem curso"/></td>
        <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>                
        <td>
            <button class="btn btn-secondary m-1" onclick="abrirEdicaoCurso(1)">editar</button>
            <button class="btn btn-danger m-1" onclick="deletarCurso(1)">excluir</button>
        </td>`;
    
    const novoCurso2 = document.createElement('tr')
    novoCurso2.innerHTML = `
    <td>Marketing Digital</td>
    <td>ID</td>
    <td><img src="imagens/ilustra-marketing.png" class="curso_imagem" alt="imagem curso"/></td>
    <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>                
    <td>
        <button class="btn btn-secondary m-1" onclick="abrirEdicaoCurso(2)">editar</button>
        <button class="btn btn-danger m-1" onclick="deletarCurso(2)">excluir</button>
    </td>`;

    const novoCurso3 = document.createElement('tr')
    novoCurso3.innerHTML = `
    <td>Consultoria UX</td>
    <td>ID</td>
    <td><img src="imagens/ilustra-ux.png" class="curso_imagem" alt="imagem curso"/></td>
    <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>                
    <td>
        <button class="btn btn-secondary m-1" onclick="abrirEdicaoCurso(3)">editar</button>
        <button class="btn btn-danger m-1" onclick="deletarCurso(3)">excluir</button>
    </td>`;

    novoCurso1.classList.add(`container_curso`);
    novoCurso1.setAttribute('id', 1);
    document.querySelector('#tb-cursos').appendChild(novoCurso1);

    novoCurso2.classList.add(`container_curso`);
    novoCurso2.setAttribute('id', 2);
    document.querySelector('#tb-cursos').appendChild(novoCurso2);

    novoCurso3.classList.add(`container_curso`);
    novoCurso3.setAttribute('id', 3);
    document.querySelector('#tb-cursos').appendChild(novoCurso3);
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
    document.getElementById(id).remove( window.alert('Excluir?'));
    
    
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
preLoad();
