const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/users";


const consultarApiAsync = async () => {
    try {
        const ini = performance.now();
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const response2 = await fetch(url2);
        const data2 = await response2.json();
        console.log(data2);

        const response3 = await fetch(url3);
        const data3 = await response3.json();
        console.log(data3);

        const fin = performance.now();
        console.log(`El result es ${fin - ini} ms`)
    } catch (error) {
        console.log(error.message)
    }
}
consultarApiAsync();
const consultarApiAsync2 = async () => {
        const ini = performance.now();

    const [response,response2,response3] = await Promise.all([fetch(url),fetch(url2),fetch(url3)]);
    const [data, data2,data3] = await Promise.all([response.json(),response2.json(),response3.json()]);
    console.log(data);
    console.log(data2);
    console.log(data3);
     const fin = performance.now();
        console.log(`El 2do result es ${fin - ini} ms`)
}
consultarApiAsync2();