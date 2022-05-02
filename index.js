// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFunction);
var get = JSON.parse(localStorage.getItem("schedule"))||[]
  function myFunction(){
    event.preventDefault();
    var summary={
      matchNo:masaiForm.matchNum.value,
      teamOne:masaiForm.teamA.value,
      teamTwo:masaiForm.teamB.value,
      date:masaiForm.date.value,
      place:masaiForm.venue.value
    };
    get.push(summary)
    localStorage.setItem("schedule",JSON.stringify(get));
    masaiForm.reset();
  }
