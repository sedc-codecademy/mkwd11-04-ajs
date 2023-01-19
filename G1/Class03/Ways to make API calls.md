# These are three different ways to make API calls from your JS application :telephone_receiver:	

## 1. AJAX

```javascript
$.ajax({
    url: " ",
    method: "GET",
    success: function (response) {
        let parsedResponse = JSON.parse(response)
    },
    error: function (error) {
        console.log(error);
    }
});
```

## 2. FETCH

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("There was some problem!");
    .finally(() => console.log("Everything is done at: " + new Date()));
});
```

## 3. ASYNC AWAIT

```javascript
async function callApi(url){
    try {
        return await fetch(url).then(response => response.json());
    }
    catch (error) {
        console.log(error);
    }
}

let apiData = await callApi(url);
```
