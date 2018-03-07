var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var EditPostController = (function () {
            function EditPostController(postService, $routeParams, $location) {
                this.postService = postService;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.postId = this.$routeParams['id'];
                this.getPost();
            }
            EditPostController.prototype.getPost = function () {
                this.post = this.postService.getPost(this.postId);
            };
            EditPostController.prototype.upDatePost = function () {
                this.postService.updatePost(this.post);
                this.$location.path('/');
            };
            return EditPostController;
        }());
        Controllers.EditPostController = EditPostController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
