import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { reviewAdded } from './reviewsSlice';

function ReviewInput({ restaurantId }) {
const [comment, setComment] = useState("");
const dispatch = useDispatch();
function handleChange(e) {
  setComment(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
  dispatch(reviewAdded({ comment, restaurantId }));
}
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment
        <input type="text" name="comment" value={comment} onChange={handleChange} />
      </label>
      <button type="submit">Add Review</button>
    </form>
  );
}

export default ReviewInput;
