const quotes = [
{
    quote: "The way get started is to quit talking and begin doing", // 1
    author: "Walt Disney",
},
{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall", // 2
    author: "Nelson Mandela",
},
{
    quote: "Anyone who has never made a mistake has never tried anything new", // 3
    author: "Albert Einstein",
},
{
    quote: "Age is no guarantee of maturity", // 4
    author: "Lawana Blackwell",
},
{
    quote: "Without continuous personal development, you are now all that you will ever become and hell starts when the person you are meets the person you could have been", // 5
    author: "Eli cohen",
},
{
    quote: "Working hard for something we don't care about is called stressed, working hard for something we love is called passion", // 6
    author: "Simon Sinek",
},
{
    quote: "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new", // 7
    author: "Brian Tracy",
},
{
    quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success", // 8
    author: "Dale Carnegie",
},
{
    quote: "Silence is the virtue of fools", // 9
    author: "Francis Bacon",
},
{
    quote: "There are better starters than me but I’m a strong finisher", // 10
    author: "Usain Bolt",
},
]; // 명언 모음집

const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author; 
