import React from "react";
import "./InfoCard.css";

import Description from "./../Description/Description";
import Facts from "./../Facts/Facts";

import Website from "./../../images/www.png";
import Github from "./../../images/github.png";
import Reddit from "./../../images/reddit.png";

function InfoCard({ data }) {
  return (
    <div className="Info-container">
      <h4 className="Info-container-title">Info Card</h4>
      <div className="Info-container-body">
        <div className="Top-half">
          <Description text={data?.description?.en} />
          <div className="Links">
            <a
              href={data?.links?.homepage[0]}
              className="Links-website Links-link"
            >
              <small>Website</small>
              <img src={Website} alt="icon" />
            </a>
            <a href={data?.links?.subreddit_url}>
              <img
                className="Links-reddit Links-link"
                src={Reddit}
                alt="icon"
              />
            </a>
            <a href={data?.links?.repos_url?.github[0]}>
              <img
                className="Links-github Links-link"
                src={Github}
                alt="icon"
              />
            </a>
          </div>
        </div>
        <Facts data={data} />
      </div>
    </div>
  );
}

export default InfoCard;
