import axios from "axios";
import { Review } from "../interfaces/review.interface";
import { Comment, CommentToPost } from "../interfaces/comment.interface";
import { User } from "../interfaces/user.interface";
import { Category } from "../interfaces/categories.interface";

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

export const patchVotes = async (review_id: any, num: number): Promise<number> => {
  const response = await gamesAPI.patch(`/reviews/${review_id}`, {inc_votes: num});
  return response.data.review.votes;
};

export const fetchUserByUsername = async (username: string): Promise<User> => {
  const response = await gamesAPI.get(`/users/${username}`);
  return response.data.user;
};

export const fetchAllUsers = async (): Promise<User[]> => {
  const response = await gamesAPI.get("/users");
  return response.data.users;
};

export const postComment = async (comment: CommentToPost, review_id: string | undefined) => {
  const response = await gamesAPI.post(`/reviews/${review_id}/comments`, comment);
  return response.data.comment;
}

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await gamesAPI.get('/categories');
  return response.data.categories;
}