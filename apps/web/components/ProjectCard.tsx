import Link from 'next/link';
import type { Project } from '@/lib/data';

export function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="card p-5 h-full flex flex-col">
			<div className="flex-1">
				<h3 className="font-semibold">{project.title}</h3>
				<p className="mt-2 text-sm text-gray-600">{project.description}</p>
				<div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
					{project.tech.map(tech => (
						<span key={tech} className="px-2 py-1 bg-gray-100 rounded">{tech}</span>
					))}
				</div>
			</div>
			<div className="mt-4 flex items-center justify-between">
				<div className="text-xs text-gray-500">By <Link className="underline" href={`/profile/${project.creator.username}`}>{project.creator.name}</Link></div>
				<Link href={`/project/${project.id}`} className="btn-primary">Join Project</Link>
			</div>
		</div>
	);
}