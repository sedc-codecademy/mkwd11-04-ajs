fetch('https://swapi.dev/api/')
    .then(data => data.json())
    .then(data => console.log(data));


//CREATE HOMEPAGE WITH THE CARDS

/**
 * 1. Create a function that creates container with main page selection buttons (6 cards)
 * 2. When cards are selected, add event listeners to them so they will fetch the data and 
 *    open new page showing info for the
 * 3. Тry to make the functions reusable as much as possible
 * 
 * 4. BONUS: Make back buttons that will navigate you through the page
 * 5. BONUS++: Make the cards clickable to see attributes inside
 * 5. DO NOT REPEAT YOURSELF
 * 
 */


