export class User {

    userName: string;
    userPassword: string;

    constructor(name?: string, password?: string) {
        this.userName = name;
        this.userPassword = password;
    }
}
