import React from "react";
import "./TripBook.scss";
import Test from "../Test";

// 測試用陣列
let testArray = [
  {
    name: "employee1",
    age: "26",
  },
  {
    name: "employee2",
    age: "29",
  },
  {
    name: "employee3",
    age: "34",
  },
];

const TripBook = () => {
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <>
      <section className="tripbook-container">
        <table className="trip-table">
          <thead>
            <tr>
              <th>姓名</th>
              <th>年齡</th>
            </tr>
          </thead>
          <tbody>
            {testArray.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Test word={"Hi"} />
      </section>
    </>
  );
};

export default TripBook;
