const topicList = document.querySelectorAll(".topic-clickable-js");
const expandedList = document.querySelectorAll(".expanded");

for (let i = 0; i < topicList.length; i++) {
  const topicIndex = topicList[i];

  topicIndex.onclick = () => { expandTopic() }
}

function expandTopic() {
  for (let i = 0; i < expandedList.length; i++) {
    const expandedIndex = expandedList[i];   

    if (expandedIndex.style.display === "block") {
      expandedIndex.style.display = "none" 
    } else {
      expandedIndex.style.display = "block"
    } 
  }  
  
    
  

  
}