const button = document.querySelector(".abstract-expandable__button-js");

button.onclick = () => { seeMore() }

function seeMore() {
  let points = document.querySelector(".abstract-expandable__points-js");
  let more = document.querySelector(".abstract-expandable-more-js");
  let btnSeeMore = document.querySelector(".abstract-expandable__button-js");

  points.style.display = "none";
  more.style.display = "block";
  btnSeeMore.innerHTML = "";
}
