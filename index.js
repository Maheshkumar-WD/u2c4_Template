// write js code here corresponding to index.html
// You should add submit event on the form

var form =document.querySelector("#masaiForm");


form.addEventListener("submit",scheduleData);


function scheduleData(){
     event.preventDefault();
     data = JSON.parse(localStorage.getItem("schedule"))||[];
     match = {
          matchNum :form.matchNum.value ,
          teamA:form.teamA.value,
          teamB : form.teamB.value,
          date: form.date.value,
          venue:form.venue.value,
     }

     data.push(match);
     localStorage.setItem("schedule",JSON.stringify(data));
}
