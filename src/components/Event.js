import React, { useEffect, useState } from "react";
import axios from "axios";

function Event() {
  let [eventList, setEventList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/getEvents")
      .then((response) => {
        setEventList(response.data.payload);
      })
      .catch((error) => alert("something went wrong!!"));
  }, []);
 

  return (
    <>
      <div>
       
          <div className="container mt-3 row">
            {eventList.map((element, Index) => 
                 <div className="card m-3 p-3 col-6 " key={Index} >
                 <img src=".." className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h4 className="card-title">{element.username}</h4>
                   <h6 className="card-text">
                     Venue:{element.venue}
                     <br/>
                     Ticket Price:{element.TicketCost}
                     <br/>
                     "Hurry up!!  only {element.Tlimit} remaining"
                   </h6>
                   <a href="#" className="btn btn-primary">
                     Go somewhere
                   </a>
                 </div>
               </div>
              )}
          </div>
       
      </div>
    </>
  );
}

export default Event;
