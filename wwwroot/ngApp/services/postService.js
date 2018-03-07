var FF1;
(function (FF1) {
    var Services;
    (function (Services) {
        var PostService = (function () {
            function PostService($resource) {
                this.$resource = $resource;
                this.postresource = $resource('/api/post/:id', null, {
                    update: {
                        method: 'PUT',
                        url: '/api/post/put'
                    },
                    getUserPosts: {
                        method: 'GET',
                        url: '/api/post/getuserposts',
                        isArray: true
                    }
                });
            }
            PostService.prototype.getAllPost = function () {
                return this.postresource.query();
            };
            PostService.prototype.getPost = function (id) {
                return this.postresource.get({ id: id });
            };
            PostService.prototype.getUserPosts = function () {
                debugger;
                return this.postresource.getUserPosts();
            };
            PostService.prototype.savePost = function (data) {
                return this.postresource.save(data).$promise;
            };
            PostService.prototype.updatePost = function (data) {
                this.postresource.update(data).$promise;
            };
            PostService.prototype.deletePost = function (id) {
                return this.postresource.delete({ id: id });
            };
            return PostService;
        }());
        Services.PostService = PostService;
        angular.module('FF1').service('postService', PostService);
    })(Services = FF1.Services || (FF1.Services = {}));
})(FF1 || (FF1 = {}));
