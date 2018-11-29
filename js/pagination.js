function paginationFunction() {
        var config = {
            displayItem : 5, // show 5 elements on page
            wrapper : $('#secondCommentBlock'), //parent selector of listed elements
            pageCount : $('#secondCommentBlock .comment-row').length, //count of listed elements
            paginationList : $('.list-view'), //container of elements
            paginationPlace : 'after', //(after, before paginationList or class/id $(.class/#id) - must be in wrapper
            pageLoad : 'first' //defined from which page will be display => 'last' or 'first'
        }
        var commentPagin = new Paginatnion(config)
}
$(function(){
    paginationFunction()
});
