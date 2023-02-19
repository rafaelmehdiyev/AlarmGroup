const news =[
    {
        "id":1,
        "title": "Alarm Group MMC",
        "description": "News Description 1",
        "news_image":"images/Alarm.png"
    },
    {
        "id":2,
        "title": "News Title 2",
        "description": "News Description 2",
        "news_image":"images/slider2.jpg"
    },
    {
        "id":3,
        "title": "News Title 3",
        "description": "News Description 3",
        "news_image":"images/slider1.jpg"
    },
    {
        "id":4,
        "title": "News Title 4",
        "description": "News Description 4",
        "news_image":"images/slider2.jpg"
    },
    {
        "id":5,
        "title": "News Title 5",
        "description": "News Description 5",
        "news_image":"images/slider1.jpg"
    },
    {
        "id":6,
        "title": "News Title 6",
        "description": "News Description 6",
        "news_image":"images/slider2.jpg"
    },
]

function getNews(){
    return news;
}

function getNews(num){
    return news.slice(0,num)
}