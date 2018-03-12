var FF1;
(function (FF1) {
    var Services;
    (function (Services) {
        var PostService = (function () {
            function PostService($resource) {
                this.$resource = $resource;
                this.postResource = $resource('/api/post/:id', null, {
                    update: {
                        method: 'PUT',
                        url: '/api/post/put'
                    },
                    getUserPosts: {
                        method: 'GET',
                        url: '/api/post/getuserposts',
                        isArray: true
                    },
                    getPostByTopicId: {
                        method: 'GET',
                        url: '/api/post/getpostbytopicid',
                        isArray: true
                    },
                    getAllActivePosts: {
                        method: 'GET',
                        url: '/api/post/getallactiveposts',
                        isArray: true
                    },
                    searchPost: {
                        method: 'GET',
                        url: '/api/post/searchpost',
                        isArray: true
                    }
                });
            }
            PostService.prototype.getAllPost = function () {
                return this.postResource.query();
            };
            PostService.prototype.getPost = function (id) {
                return this.postResource.get({ id: id });
            };
            PostService.prototype.getUserPosts = function () {
                return this.postResource.getUserPosts();
            };
            PostService.prototype.getPostByTopicId = function (topicId) {
                return this.postResource.getPostByTopicId({ topicId: topicId });
            };
            PostService.prototype.getAllActivePosts = function () {
                return this.postResource.getAllActivePosts();
            };
            PostService.prototype.searchPost = function (userSearch) {
                debugger;
                return this.postResource.searchPost({ userSearch: userSearch });
            };
            PostService.prototype.savePost = function (data) {
                return this.postResource.save(data).$promise;
            };
            PostService.prototype.updatePost = function (data) {
                this.postResource.update(data);
            };
            PostService.prototype.deletePost = function (id) {
                return this.postResource.delete({ id: id });
            };
            return PostService;
        }());
        Services.PostService = PostService;
        angular.module('FF1').service('postService', PostService);
    })(Services = FF1.Services || (FF1.Services = {}));
})(FF1 || (FF1 = {}));
