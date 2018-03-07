namespace FF1.Services {

    export class AccountService {
        public accountResource;

        constructor(private $http: ng.IHttpService,
            private $window: ng.IWindowService,
            private $q: ng.IQService,
            private $resource: ng.resource.IResourceService) {
            this.accountResource = $resource('/api/account/:id', null);
            this.checkAuthentication();
        }

        private storeUserInfo(userInfo) {
            // store user name
            this.$window.sessionStorage.setItem('userName', userInfo.userName);

            // store claims
            this.$window.sessionStorage.setItem('claims', JSON.stringify(userInfo.claims));
        }

        public getUserName() {
            return this.$window.sessionStorage.getItem('userName');
        }


        public getClaim(type) {
            var allClaims = JSON.parse(this.$window.sessionStorage.getItem('claims'));
            return allClaims ? allClaims[type] : null;
        }


        public checkAuthentication() {
            this.$http.get('/api/account/checkAuthentication')
                .then((result) => {
                    if (result.data) {
                        this.storeUserInfo(result.data);
                    }
                });
        }

        // extract access token from response
        parseOAuthResponse(token) {
            let results = {};
            token.split('&').forEach((item) => {
                let pair = item.split('=');
                results[pair[0]] = pair[1];
            });
            return results;
        }

        public login(loginUser) {

            return this.$http.post('/api/account/login', loginUser).then((result) => {
                this.storeUserInfo(result.data);
                this.$q.when(result.data);
            }).catch((result) => {
                var message = this.flattenValidation(result.data);
                this.$q.reject(message);
            });
        }

        private flattenValidation(modelState) {
            let messages = [];
            for (let prop in modelState) {
                messages = messages.concat(modelState[prop]);
            }
            return messages;
        }

        public logout() {
            // clear all of session storage (including claims)
            this.$window.sessionStorage.clear();

            // logout on the server
            return this.$http.post('/api/account/logout', null);
        }

        public isLoggedIn() {
            return this.$window.sessionStorage.getItem('userName');
        }

        public register(userLogin) {
            return this.$http.post('/api/account/register', userLogin)
                .then((result) => {
                    this.storeUserInfo(result.data);
                    this.$q.when(result.data);
                }).catch((result) => {
                    var message = this.flattenValidation(result.data);
                    this.$q.reject(message);
                });
        }


    }

    angular.module('FF1').service('accountService', AccountService);

}