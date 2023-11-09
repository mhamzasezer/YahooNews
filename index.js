"use strict";
// Everyday the program will sent me a message for the current days most commented 
// news from the 6 catagories.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const axios_1 = __importDefault(require("axios"));
const catagoriesUrls = [
    "https://news.yahoo.co.jp/ranking/comment/domestic",
    "https://news.yahoo.co.jp/ranking/comment/world",
    "https://news.yahoo.co.jp/ranking/comment/business",
    "https://news.yahoo.co.jp/ranking/comment/entertainment",
    "https://news.yahoo.co.jp/ranking/comment/sports",
    "https://news.yahoo.co.jp/ranking/comment/it-science"
];
function fetchDataFromUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoryData = [];
            for (const url of catagoriesUrls) {
                const response = yield axios_1.default.get(url);
                categoryData.push(response.data); //Store the html data
            }
            return categoryData;
        }
        catch (error) {
            console.error("Error fetching data: ", error);
            throw error;
        }
    });
}
fetchDataFromUrl()
    .then(data => {
    data.forEach((category, index) => {
        console.log(`Data for category ${index + 1}:`, category);
    });
});
