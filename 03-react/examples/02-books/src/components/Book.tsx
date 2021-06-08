import * as React from "react";

export interface BookProps {
	title: string;
	color: string;
}

export default function Book(props: BookProps) {
	return (
		<article style={{ backgroundColor: props.color }}>
			<h2>{props.title}</h2>
		</article>
	);
}
