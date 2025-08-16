"use client";

import { useState } from 'react';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="container-default py-10 max-w-md">
			<h1 className="text-2xl font-semibold">Login / Signup</h1>
			<div className="mt-6 card p-5 space-y-3">
				<button className="btn-primary w-full">Continue with Google</button>
				<button className="btn-accent w-full">Continue with GitHub</button>
			</div>
			<div className="mt-6 card p-5">
				<form className="grid gap-3">
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						className="rounded border border-gray-300 px-3 py-2"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						className="rounded border border-gray-300 px-3 py-2"
					/>
					<button className="btn-primary">Continue</button>
				</form>
			</div>
		</div>
	);
}