// write js code here corresponding to favourites.html
//ocument.querySelector("#navbar").addEventListener("submit",myFunction);
var get1 = JSON.parse(localStorage.getItem("favourites"))||[];
  
callingfunction(get1)
  function callingfunction(info){
      info.forEach(function (ele,index){
        var favDabba = document.createElement("tr");
        var td1 = document.createElement("td")
        td1.innerText=ele.matchNo
        var td2 = document.createElement("td")
        td2.innerText=ele.teamOne
        var td3 = document.createElement("td")
        td3.innerText=ele.teamTwo
        var td4 = document.createElement("td")
        td4.innerText=ele.date
        var td5 = document.createElement("td")
        td5.innerText=ele.place
        var td6 = document.createElement("td");
        td6.innerText="Delete"
        td6.style.color="red"
        td6.style.cursor="pointer";
        td6.addEventListener("click", function(){
            del(ele,index);
        })

        favDabba.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(favDabba);

      });
      function del(ele,index){
          get1.splice(index,1);
          localStorage.setItem("favourites",JSON.stringify(get1));
          window.location.reload();
      }
 
}