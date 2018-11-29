function pagination() {
        var config = {
            displayItem : 5,
            mainContainer : $('#secondCommentBlock'),
            itemsContainer : $('#secondCommentBlock .list-view'),
            eachItem : $('#secondCommentBlock .comment-row'),
            paginationPlace : 'after',
            pageLoad : 'last'
        }
        var pagination = new Paginatnion(config);
}
$(function() {
    pagination();
});