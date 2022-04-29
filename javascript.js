let nomeTecido;
let nomeGola;
let nomeModelo;

montarLoja()
function montarLoja(){
    let lojaHTML = document.querySelector("body")
        lojaHTML.innerHTML += `
        <header>
        <img src="./img/Logo.png">
    </header>

    <main>
      <section class="displayMontarProduto">
        <h1>Escolha o modelo</h1>
        <div class="modelos">
          <div>
            <div class="t-shirt" onclick="escolherModelo('t-shirt')">
              <img src="./img/tshirt.png">
            </div>
            <p>T-Shirt</p>
          </div>

          <div>
            <div class="camiseta" onclick="escolherModelo('camiseta')">
              <img src="./img/Camiseta.png">
            </div>
            <p>Camiseta</p>
          </div>

          <div>
            <div class="manga-longa" onclick="escolherModelo('manga-longa')">
              <img src="./img/Mangalonga.png">
            </div>
            <p>Manga Longa</p>
          </div>

        </div>

        <h1>Escolha a gola</h1>
        <div class="gola">
          <div>
            <div class="gola-v" onclick="escolherGola('gola-v')">
              <img src="./img/GolaV.png">
            </div>
            <p>Gola V</p>
          </div>

          <div>
            <div class="gola-redonda" onclick="escolherGola('gola-redonda')">
              <img src="./img/GolaRedonda.png">
            </div>
            <p>Gola Redonda</p>
          </div>

          <div>
            <div class="gola-polo" onclick="escolherGola('gola-polo')">
              <img src="./img/GolaPolo.png">
            </div>
            <p>Gola Polo</p>
          </div>
        </div>

        <h1>Escolha o tecido</h1>
        <div class="tecido">
          <div>
            <div class="seda" onclick="escolherTecido('seda')">
              <img src="./img/Seda.png">
            </div>
            <p>Seda</p>
          </div>
          <div>
            <div class="algodao" onclick="escolherTecido('algodao')">
              <img src="./img/Algodão.png">
            </div>
            <p>Algodão</p>
          </div>
        
          <div>
            <div class="poliester" onclick="escolherTecido('poliester')">
              <img src="./img/Poliester.png">
            </div>
            <p>Poliéster</p>
          </div>
      </div>



          <div class="link">
            <h1>Imagem de referência</h1>
            <input type="link" placeholder="Insira o link"> 
          </div>

          <button class="botao" onclick="validarPedido()">Confirmar pedido</button>

      </section>

      <section class="arteLateral">
          <img src="./img/ilustração.png">
      </section>
    </main>

    <footer>
        <div class="displayProdutos">
          <h2>Últimos pedidos</h2>

          <div class="produtos">
            
            <div class="caixa">
              <img src="./img/Blusa1.png" onclick="escolherProduto(this)">
              <h3><strong>Criador:</strong>&nbsp;Nome</h3>
            </div>
  
            <div class="caixa">
              <img src="./img/Blusa2.png" onclick="escolherProduto(this)">
              <h3><strong>Criador:</strong>&nbsp;Nome</h3>
            </div>
  
            <div class="caixa">
              <img src="./img/Blusa3.png" onclick="escolherProduto(this)">
              <h3><strong>Criador:</strong>&nbsp;Nome</h3>
            </div>
  
            <div class="caixa">
              <img src="./img/Blusa4.png" onclick="escolherProduto(this)">
              <h3><strong>Criador:</strong>&nbsp;Nome</h3>
            </div>
  
            <div class="caixa">
              <img src="./img/Blusa5.png" onclick="escolherProduto(this)">
              <h3><strong>Criador:</strong>&nbsp;Nome</h3>
            </div>
          </div>
        </div>
    </footer>
    `
}

function escolherModelo(modelo){
    const modeloSelecionado = document.querySelector(".modelos .selecionado")
    if (modeloSelecionado != null){
        modeloSelecionado.classList.remove("selecionado")
    }
    const modeloSelecionar = document.querySelector(`.${modelo}`)
    modeloSelecionar.classList.add("selecionado")

    nomeModelo = modelo
    console.log(nomeModelo)

    validarPedido()
}

function escolherGola(gola){
    const golaSelecionado = document.querySelector(".escolhaGola.selecionado")
    if (golaSelecionado != null){
        golaSelecionado.classList.remove("selecionado")
    }

    const golaSelecionar = document.querySelector(`.${gola}`)
    golaSelecionar.classList.add("selecionado")

    nomeGola = gola
    console.log(nomeGola)

    validarPedido()
}

function escolherTecido(tecido){
    const tecidoSelecionado = document.querySelector(".escolhaTecido.selecionado")
    if (tecidoSelecionado != null){
        tecidoSelecionado.classList.remove("selecionado")
    }

    const tecidoSelecionar = document.querySelector(`.${tecido}`)
    tecidoSelecionar.classList.add("selecionado")

    nomeTecido = tecido
    console.log(nomeTecido)

    validarPedido()
}

function validarPedido(){
    if(nomeModelo != null  && nomeGola !=  null && nomeTecido != null){
        let confirmarPedido = document.querySelector(".botao")
        confirmarPedido.classList.add("finalizar")
    }
}