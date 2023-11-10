
// Everyday the program will sent me a message for the current days most commented 
// news from the 6 catagories.

// We need to take the headline, catagories, link, photo data of that article and sent it via line.
// The 6 topics are: IT/Science, Sports, Economy, International, Domestic, and Entertainment.

// We need to use the axios library to get the html data from the website.
// We need to use the cheerio library to parse the html data from the website.
// We need to use the line api to send the data to the line app.

// We need to run this tool everyday at 8:00 pm and 8:00 am.
// Also if possible we need to run this tool at Microsoft Azure so we dont need to run it on our own computer.

// First we need to get the html data from the website.
// Then we need to parse the html data from the website.
// Then we need to get the data we want from the html data.
// Then we need to sent the data to the line app.
// Then we need to run this tool everyday at 8:00 pm and 8:00 am.
// Also run in Microsoft Azure if possible.

import axios from "axios";
import cheerio from "cheerio";

const catagoriesUrls = [
    "https://news.yahoo.co.jp/ranking/comment/domestic",
    "https://news.yahoo.co.jp/ranking/comment/world",
    "https://news.yahoo.co.jp/ranking/comment/business",
    "https://news.yahoo.co.jp/ranking/comment/entertainment",
    "https://news.yahoo.co.jp/ranking/comment/sports",
    "https://news.yahoo.co.jp/ranking/comment/it-science"
];    

async function fetchDataAndParse() {
    try{
        const categoryData: unknown[] = [];
        for (const url of catagoriesUrls){
            const response = await axios.get(url);
            const parsedData = parseHTML(response.data);
            categoryData.push(response.data);//Store the html data
        }
        return categoryData;    
    } catch(error){
        console.error("Error fetching data: ", error);
        throw error;
    }
}


function parseHTML(html: string): object {
    const $ = cheerio.load(html);
    
    // Extracting headlines and links
    const headlines = $(".newsFeed_item_title").map((index, element) => $(element).text()).get();
    const links = $(".newsFeed_item_link").map((index, element) => $(element).attr("href")).get();

    const parsedData = {
        headlines,
        links,
    };

    return parsedData;
}


fetchDataAndParse()
    .then(data => {
        data.forEach((category, index) => {
            console.log(`Data for category ${index + 1}:`, category);
            
    });
});