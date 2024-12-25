export const Button = props => {
	return (
		<button
			type={props.type}
			className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
};
