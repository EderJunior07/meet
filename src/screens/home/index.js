import React, { useState, useEffect } from "react";
import "./style.css";
import CardMenu from "../../components/cardMenu";
import CardBox from "../../components/cardBox";

const HomeScreen = props => {
  const [cardAll, setCardAll] = useState([]);

  const ENDPOINT = "https://meetingvmix.herokuapp.com/meeting";

  const getApi = async () => {
    let response = await fetch(ENDPOINT);
    //{ method: "POST", body: "id:1" });
    let data = await response.json();
    
    setCardAll(data);
  };

  useEffect(() => {
    getApi();
    console.log(getApi);
  }, []);
 

  return (
    <div id="HomeScreen">
      <CardMenu user="Natan" />
      {cardAll.map((item, idx) => {
        return (
          <CardBox
            title={item.title}
            description={item.description}
            date={item.date}
            host={" " + item.host}
            startTime={item.startTime}
            endTime={item.endTime}
            room={item.room}
          />
        );
      })}
    </div>
  );
};

export default HomeScreen;
