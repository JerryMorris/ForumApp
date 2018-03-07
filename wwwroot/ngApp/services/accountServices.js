var FF1;
(function (FF1) {
    var Services;
    (function (Services) {
        var AccountService = (function () {
            function AccountService($http, $window, $q, $resource) {
                this.$http = $http;
                this.$window = $window;
                this.$q = $q;
                this.$resource = $resource;
                this.accountResource = $resource('/api/account/:id', null);
                this.checkAuthentication();
            }
            AccountService.prototype.storeUserInfo = function (userInfo) {
                // store user name
                this.$window.sessionStorage.setItem('userName', userInfo.userName);
                // store claims
                this.$window.sessionStorage.setItem('claims', JSON.stringify(userInfo.claims));
            };
            AccountService.prototype.getUserName = function () {
                return this.$window.sessionStorage.getItem('userName');
            };
            AccountService.prototype.getClaim = function (type) {
                var allClaims = JSON.parse(this.$window.sessionStorage.getItem('claims'));
                return allClaims ? allClaims[type] : null;
            };
            AccountService.prototype.checkAuthentication = function () {
                var _this = this;
                this.$http.get('/api/account/checkAuthentication')
                    .then(function (result) {
                    if (result.data) {
                        _this.storeUserInfo(result.data);
                    }
                });
            };
            // extract access token from response
            AccountService.prototype.parseOAuthResponse = function (token) {
                var results = {};
                token.split('&').forEach(function (item) {
                    var pair = item.split('=');
                    results[pair[0]] = pair[1];
                });
                return results;
            };
            AccountService.prototype.login = function (loginUser) {
                var _this = this;
                return this.$http.post('/api/account/login', loginUser).then(function (result) {
                    _this.storeUserInfo(result.data);
                    _this.$q.when(result.data);
                }).catch(function (result) {
                    var message = _this.flattenValidation(result.data);
                    _this.$q.reject(message);
                });
            };
            AccountService.prototype.flattenValidation = function (modelState) {
                var messages = [];
                for (var prop in modelState) {
                    messages = messages.concat(modelState[prop]);
                }
                return messages;
            };
            AccountService.prototype.logout = function () {
                // clear all of session storage (including claims)
                this.$window.sessionStorage.clear();
                // logout on the server
                return this.$http.post('/api/account/logout', null);
            };
            AccountService.prototype.isLoggedIn = function () {
                return this.$window.sessionStorage.getItem('userName');
            };
            AccountService.prototype.register = function (userLogin) {
                var _this = this;
                return this.$http.post('/api/account/register', userLogin)
                    .then(function (result) {
                    _this.storeUserInfo(result.data);
                    _this.$q.when(result.data);
                }).catch(function (result) {
                    var message = _this.flattenValidation(result.data);
                    _this.$q.reject(message);
                });
            };
            return AccountService;
        }());
        Services.AccountService = AccountService;
        angular.module('FF1').service('accountService', AccountService);
    })(Services = FF1.Services || (FF1.Services = {}));
})(FF1 || (FF1 = {}));
