function Paginatnion(config) {
    
    var eachItem = config.eachItem;
    var displayItem = config.displayItem
    var pageCount = Math.ceil(config.eachItem.length / config.displayItem);
    var mainContainer = config.mainContainer;
    var pageLoad = config.pageLoad;
    var paginationPlace = config.paginationPlace;
    var itemsContainer = config.itemsContainer;
    var firstPage = `<li class="first-pagination-li"><a></a></li>`;
    var lastPage = `<li class="last-pagination-li"><a></a></li>`;
    
    //will be added in the future
    // var nextPage = '<li class="next-pagination-li"><a>›<a/></li>';
    // var prevPage = '<li class="prev-pagination-li"><a>‹<a/></li>';
    
    if (pageCount > 1) {
        if (paginationPlace == 'after') {
            mainContainer.find(itemsContainer).after('<div class="pagination-container"><ul class="pagination-ul"></ul></div>');
        } else if (paginationPlace == 'before') {
            mainContainer.find(itemsContainer).before('<div class="pagination-container"><ul class="pagination-ul"></ul></div>');
        } else {
            if (mainContainer.find(paginationPlace).length) {
                mainContainer.find(paginationPlace).append('<div class="pagination-container"><ul class="pagination-ul"></ul></div>');
            } else {
                console.log('the selector "mainContainer" is not in the right container');
            }
        }
        var ulList = mainContainer.find('.pagination-ul');
        
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
            mainContainer.find(".comment-row").hide();
            mainContainer.find(".comment-row").each(function(n) {
                if (n >= displayItem * (page - 1) && n < displayItem * page){
                    $(this).show();
                }
            });        
        }
        if (pageLoad == 'first') {
            //bind current class pagination buttons to current page at firsy page load
            mainContainer.find('.pagination-page').first().addClass('current');
            
            //show current page.
            showPage(1);
            
            //show current page pagination buttons
            mainContainer.find(".pagination-page").hide();
            mainContainer.find(".pagination-page").slice(0, 3).show();
        } else if (pageLoad == 'last') {
            //bind current class pagination buttons to current page at firsy page load
            mainContainer.find('.pagination-page').last().addClass('current');
            
            //show current page.
            showPage(pageCount);
            
            //show current page pagination buttons
            mainContainer.find(".pagination-page").hide();
            if (pageCount < 3) {
                mainContainer.find(".pagination-page").slice(pageCount - 2, pageCount).show();
            } else {
                mainContainer.find(".pagination-page").slice(pageCount - 3, pageCount).show();
            }
        } else {
            mainContainer.find('.pagination-page').last().addClass('current');
            showPage(pageCount);
            mainContainer.find(".pagination-page").hide();
            if (pageCount < 3) {
                mainContainer.find(".pagination-page").slice(pageCount - 2, pageCount).show();
            } else {
                mainContainer.find(".pagination-page").slice(pageCount - 3, pageCount).show();
            }
        }
        
        mainContainer.find(".pagination-page").each(function(index) {
            $(this).click(function(event) {
                event.preventDefault();
                
                mainContainer.find(".pagination-page").removeClass("current");
                $(this).addClass("current");
                showPage(parseInt($(this).text()));
                mainContainer.find(".pagination-page").hide();
                if (index < 1) {
                    mainContainer.find(".pagination-page").slice(index, index + 3).show();
                
                } else if (index < 2) {
                    mainContainer.find(".pagination-page").slice(index - 1, index + 3).show();
                }
                else {
                    mainContainer.find(".pagination-page").slice(index - 2 , index + 3).show();
                }
            });
        });
        
        // first page
        mainContainer.find('.first-pagination-li').click(function(event) {
            event.preventDefault();
            showPage(1);
            mainContainer.find(".pagination-page").hide();
            mainContainer.find(".pagination-page").removeClass("current");
            mainContainer.find(".pagination-page").first().addClass('current');
            mainContainer.find(".pagination-page").slice(0, 3).show();
        });
        
        //last page
        mainContainer.find('.last-pagination-li').click(function(event) {
            event.preventDefault();
            showPage(pageCount);
            mainContainer.find(".pagination-page").hide();
            mainContainer.find(".pagination-page").removeClass("current");
            mainContainer.find(".pagination-page").last().addClass('current');
            
            // mainContainer.find(".pagination-page").slice(pageCount - 3, pageCount).show();
            if (pageCount < 3) {
                mainContainer.find(".pagination-page").slice(pageCount - 2, pageCount).show();
            } else {
                mainContainer.find(".pagination-page").slice(pageCount - 3, pageCount).show();
            }
        });
    }
}