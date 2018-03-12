var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var DeleteTopicController = (function () {
            function DeleteTopicController(topicService, $routeParams, $location) {
                this.topicService = topicService;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.topicId = $routeParams['id'];
                this.getTopic();
            }
            DeleteTopicController.prototype.getTopic = function () {
                this.topic = this.topicService.getTopic(this.topicId);
            };
            DeleteTopicController.prototype.deleteTopic = function () {
                var _this = this;
                this.topicService.deleteTopic(this.topicId).then(function () {
                    _this.$location.path('/');
                });
            };
            return DeleteTopicController;
        }());
        Controllers.DeleteTopicController = DeleteTopicController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
