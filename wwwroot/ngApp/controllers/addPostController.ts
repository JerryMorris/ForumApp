namespace FF1.Controllers {

    export class AddPostController {
        public post;
        public topics;
        public topicId;

        constructor(private postService: FF1.Services.PostService,
            private topicService: FF1.Services.TopicService,
            private $location: ng.ILocationService) {
            this.getTopics();
        }

        getTopics() {
            this.topics = this.topicService.getAllTopics();
        }

        savePost() {
            debugger;
            this.post.topicId = this.topicId.id;
            this.postService.savePost(this.post).then(() => {
                this.$location.path('/');
            });
        }

        cancel() {
            this.$location.path('/')
        }

    }

}