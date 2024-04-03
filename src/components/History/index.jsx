import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const { history } = useSelector((s) => s);
  return (
    <div id="history">
      <div className="container">
        <h1>история заказов:</h1>
        <div className="history">
            {/* {
                history.map ((el) => (
                    <h1 className="history--itrm"> {el.title} - {el.hours}: {el.minutes}:{el.seconds}</h1>
                ))
            } */}
            <table>
    <thead>
      <tr>
        <th>Addres</th>
        <th>Date</th>
        <th>Hours</th>
      
      </tr>
    </thead>
    <tbody>
    {
        history.map((el) => (
            <tr>
            <td>{el.title}</td>
            <td>{el.date}</td>
            <td>{el.hours}: {el.minutes}:{el.seconds}</td>
            
          </tr>
        ))
    }
     
    </tbody>
  </table>

        </div>
      </div>
    </div>
  );
};

export default History;
