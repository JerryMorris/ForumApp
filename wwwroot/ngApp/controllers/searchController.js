var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var SearchController = (function () {
            function SearchController(topicService, postService) {
                this.topicService = topicService;
                this.postService = postService;
                this.getTopics();
            }
            SearchController.prototype.getTopics = function () {
                this.topics = this.topicService.getAllTopics();
            };
            SearchController.prototype.getPostByTopicId = function (topicId) {
                debugger;
                this.posts = this.postService.getPostByTopicId(topicId.id);
            };
            SearchController.prototype.searchPost = function (userSearch) {
                debugger;
                this.post = this.postService.searchPost(this.userSearch);
            };
            return SearchController;
        }());
        Controllers.SearchController = SearchController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
