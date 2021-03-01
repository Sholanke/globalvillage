import React from "react";
import "./index.scss";

export default function AboutWhoWeAre() {
  return (
    <div className="app-container about-who-we-are">
      <div className="app-wrapper about-who-we-are__grid">
        <div className="heading">
          <p className="co-green">Who we are</p>
          <p className="heading__description">
            Enim faucibus ornare tristique vestibulum. Tortor mi ut morbi
            pharetra, in.
          </p>
        </div>
        <p className="description">
          Odio eu tempus neque, placerat posuere quis vitae. Pretium tincidunt
          senectus mattis neque, venenatis id integer risus. Suscipit tellus
          proin id nulla sit vulputate ut.
        </p>
        <h2>
          "Enim faucibus ornare tristique vestibulum. Tortor mi ut morbi
          pharetra.”
        </h2>
        <div className="description">
          Enim faucibus ornare tristique vestibulum. Tortor mi ut morbi
          pharetra, in. Felis sed imperdiet vitae bibendum libero sed. Mattis
          aliquam donec enim odio enim volutpat diam consectetur. Nec ut eget a
          accumsan venenatis tellus ipsum tincidunt.
        </div>
      </div>
    </div>
  );
}
