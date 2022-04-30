let object = {
  model: '',
  neck: '',
  material: '',
  image: '',
  owner: '',
  author: ''
};
let ultimosPedidos = {
  model: '',
  neck: '',
  material: '',
  image: '',
  owner: '',
  author: ''
};
let user;
let array = [];

receberNome()

function receberNome(){
  let nome = prompt("Insira o seu nome:")
  user = nome
  object.author = nome
  object.owner = nome
  pegarObiApi()
}

function escolherModelo(modelo){
    const modeloSelecionado = document.querySelector(".modelos .selecionado")
    if (modeloSelecionado != null){
        modeloSelecionado.classList.remove("selecionado")
    }
    const modeloSelecionar = document.querySelector(`.${modelo}`)
    modeloSelecionar.classList.add("selecionado")
    object.model = modelo
    console.log(modelo)

    validarPedido()
}

function escolherGola(gola){
    const golaSelecionado = document.querySelector(".gola .selecionado")
    if (golaSelecionado != null){
        golaSelecionado.classList.remove("selecionado")
    }

    const golaSelecionar = document.querySelector(`.${gola}`)
    golaSelecionar.classList.add("selecionado")

    object.neck = gola
    console.log(gola)

    validarPedido()
}

function escolherTecido(tecido){
    const tecidoSelecionado = document.querySelector(".tecido .selecionado")
    if (tecidoSelecionado != null){
        tecidoSelecionado.classList.remove("selecionado")
    }

    const tecidoSelecionar = document.querySelector(`.${tecido}`)
    tecidoSelecionar.classList.add("selecionado")

    object.material = tecido
    console.log(tecido)

    validarPedido()
}

function validarPedido(){
  const validar = document.getElementById("botao");
  if (object.model != null && object.neck != null && object.material != null && validarURL(document.getElementById("imgLink").value)) {
      validar.classList.add("finalizar");
  } else {
      validar.classList.remove("finalizar");
  }
}

function checkURL (){
  if (validarURL(document.getElementById("imgLink").value)){
      object.image = document.querySelector("input").value;
  }
  validarPedido();
}

function validarURL(url) {
  return (url.match(/\.(ipeg|ipg|png)$/) != null);
}

function enviarPedido(){
  const promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", object);
  promise.then(sucesso)
  promise.catch(falha)
}

function sucesso(){
  alert("Encomenda realizada com sucesso!")
  produtosCriados()
  pegarObiApi()
}

function falha(){
  alert("Ops, não conseguimos processar sua encomenda.")
}

function produtosCriados(){
  const pedidos = document.querySelector(".produtos")
  pedidos.innerHTML = ""
  pedidos.innerHTML += `
    <div class="caixa">
      <img src="${object.image}">
      <h3><strong>Criador:</strong>&nbsp;${object.author}</h3>
    </div>
  `
}

function pegarObiApi() {
  const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
  promise.then(camisasDaApi);
  promise.catch();
}

function camisasDaApi(resposta) {   
  let lista = resposta.data

  console.log(lista.reverse())
  lista.reverse();

  const pedidos = document.querySelector(".produtos")
  pedidos.innerHTML = ""
  for (i = 0; i < lista.length; i++){
    pedidos.innerHTML += `
    <div class="caixa" onclick="encomendar(${[i]})">
      <img src="${lista[i].image}">
      <h3><strong>Criador:</strong>&nbsp;${lista[i].owner}</h3>
    </div>
    `
  }
  array = [...lista];
}

function encomendar(i){
  ultimosPedidos.model = array[i].model;
  ultimosPedidos.neck = array[i].neck;
  ultimosPedidos.material = array[i].material;
  ultimosPedidos.image = array[i].image;
  ultimosPedidos.author = array[i].owner;
  ultimosPedidos.owner = user;
  let confirmar = confirm("Deseia pedir esse produto?");
  if (confirmar){
      ultimoPedido();
  }
}

function ultimoPedido() {
  const promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", ultimosPedidos);
  promise.then(sucesso);
  promise.catch(falha);
}