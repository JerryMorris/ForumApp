var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(postService, accountService, $location) {
                this.postService = postService;
                this.accountService = accountService;
                this.$location = $location;
                this.getUserPosts();
            }
            HomeController.prototype.getUserPosts = function () {
                this.posts = this.postService.getUserPosts();
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
