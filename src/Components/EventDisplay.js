import React, { useEffect, useState } from "react";
import axios from "axios";
import Arrays from "./Arrays";
import "../App.css";

const EventDisplay = ({ category, subCategory, tags }) => {
  // const tagList = Arrays.tag_list;
  // const test="Career Guidance,Coding Concepts,Competitive Programming,Futuristic Tech"
  const [data, setData] = useState([]);

  // console.log(tagList[0]);
  useEffect(() => {
    let tag_list = "";
    for (let i = 0; i < tags.length; i++) {
      tag_list += tags[i];
      if (i !== tags.length - 1) tag_list += ",";
    }
    console.log(tag_list);
    axios
      .get(
        `https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${subCategory}&page=1&tag_list=${tag_list}&offset=0`
      )
      .then((res) => {
        // console.clear();
        console.log(category);
        console.log("location 3");
        setData(res.data.data.events);
        console.log(res);
      });
  }, [category, subCategory, tags]);

  return (
    <div className="card-body">
      <div className="card-main container">
        {data.map((val, i) => {
          return (
            <div
              style={{
                width: "100%",
                height: "30vw",
                borderRadius: "3%",
                boxShadow: "5px 2px 5px rgb(0,0,0,0.2)",
              }}
            >
              <img
                src={val.cover_picture}
                style={{
                  width: "100%",
                  height: "50%",
                }}
				alt="card-cover"
              />
              <div>
                <div className="card-header">{val.name}</div>
                <div className="card-info">{val.short_desc}</div>
                <button className="card-button">Register Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventDisplay;

// https://api.codingninjas.com/api/v3/events?event_category=Coding&event_sub_category=All%20Time%20Favorites&page=1&tag_list=Career%20Guidance,Coding%20Concepts,Competitive%20Programming,Futuristic%20Tech&offset=0
// https://api.codingninjas.com/api/v3/events?event_category=Coding&event_sub_category=All%20Time%20Favorites&page=1&tag_list=Career%20Guidance,Coding%20Concepts,Competitive%20Programming,Futuristic%20Tech&offset=1
