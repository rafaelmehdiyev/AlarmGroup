const newsCarousel = document.querySelector(".carousel-news")
$.getScript('assets/js/news.js', function()
{
    const news = getNews(3);
    news.forEach(function(i){
        newsCarousel.innerHTML += `<div class="carousel-news-box" style="background-image: url(${i.news_image});">
    <div class="carousel-news-content">
      <div class="carousel-news-header pb-2">
        <h1 class="carousel-news-heading">${i.title}</h1>
      </div>
      <div class="carousel-news-body">
        <p>${i.description}</p>
      </div>
    </div>
  </div>`
    })

    $(newsCarousel).slick({
        autoplay:true,
        autoplaySpeed: 6000,
        arrows:true,
        default: true,
        infinite: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
});
