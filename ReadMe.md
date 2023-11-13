# Notes
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

### Topics Covered
- APIs
- Fetch API
- JSON
- Error Handling

### What Should Already Be Understood
- Promises, resolvers, functions, async/await

## Files in this Lesson
- `index.html`
- `index.js`

**Links in this Project**
- https://github.com/wh-iterabb-it/meowfacts
- https://jsonplaceholder.typicode.com/posts/1

## Resources
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [w3 Schools: Ajax](https://www.w3schools.com/js/js_ajax_intro.asp)
- [jQuery](https://www.w3schools.com/jquery/default.asp)
- [JSON](https://www.json.org/json-en.html)

## Challenges
*All challenge solutions will be up to the instructor as to how they are provided.*

```js
/* 
    ! CHALLENGE
  
    - Create a folder within a Challenges Folder to house the below files.

    - Create a boilerplate for index.html
        - Change the title to: "Disney API"
        - link the disneyFetch.js at the bottom of the body element.

    - Create two different variables
        - one will hold the URL provided
        - one will generate a random number from 0-50 (whole number)
    - Create an async function called INFO that will accept two different parameters
        - the url
        - the random number
    - Within the function, create a TRY/CATCH.
        - TRY to fetch the url
            - JSONify the data returned
            - console.log 3 different positions:
                - The overall promise returned 
                    * hint: use the random number to target an object within the array provided.
                - The name of a single character
                - The imageURL of the character that is provided.
        - CATCH any error that is returned.
    - Invoke your function and pass with both variables as arguments.
    
    All results will be displayed in the console of the browser.

    **********

    API: Disney URL to use
    https://api.disneyapi.dev/character
    
    
    Additional Documentation:
    https://disneyapi.dev/
    */
```
