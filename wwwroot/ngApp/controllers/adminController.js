var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var AdminController = (function () {
            function AdminController(postService, replyService) {
                this.postService = postService;
                this.replyService = replyService;
                this.getAllPosts();
                this.getAllReplies();
            }
            AdminController.prototype.getAllPosts = function () {
                this.posts = this.postService.getAllPost();
            };
            AdminController.prototype.getAllReplies = function () {
                this.replies = this.replyService.getAllReplies();
            };
            AdminController.prototype.deletePost = function (id) {
                this.post = this.postService.deletePost(id);
            };
            AdminController.prototype.deleteReply = function (id) {
                this.reply = this.replyService.deleteReply(id);
            };
            return AdminController;
        }());
        Controllers.AdminController = AdminController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
