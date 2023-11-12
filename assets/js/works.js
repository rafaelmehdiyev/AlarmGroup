// $(function () {
//     const pagination = $('.works-pagination');
//     const itemsPerPage = 3;
//     const worksWrapper = $('.works-wrapper');
//     const singleWork = $('.single-work', worksWrapper);
//     const numItems = singleWork.length;
//     const numPages = Math.ceil(numItems / itemsPerPage);

//     singleWork.slice(itemsPerPage).hide();

//     updatePagination();

//     $('.works-pagination .page').click(function (e) {
//         e.preventDefault();
//         const pageNumber = $(this).text();
//         const startItem = (pageNumber - 1) * itemsPerPage;
//         const endItem = startItem + itemsPerPage - 1;

//         singleWork.hide().slice(startItem, endItem + 1).addClass('active').show();
//         pagination.find('.page').removeClass('active');
//         $(this).addClass('active');

//         updatePrevNextVisibility(pageNumber);
//     });

//     $('.works-pagination .prev').click(function (e) {
//         e.preventDefault();
//         const currentPage = pagination.find('.page.active');
//         const prevPage = currentPage.parent().prev().children('.page');

//         if (prevPage.length > 0) {
//             prevPage.trigger('click');
//         }
//     });

//     $('.works-pagination .next').click(function (e) {
//         e.preventDefault();
//         const currentPage = pagination.find('.page.active');
//         const nextPage = currentPage.parent().next().children('.page');

//         if (nextPage.length > 0) {
//             nextPage.trigger('click');
//         }
//     });

//     function updatePagination() {
//         pagination.empty();
//         pagination.append(`<li><a href="#" class="prev"><i class="fa fa-angle-left"></i></a></li>`);
    
//         // Show 1, 2, ... , last number
//         if (numPages > 1) {
//             pagination.append(`<li><a href="#" class="page"><span>1</span></a></li>`);
//         }
//         if (numPages > 2) {
//             pagination.append(`<li><a href="#" class="page"><span>2</span></a></li>`);
//         }
    
//         if (numPages > 3) {
//             pagination.append('<li><span class="dots">...</span></li>');
//         }
    
//         if (numPages > 2) {
//             // Show the last page number
//             pagination.append(`<li><a href="#" class="page"><span>${numPages}</span></a></li>`);
//         }
    
//         pagination.append(`<li><a href="#" class="next"><i class="fa fa-angle-right"></i></a></li>`);
//         pagination.find(".page:first").addClass("active");
//         pagination.find(".prev").hide();
    
//         // Hide all but the first two and the last number
//         pagination.find('li:gt(3):not(:nth-last-child(2))').hide();

//     }
    
    
    
    
    

//     function updatePrevNextVisibility(pageNumber) {
//         if (pageNumber == 1) {
//             pagination.find('.prev').hide();
//         } else {
//             pagination.find('.prev').show();
//         }

//         if (pageNumber == numPages) {
//             pagination.find('.next').hide();
//         } else {
//             pagination.find('.next').show();
//         }
//     }
// });
