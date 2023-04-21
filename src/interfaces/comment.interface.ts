export interface Comment {
  comment_id: number;
  body: string;
  review_id: number;
  author: string;
  votes: number;
  created_at: string;
}

export interface CommentToPost {
  username: string;
  body: string;
}

export type SetCommentType = {
  setCommentList: (newCommentList: Comment[]) => void;
  commentList: Comment[];
};