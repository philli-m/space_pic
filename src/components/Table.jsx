import React from "react";

const Table = (props) => {
  return (
    <section>
      <h1>{props.header}</h1>
      <table>
        <caption>{props.caption}</caption>
        <thead>
          <tr>
            <th scope="col">{props.head1}</th>
            <th scope="col">{props.head2}</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, index) => (
            <tr key={index}>
              <td>{row.fah}</td>
              <td>{row.cel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
