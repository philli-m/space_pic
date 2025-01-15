import React from "react";

const TempInput = (props) => {
  return (
    <section>
      <form>
        <label>
          {props.label}
          <input
            id={props.id}
            type="number"
            onChange={props.handleInputChange}
            placeholder={props.placeholder}
          />
        </label>

        <button onClick={props.calculateTemp}>{props.btnString}</button>
      </form>
      {props.result !== null ? (
        <p>Result: <strong>{props.result}</strong></p>
      ) : (
        <p>Please enter a valid number</p>
      )}
    </section>
  );
};

export default TempInput;
