const form = document.getElementById('form-agenda');
corpoTabela = document.querySelector('tbody'),
linhas = [];

corpoTabela.onclick=ev=>{
    if (ev.target.tagName=="BUTTON"){
    const tr=ev.target.closest("tr");
    linhas.splice(tr.rowIndex-1,1);
    tr.remove();
    console.log(linhas);
}}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputNome = document.getElementById('nome-contato');
    const inputContato = document.getElementById('numero-contato');

    if (linhas.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} ja foi inserido`);
    }else {
        linhas.push(inputNome.value);
        corpoTabela.insertAdjacentHTML("beforeend", `<tr>
        <td>${inputNome.value}</td>
        <td>${inputContato.value}</td>
        <td><button class='excluir'>Remover</button></td>
    </tr>`);
    console.log(linhas);
}
})



