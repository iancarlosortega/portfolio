interface Props {
	name: string;
	email: string;
	message: string;
}

export const EmailTemplate = ({ name, email, message }: Props) => {
	return (
		<div>
			<h1>{name}</h1>
			<span>{email}</span>
			<p>{message}</p>
		</div>
	);
};
