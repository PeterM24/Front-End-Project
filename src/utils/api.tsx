import axios from "axios";
import { Review } from "../interfaces/review.interface";
import { Comment } from "../interfaces/comment.interface";

const gamesAPI = axios.create({
  baseURL: "https://house-of-games-0co6.onrender.com/api",
});

export const fetchReviews = async (): Promise<Review[]> => {
  const response = await gamesAPI.get("/reviews");
  return response.data.reviews as Review[];
};

export const fetchSingleReview = async (review_id: any): Promise<Review> => {
  const response = await gamesAPI.get(`/reviews/${review_id}`);
  return response.data.review as Review;
};

export const fetchComments = async (review_id: any): Promise<Comment[]> => {
  const response = await gamesAPI.get(`/reviews/${review_id}/comments`);
  return response.data.comments as Comment[];
};
