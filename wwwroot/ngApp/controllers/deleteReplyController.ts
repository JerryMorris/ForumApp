namespace FF1.Controllers {

    export class DeleteReplyController {
        public reply;
        public replyId;

        constructor(private replyService: FF1.Services.ReplyService,
            private $routeParams: ng.route.IRouteParamsService,
            private $location: ng.ILocationService) {
            this.replyId = this.$routeParams['id'];
            this.getReply();

        }

        getReply() {
            this.reply = this.replyService.getReply(this.replyId);
        }

        deleteReply() {
            this.reply.isActive = false;
            this.reply = this.replyService.deleteReply(this.replyId).then(() => {
                this.$location.path('/');
            });
        }

        cancel() {
            this.$location.path('/');
        }
    }

}