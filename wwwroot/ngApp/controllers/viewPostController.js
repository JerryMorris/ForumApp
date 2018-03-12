var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var ViewPostController = (function () {
            function ViewPostController(postService, replyService, $routeParams, $location) {
                this.postService = postService;
                this.replyService = replyService;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.postId = this.$routeParams['id'];
                this.getPost();
                this.getreplies();
            }
            ViewPostController.prototype.getPost = function () {
                this.post = this.postService.getPost(this.postId);
            };
            ViewPostController.prototype.getreplies = function () {
                this.replies = this.replyService.getPostReplies(this.postId);
            };
            ViewPostController.prototype.saveReply = function () {
                this.reply.postId = this.postId;
                this.replyService.saveReply(this.reply).then(function () {
                    location.reload();
                });
            };
            ViewPostController.prototype.replyToReply = function (id) {
                this.reply.replyId = id;
                this.replyService.saveReply(this.reply).then(function () {
                    location.reload();
                });
            };
            ViewPostController.prototype.getRepliesToReply = function (id) {
                this.replied = this.replyService.getRepliesToReply(id);
            };
            ViewPostController.prototype.likePost = function () {
                this.post.likes = this.post.likes + 1;
                this.postService.updatePost(this.post);
            };
            ViewPostController.prototype.likeReply = function () {
                debugger;
                this.reply.likes = this.reply.likes + 1;
                this.replyService.updateReply(this.reply);
            };
            return ViewPostController;
        }());
        Controllers.ViewPostController = ViewPostController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
