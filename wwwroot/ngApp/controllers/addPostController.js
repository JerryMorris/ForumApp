var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var AddPostController = (function () {
            function AddPostController(postService, topicService, $location) {
                this.postService = postService;
                this.topicService = topicService;
                this.$location = $location;
                this.getTopics();
            }
            AddPostController.prototype.getTopics = function () {
                this.topics = this.topicService.getAllTopics();
            };
            AddPostController.prototype.savePost = function () {
                var _this = this;
                debugger;
                this.post.topicId = this.topicId.id;
                this.postService.savePost(this.post).then(function () {
                    _this.$location.path('/');
                });
            };
            AddPostController.prototype.cancel = function () {
                this.$location.path('/');
            };
            return AddPostController;
        }());
        Controllers.AddPostController = AddPostController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
