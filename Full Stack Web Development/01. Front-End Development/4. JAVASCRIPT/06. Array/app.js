// Array 
// const Name = "ajay";
// Name  = "Pappu"
// console.log(Name);

// const Name = ["Pappu" , "Ajay", "Vijay", "Anjali", "Kiran", "RamKor Bai" , "Shraddha"];

// Name[6] = "Pooja";

// console.log(Name);

const books = ["5 second rule" , "who will cry when you die" , "Rich and Poor Dad "];
// console.log(books);
books.push("Waiting for visa ");
topsellBooks = books;
topsellBooks.push("The Smart Invester ");
console.log(books);


const tweet =  {
    name :"Pappu Sonere",
    tweet :20,
    age:46
}

const anotherTweet = {
    name : "Ajay Sonere",
    tweet : 40,
    age : 21
}
console.log(tweet);

const newTweet = tweet;
newTweet.tweet = 52;

console.log(newTweet);

const videos = [
    "Html Tutorial",
    "cascading style sheet",
    "Javascript",
    "JavaScript Query"
];

// videos.forEach((video)=>{
//     console.log(video); 
// })

//  Map in JS

const videoMap = videos.map((video)=>{
   return video.toUpperCase();
})

const newVideoMap = videos.map((video)=>{
    return video;
});
videoMap.push("React Tutorial");
console.log(newVideoMap);
console.log(videoMap);

// FIND

console.log("FIND ");
const searchedItem = videos.find((video)=>{
    return video.includes("Javascript");
})

console.log(searchedItem);


//  FILTER
console.log("FILTER");
const shortItem = videos.filter((video)=>{
    return video.length < 100;
})

console.log(shortItem);

const games = [
    {title :"Mass Effect" , rating : 9.5},
    { title: "pubg Mobile", rating: 10 },
    { title: "Free Fire", rating: 8 },
    { title: "Call Of Duty", rating: 7},
    { title: "WWE ", rating: 9 },
];

console.log(games[0].rating);

const searchGame = games.filter((game)=>{
    return game.rating >= 9 ;
});

console.log(searchGame);