var FF1;
(function (FF1) {
    var Services;
    (function (Services) {
        var ReplyService = (function () {
            function ReplyService($resource) {
                this.$resource = $resource;
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
            ReplyService.prototype.getAllReplies = function () {
                return this.replyResource.query();
            };
            ReplyService.prototype.getReply = function (id) {
                return this.replyResource.get({ id: id });
            };
            ReplyService.prototype.getPostReplies = function (id) {
                return this.replyResource.GetPostReplies({ id: id });
            };
            ReplyService.prototype.getRepliesToReply = function (id) {
                return this.replyResource.getRepliesToReply({ id: id });
            };
            ReplyService.prototype.saveReply = function (data) {
                return this.replyResource.save(data).$promise;
            };
            ReplyService.prototype.updateReply = function (data) {
                return this.replyResource.update(data).$promise;
            };
            ReplyService.prototype.deleteReply = function (id) {
                return this.replyResource.delete({ id: id });
            };
            return ReplyService;
        }());
        Services.ReplyService = ReplyService;
        angular.module('FF1').service('replyService', ReplyService);
    })(Services = FF1.Services || (FF1.Services = {}));
})(FF1 || (FF1 = {}));
