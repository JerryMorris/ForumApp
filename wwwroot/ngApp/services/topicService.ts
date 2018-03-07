namespace FF1.Services {

    export class TopicService {
        public topicResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.topicResource = $resource('/api/topic/:id', null);
        }

        getAllTopics() {
            return this.topicResource.query();
        }

        getTopic(id) {
            return this.topicResource.get({ id });
        }

        saveTopic(data) {
            return this.topicResource.save(data).$promise;
        }

        updateTopic(data) {
            return this.topicResource.put(data).$promise;
        }

        deleteTopic(id) {
            return this.topicResource.delete({ id });
        }
    }
    angular.module('FF1').service('topicService', TopicService);
}