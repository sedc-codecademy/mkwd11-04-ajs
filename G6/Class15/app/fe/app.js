document.querySelector('#get').addEventListener('click', () => {
    fetch('http://localhost:3000')
        .then(res => res.json())
        .then(res => console.log(res))
})

document.querySelector('#post').addEventListener('click', () => {
    fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({message: 'Hello from the Client side'})
    })
        .then(res => res.json())
        .then(res => console.log(res))
})

document.querySelector('#put').addEventListener('click', () => {
    fetch('http://localhost:3000', {
        method: 'PUT'
    })
        .then(res => res.json())
        .then(res => console.log(res))
})

document.querySelector('#delete').addEventListener('click', () => {
    fetch('http://localhost:3000', {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => console.log(res))
})