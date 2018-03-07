var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var DeletePostController = (function () {
            function DeletePostController(postService, $routeParams, $location) {
                this.postService = postService;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.postId = this.$routeParams['id'];
                this.getPost();
            }
            DeletePostController.prototype.getPost = function () {
                this.post = this.postService.getPost(this.postId);
            };
            DeletePostController.prototype.deletePost = function () {
                this.post.isActive = false;
                this.postService.updatePost(this.post);
                this.$location.path('/');
            };
            DeletePostController.prototype.cancel = function () {
                this.$location.path('/');
            };
            return DeletePostController;
        }());
        Controllers.DeletePostController = DeletePostController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
