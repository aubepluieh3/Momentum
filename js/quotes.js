const quotes = [
    {
        quote:"오늘의 나는 과거의 내가 잘 버티고 버텨서 끌어온 것이라고. 과거의 내가 끝까지 지켜온 오늘의 나를 위해 나는 또 오늘을 살아야 한다고",
        author:"Anonymous",}
    ,
    {
        quote: "Anyone can be cynical. Dare to be an optimist.",
        author: "Californication",
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: "Lilly Pulitzer"
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Anonymous"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jeffersonr"
    },
    {
        quote: "먼저 자신을 비웃어라 다른 사람이 당신을 비웃기 전에",
        author: "엘사 맥스웰"
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다",
        author: "앙드레 말로"
    },
    {
        quote: "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
        author: "Jim Rohn"
    },
    {
        quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be",
        author: "REid Hoffman"
    },
    {
        quote: '과거의 공기는 내보내고, 새 공기 받아들이기.',
        author: "황보름"
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText=todaysQuote.author;