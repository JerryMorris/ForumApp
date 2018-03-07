namespace FF1.Controllers {

    export class HomeController {
        public posts;
        


        constructor(private postService: FF1.Services.PostService,
            private accountService: FF1.Services.AccountService,
            private $location: ng.ILocationService
        ) {

            this.getUserPosts();
        }

        getUserPosts() {
            this.posts = this.postService.getUserPosts();
        }


    }


}