export class Post {

    post_title: string;
    post_content: string;
    post_date: string;
    post_wall_id: number;
    post_id: number;

    constructor(postTitle?: string, postContent?: string, postDate?: string, postWallId?: number) {
        this.post_title = postTitle;
        this.post_content = postContent;
        this.post_date = postDate;
        this.post_wall_id = postWallId;
    }
}
