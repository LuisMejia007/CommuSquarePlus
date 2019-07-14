export class Post {

    postTitle: string;
    postContent: string;
    postDate: string;
    postWallId: number;
    postId: number;

    constructor(postTitle?: string, postContent?: string, postDate?: string, postWallId?: number) {
        this.postTitle = postTitle;
        this.postContent = postContent;
        this.postDate = postDate;
        this.postWallId = postWallId;
    }
}
