namespace FF1.Controllers {

    export class SearchController {
        public topics;
        public posts;
        public post;
        public userSearch;

        constructor(private topicService: FF1.Services.TopicService,
            private postService: FF1.Services.PostService) {
            this.getTopics();
        }

        getTopics() {
            this.topics = this.topicService.getAllTopics();
        }

        getPostByTopicId(topicId) {
            debugger;
            this.posts = this.postService.getPostByTopicId(topicId.id);
        }

       

        searchPost(userSearch) {
            debugger;
            this.post = this.postService.searchPost(this.userSearch);
           
        }

    }


}