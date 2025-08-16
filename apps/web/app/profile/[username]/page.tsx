import { getUserByUsername, getProjectById } from '@/lib/data';
import Link from 'next/link';

export default function ProfilePage({ params }: { params: { username: string } }) {
	const user = getUserByUsername(params.username);
	if (!user) return <div className="container-default py-10">User not found.</div>;

	return (
		<div className="container-default py-10">
			<div className="flex items-start gap-6">
				<div className="w-20 h-20 rounded-full bg-gray-200" />
				<div>
					<h1 className="text-2xl font-bold">{user.name}</h1>
					<p className="text-sm text-gray-600">@{user.username}</p>
					<p className="mt-2 text-gray-700 max-w-2xl">{user.bio}</p>
					<div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
						{user.skills.map(s => (
							<span key={s} className="px-2 py-1 bg-gray-100 rounded">{s}</span>
						))}
					</div>
				</div>
			</div>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="md:col-span-2 space-y-6">
					<div className="card p-4">
						<p className="font-medium">Projects Created</p>
						<ul className="mt-3 space-y-2 text-sm">
							{user.projectsCreated.map(id => {
								const p = getProjectById(id);
								if (!p) return null;
								return (
									<li key={id}>
										<Link href={`/project/${id}`} className="underline">{p.title}</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="card p-4">
						<p className="font-medium">Projects Joined</p>
						<ul className="mt-3 space-y-2 text-sm">
							{user.projectsJoined.map(id => {
								const p = getProjectById(id);
								if (!p) return null;
								return (
									<li key={id}>
										<Link href={`/project/${id}`} className="underline">{p.title}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="space-y-4">
					<div className="card p-4">
						<p className="font-medium">Badges</p>
						<div className="mt-3 flex flex-wrap gap-2 text-xs">
							{user.badges.map(b => (
								<span key={b} className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">{b}</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}