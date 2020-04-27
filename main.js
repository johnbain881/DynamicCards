const submit = document.querySelector("#make-card")
const deleteDiv = document.querySelector("#output")
let counter = 1;

submit.addEventListener("click", () => {
    deleteDiv.innerHTML += `
    <article class="card" id="card--${counter}">
    <div>${document.querySelector("#card-input").value}</div>
    <div>
        <button onclick="deleteCard('card--${counter}')" id="delete--${counter}">Delete This Card</button>
    </div>
    </article>`;



    // let article = document.createElement("article");
    // article.classList.add("card");
    // article.id = `card--${counter}`;
    // let div1 = document.createElement("div");
    // div1.innerText = document.querySelector("#card-input").value;
    // article.appendChild(div1);
    // let div2 = document.createElement("div");
    // let button = document.createElement("button");
    // button.id = `delete--${counter}`;
    // button.innerText = "Delete This Card";
    // div2.appendChild(button);
    // article.appendChild(div2);

    // deleteDiv.appendChild(article);

    // button.addEventListener("click", () => {
    //     article.parentNode.removeChild(article)
    // })

    counter++;
})

function deleteCard(id) {
    document.getElementById(id).remove();
}

// deleteDiv.addEventListener("click", (event) => {
//     if (event.toElement.innerHTML === "Delete This Card") {
//         deleteDiv.removeChild(event.toElement.parentNode.parentNode)
//     }
// })