import React, { useState, useEffect } from "react";
import axios from "axios";

function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/features")
      .then((res) => setFeatures(res.data));
  }, []);

  return (
    <section className="features-tiles section">
      <div className="container">
        <div className="features-tiles-inner section-inner">
          <div className="tiles-wrap">
            {features.map((item) => {
              return (
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div
                        className="
                                              features-tiles-item-image
                                              mb-16
                                          "
                      >
                        <img
                          src="images/feature-tile-icon-01.svg"
                          alt="Feature tile icon 01"
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">{item.title}</h4>
                      <p className="m-0 text-sm">{item.subTitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
