// write js code here corresponding to matches.html
  // document.querySelector("#navbar").addEventListener("submit",myFunction);
  var getting = JSON.parse(localStorage.getItem("schedule"))||[];
  var get1 = JSON.parse(localStorage.getItem("favourites"))||[]
  matches(getting)
  function matches(getting){
      getting.forEach(function(ele){
        var dabba = document.createElement("tr");
        var td1   = document.createElement("td");
        td1.innerText=ele.matchNo
        var td2   = document.createElement("td");
        td2.innerText=ele.teamOne
        var td3   = document.createElement("td");
        td3.innerText=ele.teamTwo
        var td4   = document.createElement("td");
        td4.innerText=ele.date
        var td5   = document.createElement("td");
        td5.innerText=ele.place
        var td6   = document.createElement("td");
        td6.innerText = "Add as Favourites"
        td6.style.color="blue";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
                istamina(ele);
        });



        dabba.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(dabba);
          
      });
  
  function istamina(ele){
      get1.push(ele)
      localStorage.setItem("favourites",JSON.stringify(get1))
  }
}