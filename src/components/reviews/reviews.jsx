import React from "react";
import "./reviews.css";
export function UserReviews() {
  return (
    <div className="user-reviews">
      <h1>User Reviews</h1>

      <div className="row p-2">

        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="review-card">
            <div className="d-flex justify-content-between">
              <h6 className="name">Bella</h6>
              <small>★★★★★</small>
            </div>
            <p>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.</p>
          </div>
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="review-card">
            <div className="d-flex justify-content-between">
              <h6 className="name">Epoque</h6>
              <small>★★★★★</small>
            </div>
            <p>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.</p>
          </div>
        </div>

        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="review-card">
            <div className="d-flex justify-content-between">
              <h6 className="name">Tony</h6>
              <small>★★★★★</small>
            </div>
            <p>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserReviews;