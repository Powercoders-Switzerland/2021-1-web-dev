import * as React from "react";

interface ProfilePageProps {
	user: string | null;
}

export function ProfilePage(props: ProfilePageProps) {
	return (
		<section>
			<h2>User profile</h2>
			{props.user === null ? (
				<p>Not connected</p>
			) : (
				<p>Hello {props.user}!</p>
			)}
		</section>
	);
}
