namespace FF1.Controllers {

    export class DeleteTopicController {
        public topic;
        public topicId;

        constructor(private topicService: FF1.Services.TopicService,
            private $routeParams: ng.route.IRouteParamsService,
            private $location: ng.ILocationService) {
            this.topicId = $routeParams['id'];
            this.getTopic();
        }


        getTopic() {
            this.topic = this.topicService.getTopic(this.topicId);
        }

        deleteTopic() {
            this.topicService.deleteTopic(this.topicId).then(() => {
                this.$location.path('/');
            });
        }
        
    }

}