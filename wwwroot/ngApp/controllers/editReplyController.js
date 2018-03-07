var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var EditReplyController = (function () {
            function EditReplyController(replyService, $location) {
                this.replyService = replyService;
                this.$location = $location;
            }
            return EditReplyController;
        }());
        Controllers.EditReplyController = EditReplyController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
