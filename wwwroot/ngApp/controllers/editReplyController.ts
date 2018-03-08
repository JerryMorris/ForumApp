namespace FF1.Controllers {

    export class EditReplyController {
        public reply;
        public replyId;

        constructor(private replyService: FF1.Services.ReplyService,
            private $location: ng.ILocationService,
            private $routeParams: ng.route.IRouteParamsService) {
            this.replyId = $routeParams['id'];
            this.getReply();
        }

        getReply() {
            this.reply = this.replyService.getReply(this.replyId);
        }
        updateReply() {
            this.replyService.updateReply(this.reply).then(() => {
                this.$location.path('/');
            });
        }
        cancel() {
            this.$location.path('/');
        }

    }

}