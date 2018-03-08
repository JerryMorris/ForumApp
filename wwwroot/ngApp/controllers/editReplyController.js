var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var EditReplyController = (function () {
            function EditReplyController(replyService, $location, $routeParams) {
                this.replyService = replyService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.replyId = $routeParams['id'];
                this.getReply();
            }
            EditReplyController.prototype.getReply = function () {
                this.reply = this.replyService.getReply(this.replyId);
            };
            EditReplyController.prototype.updateReply = function () {
                var _this = this;
                this.replyService.updateReply(this.reply).then(function () {
                    _this.$location.path('/');
                });
            };
            EditReplyController.prototype.cancel = function () {
                this.$location.path('/');
            };
            return EditReplyController;
        }());
        Controllers.EditReplyController = EditReplyController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
