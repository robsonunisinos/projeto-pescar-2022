var alunos = [
    {
        nome: "Paulo",
        idade: 16,
        bio: ""
    },
    {
        nome: "Renan",
        idade: 17,
        bio: ""
    },
    {
        nome: "Júlia",
        idade: 16,
        bio: ""
    }
];

var container = document.getElementById('alunos');
for(var i = 0; i < alunos.length; i++){
    container.innerHTML += `
        <div class="col-3">
            <div class="card">
                <img class="w-50" src="./assets/img/menino.png" class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title">${ alunos[i].nome }</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Detalhes</a>
                </div>
            </div>
        </div>
    `;
}