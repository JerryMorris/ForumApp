var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var DeleteReplyController = (function () {
            function DeleteReplyController(replyService, $routeParams, $location) {
                this.replyService = replyService;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.replyId = this.$routeParams['id'];
                this.getReply();
            }
            DeleteReplyController.prototype.getReply = function () {
                this.reply = this.replyService.getReply(this.replyId);
            };
            DeleteReplyController.prototype.deleteReply = function () {
                var _this = this;
                this.reply.isActive = false;
                this.reply = this.replyService.deleteReply(this.replyId).then(function () {
                    _this.$location.path('/');
                });
            };
            DeleteReplyController.prototype.cancel = function () {
                this.$location.path('/');
            };
            return DeleteReplyController;
        }());
        Controllers.DeleteReplyController = DeleteReplyController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
