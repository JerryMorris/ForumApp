namespace FF1.Services {


    export class PostService {
        public postResource;

        constructor(private $resource: ng.resource.IResourceService) {
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

        getAllPost() {
            return this.postResource.query();
        }

        getPost(id) {
            return this.postResource.get({ id });
        }

        getUserPosts() {
            
            return this.postResource.getUserPosts();
        }

        getPostByTopicId(topicId) {
            return this.postResource.getPostByTopicId({ topicId });
        }

        getAllActivePosts() {
            return this.postResource.getAllActivePosts();
        }

        searchPost(userSearch) {
            debugger;
            return this.postResource.searchPost({ userSearch });
        }

        savePost(data) {
            return this.postResource.save(data).$promise;
        }

        updatePost(data) {
            this.postResource.update(data);
        }

        deletePost(id) {
            return this.postResource.delete({ id });
        }



    }
    angular.module('FF1').service('postService', PostService);
}