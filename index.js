//!   API
/*
    - Application Programming Interface
    - Client (front end) to communicate with the server (database)
    - Allows HTTP request and response lifecycle
*/

// ! Fetch
/*
    - Before fetch(), we would have to use an httpRequest through the above noted.
        - using tools like jQuery & Ajax

    - Is an API
    - Is a method that requires 1 argument. This is the location we are trying to obtain data from.
    - Handles the request and response
    - Returns a promise.
        - Allows us access to resolvers.
*/

const testEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
fetch(testEndpoint)
    // .then(response => console.log(response));
    // .then(response => console.log(response.url));
    // .then(response => console.log(response.body));
    .then(response => response.json())
    .then(data => console.log(data))


//! JSON
/* 
    - JavaScript Object Notation
        - Very lightweight for storing & transferring
        - "easy to understand"

*   syntax
    {
        "key":"value",
        "key": true,
        "key": 0
    }

    - Everything is wrapped in quotes with some minor exceptions like integers & booleans.
    - Data is all separated by a comman.
    - CANNOT hold comments or functions.
*/

//? JSON.parse(string)
let myText = '{"name": "Gollum", "lost_ring":true}';
console.log(myText);
console.log(JSON.parse(myText));


//*   The Process:
/* 
        1. Fetch your resource which returns a promise.
        2. Use a .then() resolver to assign a parameter.
        3. Use .json() method on response to finish reading entire ReadableStream.
        4. Chain another .then() to read response of object.
        5. Build the rest as needed.
*/

//? Fetches within Functions
const url = 'https://meowfacts.herokuapp.com/';

// function getCatFacts() {
//     fetch(url)
//         .then(res => res.json())
//         .then(obj => {
//             // console.log(obj);
//             // console.log(obj.data);
//             console.log(obj.data[0]);
//         })
// }

//* Using Async/Await
// const getCatFacts = async() => {
//     let res = await fetch(url);
//     let results = await res.json();
//     let data = results.data[0];
//     console.log(data);
// }

//* Error handling
/* 
*   Keywords:
        - try
        - catch

*   syntax:
    try {
        code block to run...
    } catch (error) {
        code block if error is found within the "try"
    }

*/

async function getCatFacts() {

    try {
        let res = await fetch(url);
        // let res = fetch(url); // used to see the catch
        let results = await res.json();
        let data = results.data[0];
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getCatFacts();