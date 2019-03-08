const inputOne = document.createElement("input");
const createButton = document.createElement("button");
const createContainer = document.createElement("article");
const allCards = document.createElement("div");
allCards.id = "allCards";
createContainer.id = "createContainer";

createButton.textContent = "Create!";
document.body.appendChild(createContainer);
document.body.appendChild(allCards);
createContainer.appendChild(inputOne);
createContainer.appendChild(createButton);

let i = 1;

const deleteFunction = (cardToDelete) => {
    allCards.removeChild(cardToDelete);
    i--;
}

const builder = (input) => {
    const cardContainer = document.createElement("article");
    cardContainer.id = `card--${i}`;
    cardContainer.className = "card";
    cardContainer.style.border = "1px solid red";
    document.body.appendChild(cardContainer);

    cardContainer.innerHTML =
        `
        <div>${input}</div>
        <div>
            <button>Delete This Card</button>
        </div>
        `;
    
    const deleteButton = cardContainer.querySelector("button");
    deleteButton.id = `delete--${i}`;
    allCards.appendChild(cardContainer);
    deleteButton.addEventListener("click", function () {
        deleteFunction(cardContainer);
    });
    i++;
}



createButton.addEventListener("click", function() {
    builder(inputOne.value);
})

