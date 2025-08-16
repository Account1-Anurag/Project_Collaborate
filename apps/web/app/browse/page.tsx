import { ProjectCard } from '@/components/ProjectCard';
import { getProjects } from '@/lib/data';
import { SearchFilters } from '@/components/SearchFilters';

export default function BrowsePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
	const q = typeof searchParams.q === 'string' ? searchParams.q : undefined;
	const exp = searchParams.exp ? (Array.isArray(searchParams.exp) ? searchParams.exp : [searchParams.exp]) : [];
	const projects = getProjects({ search: q, experience: exp as any });

	return (
		<div className="container-default py-10">
			<h1 className="text-2xl font-semibold">Browse Projects</h1>
			<div className="mt-4">
				<SearchFilters />
			</div>
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map(p => (
					<ProjectCard key={p.id} project={p} />
				))}
			</div>
		</div>
	);
}