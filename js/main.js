function Paginatnion(config) {

    var displayItem = config.displayItem
    var pageCount = Math.ceil(config.pageCount / config.displayItem);
    var idContainer = config.wrapper;
    var pageLoad = config.pageLoad;
    var paginationPlace = config.paginationPlace;
    var paginationList = config.paginationList;
    var firstPage = `<li class="first-pagination-li"><a></a></li>`;
    var lastPage = `<li class="last-pagination-li"><a></a></li>`;
    
    //will be added in the future
    // var nextPage = '<li class="next-pagination-li"><a>›<a/></li>';
    // var prevPage = '<li class="prev-pagination-li"><a>‹<a/></li>';
    
    if (paginationPlace == 'after') {
        idContainer.find(paginationList).after('<div class="pagination-container"><ul class="pagination-ul"></ul></div>');
    } else if (paginationPlace == 'before') {
        idContainer.find(paginationList).before('<div class="pagination-container"><ul class="pagination-ul"></ul></div>');
    } else {
        if (idContainer.find(paginationPlace).length) {
            idContainer.find(paginationPlace).append('<div class="pagination-container"><ul class="pagination-ul"></ul></div>');
        } else {
            console.log('the selector "idContainer" is not in the right container');
        }
    }
    var ulList = idContainer.find('.pagination-ul');
    
    // ulList.append(prevPage); will be added in future
    for (var i = 0; i < pageCount; i++) {
        var pagerButton = `<li class="pagination-page"><a>${i + 1}</></li>`;
        ulList.append(pagerButton);
    }
    // ulList.append(nextPage); will be added in future
    
    //display first page
    ulList.prepend(firstPage);
    //display lastpage
    ulList.append(lastPage);
    
    function showPage(page) {
        idContainer.find(".comment-row").hide();
        idContainer.find(".comment-row").each(function(n) {
            if (n >= displayItem * (page - 1) && n < displayItem * page){
                $(this).show();
            }
        });        
    }
    if (pageLoad == 'first') {
        //bind current class pagination buttons to current page at firsy page load
        idContainer.find('.pagination-page').first().addClass('current');
        
        //show current page.
        showPage(1);
        
        //show current page pagination buttons
        idContainer.find(".pagination-page").hide();
        idContainer.find(".pagination-page").slice(0, 3).show();
    } else if (pageLoad == 'last') {
        //bind current class pagination buttons to current page at firsy page load
        idContainer.find('.pagination-page').last().addClass('current');
        
        //show current page.
        showPage(pageCount);
        
        //show current page pagination buttons
        idContainer.find(".pagination-page").hide();
        if (pageCount < 3) {
            idContainer.find(".pagination-page").slice(pageCount - 2, pageCount).show();
        } else {
            idContainer.find(".pagination-page").slice(pageCount - 3, pageCount).show();
        }
    } else {
        idContainer.find('.pagination-page').last().addClass('current');
        showPage(pageCount);
        idContainer.find(".pagination-page").hide();
        if (pageCount < 3) {
            idContainer.find(".pagination-page").slice(pageCount - 2, pageCount).show();
        } else {
            idContainer.find(".pagination-page").slice(pageCount - 3, pageCount).show();
        }
    }
    
    idContainer.find(".pagination-page").each(function(index) {
        $(this).click(function(event) {
            event.preventDefault();
            
            idContainer.find(".pagination-page").removeClass("current");
            $(this).addClass("current");
            showPage(parseInt($(this).text()));
            idContainer.find(".pagination-page").hide();
            if (index < 1) {
                idContainer.find(".pagination-page").slice(index, index + 3).show();
            
            } else if (index < 2) {
                idContainer.find(".pagination-page").slice(index - 1, index + 3).show();
            }
            else {
                idContainer.find(".pagination-page").slice(index - 2 , index + 3).show();
            }
        });
    });
    
    // first page
    idContainer.find('.first-pagination-li').click(function(event) {
        event.preventDefault();
        showPage(1);
        idContainer.find(".pagination-page").hide();
        idContainer.find(".pagination-page").removeClass("current");
        idContainer.find(".pagination-page").first().addClass('current');
        idContainer.find(".pagination-page").slice(0, 3).show();
    });
    
    //last page
    idContainer.find('.last-pagination-li').click(function(event) {
        event.preventDefault();
        showPage(pageCount);
        idContainer.find(".pagination-page").hide();
        idContainer.find(".pagination-page").removeClass("current");
        idContainer.find(".pagination-page").last().addClass('current');
        
        // idContainer.find(".pagination-page").slice(pageCount - 3, pageCount).show();
        if (pageCount < 3) {
            idContainer.find(".pagination-page").slice(pageCount - 2, pageCount).show();
        } else {
            idContainer.find(".pagination-page").slice(pageCount - 3, pageCount).show();
        }
    });
}