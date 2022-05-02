// write js code here corresponding to matches.html

matchSchedules = JSON.parse(localStorage.getItem("schedule"))||[];

displayData(matchSchedules);

function displayData(data) {
     var tbody = document.querySelector("tbody");
  data.forEach(function(val,index){

       var tr = document.createElement("tr");
       var td1 = document.createElement("td");
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var td5 = document.createElement("td")
        var td6 = document.createElement("td")
   
       td1.innerText = val.matchNum;
       td2.innerText = val.teamA;
       td3.innerText = val.teamB;
       td4.innerText = val.date;
       td5.innerText = val.venue;
   
       var favBtn = document.createElement("button");
       favBtn.innerText = "Add as Favourites"
       td6.append(favBtn);
   
       tr.append(td1,td2,td3,td4,td5,td6);
       tbody.append(tr);
       favBtn.addEventListener("click",function(){
             addAsFav(val);
             
       });
  })
    function addAsFav(item){
         getData = JSON.parse(localStorage.getItem("favourites")) ||[];
         getData.push(item);
         localStorage.setItem("favourites",JSON.stringify(getData));
    }
 
}



