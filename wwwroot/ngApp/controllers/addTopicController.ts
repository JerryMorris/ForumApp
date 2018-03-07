namespace FF1.Controllers {

    export class AddTopicController {
        public topic;

        constructor(private topicService: FF1.Services.TopicService,
            private $location: ng.ILocationService) { }

        addTopic() {
            debugger;
            this.topic.id = 0;
            this.topicService.saveTopic(this.topic).then(() => {
                this.$location.path('/admin');
            });
        }

        cancel() {
            this.$location.path('/admin');
        }

    }

}