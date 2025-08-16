import Link from 'next/link';
import { getProjectById } from '@/lib/data';

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
	const project = getProjectById(params.id);
	if (!project) return <div className="container-default py-10">Project not found.</div>;

	return (
		<div className="container-default py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
			<div className="lg:col-span-2">
				<h1 className="text-3xl font-bold">{project.title}</h1>
				<p className="mt-3 text-gray-700">{project.description}</p>
				<div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-700">
					{project.tech.map(t => (
						<span key={t} className="px-2 py-1 bg-gray-100 rounded">{t}</span>
					))}
				</div>
				<div className="mt-6">
					<p className="text-sm text-gray-600">Skills Needed:</p>
					<div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-700">
						{project.skillsNeeded.map(s => (
							<span key={s} className="px-2 py-1 bg-gray-100 rounded">{s}</span>
						))}
					</div>
				</div>
				<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
					<div className="card p-4">
						<p className="text-xs text-gray-500">Creator</p>
						<Link href={`/profile/${project.creator.username}`} className="font-medium underline">{project.creator.name}</Link>
					</div>
					<div className="card p-4">
						<p className="text-xs text-gray-500">Duration</p>
						<p className="font-medium">{project.duration}</p>
					</div>
					<div className="card p-4">
						<p className="text-xs text-gray-500">Experience</p>
						<p className="font-medium">{project.experience}</p>
					</div>
				</div>
				<div className="mt-6">
					<p className="text-sm text-gray-600">Team Members</p>
					<ul className="mt-2 list-disc list-inside text-sm text-gray-700">
						<li>{project.creator.name} (Lead)</li>
						<li>Jane Doe (Contributor)</li>
					</ul>
					<div className="mt-4 h-2 bg-gray-200 rounded">
						<div className="h-2 bg-primary rounded" style={{ width: '30%' }} />
					</div>
				</div>
			</div>
			<aside className="lg:col-span-1 space-y-4">
				<div className="card p-4">
					<button className="btn-primary w-full">Request to Join</button>
				</div>
				<div className="card p-4">
					<p className="font-medium">Chat / Discussion</p>
					<p className="mt-2 text-sm text-gray-600">For MVP, use external chat.</p>
					<div className="mt-3 flex gap-2">
						<a className="btn-accent" href="https://discord.com" target="_blank">Discord</a>
						<a className="btn-primary" href="https://wa.me/" target="_blank">WhatsApp</a>
					</div>
				</div>
			</aside>
		</div>
	);
}