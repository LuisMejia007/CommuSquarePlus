export class Wall {
    public wall_name: string;
    public wall_description: string;
    public wall_id;


    constructor(wallName?: string, wallDescription?: string) {
        this.wall_name = wallName;
        this.wall_description = wallDescription;
    }
}
