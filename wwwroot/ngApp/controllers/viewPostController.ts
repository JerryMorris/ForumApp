namespace FF1.Controllers {

    export class ViewPostController {
        public post;
        public postId;
        public replied;
        public replies;
        public reply;

        constructor(private postService: FF1.Services.PostService,
            private replyService: FF1.Services.ReplyService,
            private $routeParams: ng.route.IRouteParamsService,
            private $location: ng.ILocationService) {
            this.postId = this.$routeParams['id'];
            this.getPost();
            this.getreplies();

        }

        getPost() {
            this.post = this.postService.getPost(this.postId);
        }

        getreplies() {
            this.replies = this.replyService.getPostReplies(this.postId);
        }

        saveReply() {
            this.reply.postId = this.postId;
            this.replyService.saveReply(this.reply).then(() => {
                location.reload();
            });
        }

        replyToReply(id) {
            this.reply.replyId = id;
            this.replyService.saveReply(this.reply).then(() => {
                location.reload();
            });
        }

        getRepliesToReply(id) {
            this.replied = this.replyService.getRepliesToReply(id);
        }

        likePost() {

            this.post.likes = this.post.likes + 1;
            this.postService.updatePost(this.post);

           

        }

        likeReply() {
            debugger;
            this.reply.likes = this.reply.likes + 1;
            this.replyService.updateReply(this.reply);

            

        }
    }

}