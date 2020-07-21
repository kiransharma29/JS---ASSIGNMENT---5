console.log('Fetch Api');

const result = fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => console.log(data));
console.log(result);

fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    body: JSON.stringify({
        userId: 6,
        title: "some title",
        body: 'lorem ipsum',
    })
}).then(response => response.json()).then(data => console.log(data))