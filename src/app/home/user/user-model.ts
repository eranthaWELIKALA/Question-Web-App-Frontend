export class UserModel {
    constructor(
        public role: string,
        public adminFeatures: boolean,
        public username: string,
        public firstname: string,
        public lastname: string,
        public email: string,
        public mobile: string,
        public units: string,
        public password: string,
        public img_url: string,
        public metadata: string
    ){}
}
