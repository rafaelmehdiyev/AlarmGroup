$(function() {
    const pagination = $('.works-pagination');
    const itemsPerPage = 3;
    const worksWrapper = $('.works-wrapper');
    const singleWork = $('.single-work', worksWrapper);
    const numItems = singleWork.length;
    const numPages = Math.ceil(numItems / itemsPerPage);

    singleWork.slice(itemsPerPage).hide();

    pagination.append(`<li><a href="#" class="prev"><i class="fa fa-angle-left"></i></a></li>`);

    for (let i = 1; i <= numPages; i++) {
        pagination.append(`<li><a href="#" class="page"><span>${i}</span></a></li>`);
    }

    pagination.append(`<li><a href="#" class="next"><i class="fa fa-angle-right"></i></a></li>`);
    pagination.find(".page:first").addClass("active");
    pagination.find(".prev").hide();

    $('.works-pagination .page').click(function (e) {
        e.preventDefault();
        const pageNumber = $(this).text();
        const startItem = (pageNumber - 1) * itemsPerPage;
        const endItem = startItem + itemsPerPage - 1;

        singleWork.hide().slice(startItem, endItem + 1).addClass('active').show();
        pagination.find('.page').removeClass('active');
        $(this).addClass('active');

        if (pageNumber == 1) {
            pagination.find('.prev').hide();
        } else {
            pagination.find('.prev').show();
        }

        if (pageNumber == numPages) {
            pagination.find('.next').hide();
        } else {
            pagination.find('.next').show();
        }
    });

    $('.works-pagination .prev').click(function (e) {
        e.preventDefault();
        const currentPage = pagination.find('.page.active');
        const prevPage = currentPage.parent().prev().children('.page');

        if (prevPage.length > 0) {
            prevPage.trigger('click');
        }
    });

    $('.works-pagination .next').click(function (e) {
        e.preventDefault();
        const currentPage = pagination.find('.page.active');
        const nextPage = currentPage.parent().next().children('.page');

        if (nextPage.length > 0) {
            nextPage.trigger('click');
        }
    });
});
