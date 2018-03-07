namespace FF1.Services {


    export class PostService {
        public postresource;

        constructor(private $resource: ng.resource.IResourceService) {
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

        getAllPost() {
            return this.postresource.query();
        }

        getPost(id) {
            return this.postresource.get({ id });
        }

        getUserPosts() {
            debugger;
            return this.postresource.getUserPosts();
        }

        savePost(data) {
            return this.postresource.save(data).$promise;
        }

        updatePost(data) {
            this.postresource.update(data).$promise;
        }

        deletePost(id) {
            return this.postresource.delete({ id });
        }



    }
    angular.module('FF1').service('postService', PostService);
}