// write js code here corresponding to favourites.html


var getData = JSON.parse(localStorage.getItem("favourites"));

console.log(getData);
var tbody = document.querySelector("tbody");
getData.forEach(function (val,index){

     tr = document.createElement("tr");

     td1 = document.createElement("td");
     td2 = document.createElement("td");
     td3 = document.createElement("td");
     td4 = document.createElement("td");
     td5 = document.createElement("td");
     td6 = document.createElement("td");

     td1.innerText = val.matchNum;
     td2.innerText = val.teamA;
     td3.innerText = val.teamB;
     td4.innerText = val.date;
     td5.innerText = val.venue;


     del = document.createElement("button");
     del.innerText = "delete";
     del.addEventListener("click",function(){
          dele(index);
     })

     td6.append(del);

     tr.append(td1,td2,td3,td4,td5,td6);

     tbody.append(tr);
     function dele(index){
          getData = JSON.parse(localStorage.getItem("favourites")) || [];
          getData.splice(index,1);
          localStorage.setItem("favourites",JSON.stringify(getData));
          window.location.reload();
     }

})

