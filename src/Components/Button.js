import React from "react";

const Button = ({ padding, text, fun, color }) => {
  console.log(text,color)
	return (
		<div className='button-all'>
			<div
				onClick={fun}
				style={{
					color: `${color ? "red" : "black"}`,
					padding: `${padding}px`,
					margin: "10px",
					cursor: "pointer",
				}}
			>
				{text}
			</div>
		</div>
	);
};

export default Button;
