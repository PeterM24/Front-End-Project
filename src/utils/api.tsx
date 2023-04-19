import axios from "axios";
import { Review } from "../interfaces/review.interface";

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
