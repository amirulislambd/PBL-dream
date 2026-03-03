const mainContainer = document.querySelector(".main");
const coins = document.getElementById("coins");
const selected = document.querySelector(".selected");
const selectedCount=selected.innerText
const convertToNum = Number(selectedCount);
console.log(convertToNum)

const allCards = document.getElementById("card-section");
const title = document.querySelector(".card-tile");
const card = document.querySelector(".card");
mainContainer.addEventListener("click", (e) => {
  const currentCard = e.target.closest(".card");
  if (!currentCard) return;
  if (e.target.classList.contains("choose-btn")) {
    const name = currentCard.querySelector(".card-title")?.innerText;
    const img = currentCard.querySelector("img");
    const hand = currentCard.querySelector(".hand")?.innerText;
    const price = currentCard.querySelector(".player-price")?.innerText;
    const btn = currentCard.querySelector(".choose-btn");
    console.log(name, img, hand, price, btn);
    const btnText = btn?.innerText;
    if (btn.innerText === "Choose Player") {
      btn.innerText = "Selected";
      btn.classList.add("bg-green-500", "text-white", "shadow-lg");
      convertToNum++
    } else {
      btn.innerText = "Choose Player";
      btn.classList.remove("bg-green-500", "text-white", "shadow-lg");
    }
  }
});
// console.log(cards)
// console.log(coins);
