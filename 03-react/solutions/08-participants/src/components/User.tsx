import * as React from "react";
import { useParams } from "react-router-dom";

export default function User() {
	const params = useParams<{ username: string }>();
	return <h1>{params.username}</h1>;
}
