namespace FF1.Controllers {

    export class DeletePostController {
        public post;
        public postId;

        constructor(private postService: FF1.Services.PostService,
            private $routeParams: ng.route.IRouteParamsService,
            private $location: ng.ILocationService) {
            this.postId = this.$routeParams['id'];
            this.getPost();
        }

        getPost() {

            this.post = this.postService.getPost(this.postId);
        }

        deletePost() {
            this.post.isActive = false;
            this.postService.updatePost(this.post);
            this.$location.path('/');
        }

        cancel() {
            this.$location.path('/');
        }

    }

}