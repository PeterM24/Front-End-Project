export interface Review {
  review_id: number;
  title: string;
  category: string;
  designer: string;
  owner: string;
  review_body: string;
  review_img_url: string;
  created_at: string;
  votes: number;
  comment_count: number;
}
