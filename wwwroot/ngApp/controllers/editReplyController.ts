namespace FF1.Controllers {

    export class EditReplyController {
        public reply;

        constructor(private replyService: FF1.Services.ReplyService,
            private $location: ng.ILocationService) { } 

    }

}