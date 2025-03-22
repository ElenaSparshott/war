let deckId
const newDeckButton = document.getElementById("new-deck")
const drawCardButton = document.getElementById("draw-cards")
const cardsContainer = document.getElementById("cards")

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

newDeckButton.addEventListener("click", handleClick)


drawCardButton.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
        })
})

