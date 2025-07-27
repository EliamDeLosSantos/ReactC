//Fetch Api with Promises
const url = "https://jsonplaceholder.typicode.com/comments";

// fetch(url)
//     .then((response) => {
//         if (response.ok) {
//             return response.json()
//         } else throw new Error("Hubo un error")
//     })
//     .then(result => console.log(result))
//     .catch(error => {
//         console.log(error.message)
//     });

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error.message))

const consultarApiAsync = async () => {
    try {
        const response = await fetch(url3);
        if(!response.ok) throw new Error("Hubo un error");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message)
    }
}

consultarApiAsync();

console.log("then");