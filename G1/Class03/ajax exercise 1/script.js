$(document).ready(function(){
    let callBtn = document.getElementById("callBtn");
    let result = document.getElementById("result");
    callBtn.addEventListener("click", function(){
        $.ajax({
            url: "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",
            success: function(response){
                console.log("Success!");
                let responseObject = JSON.parse(response);
                let resultTitle = result.getElementsByTagName("h1")[0];
                let resultList = result.getElementsByTagName("ul")[0];
                resultTitle.innerText = (`${responseObject.academy} Academy`)
                resultList.innerHTML = "";
                for(let student of responseObject.students) {
                    resultList.innerHTML += `<li>${student}</li>`
                }
            },
            error: function(error){
                console.log(error);
            }
        })
    })
})