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


//*   The Process:
/* 
        1. Fetch your resource which returns a promise.
        2. Use a .then() resolver to assign a parameter.
        3. Use .json() method on response to finish reading entire ReadableStream.
        4. Chain another .then() to read response of object.
        5. Build the rest as needed.
*/

//? Fetches within Functions


//* Using Async/Await


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