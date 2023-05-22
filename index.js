require('dotenv').config();


let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=cat&limit=25&offset=0&rating=g&lang=en`
console.log(endpoint)
// Print out value of API key stored in .env file
console.log(process.env.API_KEY)


async function getImage(query){
    let newUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
    let res = await fetch(newUrl)
    let dat = await res.json();
    let data = dat["data"]
    let x = data[0]
    let url = x["url"]

    console.log("This is the new Url with the queary of dog " + url)
}

getImage("dog")