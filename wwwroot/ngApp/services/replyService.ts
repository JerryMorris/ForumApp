namespace FF1.Services {

    export class ReplyService {
        public replyResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.replyResource = $resource('/api/reply/:id', null, {
                getRepliesToReply: {
                    method: 'GET',
                    url: '/api/reply/getrepliestoreply',
                    isArray: true
                },
                GetPostReplies: {
                    method: 'GET',
                    url: '/api/reply/getpostreplies',
                    isArray: true
                }
            });

        }

        getAllReplies() {
            return this.replyResource.query();
        }

        getReply(id) {
            return this.replyResource.get({ id });
        }

        getPostReplies(id) {
            
            return this.replyResource.GetPostReplies({ id });
        }

        getRepliesToReply(id) {
            
            return this.replyResource.getRepliesToReply({ id });
        }

        saveReply(data) {
            return this.replyResource.save(data).$promise;
        }

        updateReply(data) {
            return this.replyResource.update(data).$promise;
        }

        deleteReply(id) {
            return this.replyResource.delete({ id });
        }

    }
    angular.module('FF1').service('replyService', ReplyService);
}