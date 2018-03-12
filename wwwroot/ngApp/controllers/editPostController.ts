namespace FF1.Controllers {

    export class EditPostController {
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

        updatePost() {
            
            this.postService.updatePost(this.post);
                this.$location.path('/');
            

        }
        cancel() {
            this.$location.path('/');
        }
    }

}