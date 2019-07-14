export class Wall {
    public wallName: string;
    public wallDescription: string;
    public wallId;


    constructor(wallName?: string, wallDescription?: string) {
        this.wallName = wallName;
        this.wallDescription = wallDescription;
    }
}
