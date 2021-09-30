"use strict";

//  SOURCES: 
//  Explains reddit api - https://www.reddit.com/dev/api/
//  API - https://www.reddit.com/r/aww/.json

const awwPosts = fetch('https://www.reddit.com/r/aww/best/.json')

awwPosts
    .then(response => {
        // first then
        // then means when the API finishes downloading
        // console.log(response);

        return response.json(); // converts into javascript object with the data requested
    })
    .then(posts => {
        // second then, after we get the javascript object
        console.log(posts);

        const results = posts.data.children;

        for (const result of results) {

            // <div> <h2> film title </h2> </div>
            const div = document.createElement('div');
            const img = document.createElement('img');

            img.src = result.data.thumbnail; // how do I target OBJECT # 2, not Array piece # 2
            div.append(img);

            const postTitle = document.createElement('p');
            postTitle.innerText = result.data.title;
            div.append(postTitle);

            document.querySelector('.main').append(div); // add div to the the end of our main

        }
    })