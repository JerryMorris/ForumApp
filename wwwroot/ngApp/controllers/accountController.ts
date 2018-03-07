namespace FF1.Controllers {

    export class AccountController {
        public externalLogins;

        constructor(private accountService: FF1.Services.AccountService, private $location: ng.ILocationService) {
            this.getUserName();

            this.isLoggedIn();

        }


        public getUserName() {

            return this.accountService.getUserName();
        }

        public getClaim(type) {
            return this.accountService.getClaim(type);
        }

        public isLoggedIn() {
            return this.accountService.isLoggedIn();
        }

        public logout() {
            this.accountService.logout();
            this.$location.path('/');
        }

    }

    angular.module('FF1').controller('AccountController', AccountController);

    export class LoginController {
        public loginUser;
        public validationMessages;

        constructor(private accountService: FF1.Services.AccountService,
            private $location: ng.ILocationService) { }

        public login() {
            debugger;
            this.accountService.login(this.loginUser).then(() => {
                this.$location.path('/');
            }).catch((results) => {
                this.validationMessages = results;
            });
        }


    }

    export class RegisterController {
        public registerUser;
        public validationMessages;
        constructor(private accountService: FF1.Services.AccountService,
            private $location: ng.ILocationService) { }

        public register() {
            debugger;
            this.accountService.register(this.registerUser).then(() => {
                this.$location.path('/');
            }).catch((results) => {
                this.validationMessages = results;
            });
        }

    } 

}