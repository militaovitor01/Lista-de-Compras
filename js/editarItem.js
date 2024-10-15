export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        const textoAtualiado = elemento.querySelector("#item-titulo");
        textoAtualiado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".input-checkbox").checeked;

        if (estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.quertSelector(".checkbox-customizado").classList.add("checked");
            textoAtualiado.style.textDecoration = "line-through";
        }
    }

}