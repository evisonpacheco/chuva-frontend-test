const topicList = document.querySelectorAll(".topic-clickable-js");
const expandedList = document.querySelectorAll(".expanded-js");

for (let index = 0; index < topicList.length; index++) {
  const topicIndex = topicList[index];
  
  topicIndex.addEventListener("click", () => { showContent(index) });
}

function showContent(index) {
  if (expandedList[index].style.display === "block") {
    expandedList[index].style.display = "none" 
  } else {
    expandedList[index].style.display = "block"
  }
}
