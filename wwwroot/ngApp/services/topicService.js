var FF1;
(function (FF1) {
    var Services;
    (function (Services) {
        var TopicService = (function () {
            function TopicService($resource) {
                this.$resource = $resource;
                this.topicResource = $resource('/api/topic/:id', null);
            }
            TopicService.prototype.getAllTopics = function () {
                return this.topicResource.query();
            };
            TopicService.prototype.getTopic = function (id) {
                return this.topicResource.get({ id: id });
            };
            TopicService.prototype.saveTopic = function (data) {
                return this.topicResource.save(data).$promise;
            };
            TopicService.prototype.updateTopic = function (data) {
                return this.topicResource.put(data).$promise;
            };
            TopicService.prototype.deleteTopic = function (id) {
                return this.topicResource.delete({ id: id });
            };
            return TopicService;
        }());
        Services.TopicService = TopicService;
        angular.module('FF1').service('topicService', TopicService);
    })(Services = FF1.Services || (FF1.Services = {}));
})(FF1 || (FF1 = {}));
