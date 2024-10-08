const item = document.getElementById('formulario__entrada');
const botaoSalvarItem = document.getElementById('formulario__botao');
const listaDeCompras = document.getElementById('lista');
const listaComprados = document.getElementById('lista-comprados');
let contador = 0;

botaoSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista__item__adicionar");
    itemDaLista.appendChild(containerItemLista);

    // Início da Manipulação do CheckBox
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerItemLista.appendChild(containerCheckbox);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item.value;
    nomeDoItem.style.marginLeft = '8px'; // Adiciona margem para espaçamento
    containerItemLista.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    
    // Botão de Remover
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "/img/excluir.svg";
    imagemRemover.alt = "Remover";
    botaoRemover.appendChild(imagemRemover);
    botaoRemover.addEventListener('click', function() {
        itemDaLista.remove();
    });
    
    // Botão de Alterar
    const botaoAlterar = document.createElement("button");
    botaoAlterar.classList.add("botao-acao");
    const imagemAlterar = document.createElement("img");
    imagemAlterar.src = "/img/Edição.svg";
    imagemAlterar.alt = "Alterar";
    botaoAlterar.appendChild(imagemAlterar);
    botaoAlterar.addEventListener('click', function() {
        const novoNome = prompt("Altere o nome do item:", nomeDoItem.innerText);
        if (novoNome) {
            nomeDoItem.innerText = novoNome;
        }
    });

    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoAlterar);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})} `;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    listaDeCompras.appendChild(itemDaLista);

    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
    });
}
