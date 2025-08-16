"use client";

import { useState } from 'react';

export default function PostProjectPage() {
	const [saving, setSaving] = useState(false);

	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSaving(true);
		setTimeout(() => {
			alert('Project saved (mock).');
			setSaving(false);
		}, 800);
	}

	return (
		<div className="container-default py-10">
			<h1 className="text-2xl font-semibold">Post a Project</h1>
			<form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-5 max-w-2xl">
				<label className="grid gap-2">
					<span className="text-sm font-medium">Project Title</span>
					<input required className="rounded border border-gray-300 px-3 py-2" />
				</label>
				<label className="grid gap-2">
					<span className="text-sm font-medium">Short Description</span>
					<textarea required rows={3} className="rounded border border-gray-300 px-3 py-2" />
				</label>
				<label className="grid gap-2">
					<span className="text-sm font-medium">Tech Stack</span>
					<input placeholder="e.g. Next.js, Tailwind, TS" className="rounded border border-gray-300 px-3 py-2" />
				</label>
				<label className="grid gap-2">
					<span className="text-sm font-medium">Skills Needed</span>
					<input placeholder="Frontend, UX, API" className="rounded border border-gray-300 px-3 py-2" />
				</label>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
					<label className="grid gap-2">
						<span className="text-sm font-medium">Duration</span>
						<select className="rounded border border-gray-300 px-3 py-2">
							<option>2 weeks</option>
							<option>1 month</option>
							<option>2 months</option>
						</select>
					</label>
					<label className="grid gap-2">
						<span className="text-sm font-medium">Expected Team Size</span>
						<input type="number" min={1} max={12} className="rounded border border-gray-300 px-3 py-2" />
					</label>
				</div>
				<label className="grid gap-2">
					<span className="text-sm font-medium">GitHub / Resources</span>
					<input placeholder="https://github.com/..." className="rounded border border-gray-300 px-3 py-2" />
				</label>
				<div className="flex items-center gap-3">
					<button type="button" className="btn-accent">Save as Draft</button>
					<button type="submit" className="btn-primary" disabled={saving}>{saving ? 'Publishing…' : 'Publish Project'}</button>
				</div>
			</form>
		</div>
	);
}