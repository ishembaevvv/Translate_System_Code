export const Input = props => {
	return (
		<input
			className="mt-1 p-2 w-full border rounded-md text-white"
			type={props.type}
			onChange={props.onChange}
			value={props.value}
		/>
	);
};
