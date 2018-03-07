var FF1;
(function (FF1) {
    var Controllers;
    (function (Controllers) {
        var AddTopicController = (function () {
            function AddTopicController(topicService, $location) {
                this.topicService = topicService;
                this.$location = $location;
            }
            AddTopicController.prototype.addTopic = function () {
                var _this = this;
                debugger;
                this.topic.id = 0;
                this.topicService.saveTopic(this.topic).then(function () {
                    _this.$location.path('/admin');
                });
            };
            AddTopicController.prototype.cancel = function () {
                this.$location.path('/admin');
            };
            return AddTopicController;
        }());
        Controllers.AddTopicController = AddTopicController;
    })(Controllers = FF1.Controllers || (FF1.Controllers = {}));
})(FF1 || (FF1 = {}));
