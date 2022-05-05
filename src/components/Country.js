import React from "react";

function Country(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        borderRadius: props.borderRadius,
        width: props.width,
      }}
    >
      <div>
        <img
          src="https://ak.picdn.net/shutterstock/videos/1023436186/thumb/1.jpg"
          style={{ width: props.width }}
          alt="placeholder"
        />
      </div>
      <div style={{ padding: props.padding }}>
        <h3>Real Madrid</h3>
        <div>
          <h4>
            Population <small>200,000,000</small>
          </h4>
          <h4>
            Region <small>Europe</small>
          </h4>
          <h4>
            Capital <small>Santiago Bernabéu</small>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Country;
