const submit = document.querySelector("#make-card")
const deleteDiv = document.querySelector("#output")
let counter = 1;

submit.addEventListener("click", () => {
    deleteDiv.innerHTML += `
    <article class="card" id="card--${counter}">
    <div>${document.querySelector("#card-input").value}</div>
    <div>
        <button id="delete--${counter}">Delete This Card</button>
    </div>
    </article>`;
    counter++;
})

deleteDiv.addEventListener("click", (event) => {
    console.log(event.toElement.innerHTML === "Delete This Card")
    if (event.toElement.innerHTML === "Delete This Card") {
        deleteDiv.removeChild(event.toElement.parentNode.parentNode)
    }
})