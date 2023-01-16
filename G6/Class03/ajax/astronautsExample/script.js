// Astronauts example
$(function() {
    document.getElementById("sendRequest")
        .addEventListener("click", function() {
            $.ajax({
                url: "http://api.open-notify.org/astros.json",
                success: function(response) {
                    console.log("Request was successful");
                    console.log(response);
                    let element = document.getElementById("astros");
                    element.innerHTML = "";
                    for (let i = 0; i < response.people.length; i++) {
                        element.innerHTML += `<li> ${response.people[i].name} </li>`;
                    }
                },
                error: function(response) {
                    console.log("Request failed because: " + response.status);
                    console.log(response.responseText);
                }
            })
        })
})