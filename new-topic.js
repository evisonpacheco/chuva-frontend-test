const newTopic = document.querySelector(".new-topic-js");
const topicHide = document.querySelector(".discussion--hide-js");
const topicSubmitted = document.querySelector(".topic-submitted-js");
const btnNewTopic = document.querySelector(".discussion__button-js");
const btnNewTopic2 = document.querySelector(".topic-submitted__button-js")
const btnSendTopic = document.querySelector(".lowerbar__button-js");

btnNewTopic.addEventListener("click", () => { showTopic() } )
btnNewTopic2.addEventListener("click", () => { showTopic() } )

btnSendTopic.addEventListener("click", () => { showSubmitted() })

function showTopic() {
  newTopic.style.display = "block";
  topicHide.style.display = "none";
  topicSubmitted.style.display = "none";
}

function showSubmitted() {
  newTopic.style.display = "none";
  topicSubmitted.style.display = "block";
}