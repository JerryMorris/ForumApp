namespace FF1.Controllers {

    export class AdminController {
        public posts;
        public post;
        public replies;
        public reply;

        constructor(private postService: FF1.Services.PostService,
            private replyService: FF1.Services.ReplyService) {
            this.getAllPosts();
            this.getAllReplies();
        }

        getAllPosts() {
            this.posts = this.postService.getAllPost();
        }

        getAllReplies() {
            this.replies = this.replyService.getAllReplies();
        }

        deletePost(id) {
            this.post = this.postService.deletePost(id);
        }

        deleteReply(id) {
            this.reply = this.replyService.deleteReply(id);
        }

    }



}