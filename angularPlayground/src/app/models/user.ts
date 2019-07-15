export class User {

    user_name: string;
    user_password: string;

    constructor(name?: string, password?: string) {
        this.user_name = name;
        this.user_password = password;
    }
}
