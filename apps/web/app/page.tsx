import Link from 'next/link';

export default function HomePage() {
	return (
		<div>
			<section className="bg-gray-50">
				<div className="container-default py-16 sm:py-24">
					<div className="max-w-3xl">
						<h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Build Real Projects. Collaborate. Learn.</h1>
						<p className="mt-4 text-lg text-gray-700">Find teammates, work on real ideas, and add them to your resume.</p>
						<div className="mt-8 flex gap-4">
							<Link href="/browse" className="btn-primary">Get Started →</Link>
							<Link href="/post" className="btn-accent">Post a Project</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="container-default py-12">
				<h2 className="text-2xl font-semibold">Featured Projects</h2>
				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{[1,2,3].map((id) => (
						<div className="card p-5" key={id}>
							<h3 className="font-semibold">Open Source Dashboard</h3>
							<p className="mt-2 text-sm text-gray-600">Help build a dashboard using Next.js and Tailwind.</p>
							<div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
								<span className="px-2 py-1 bg-gray-100 rounded">Next.js</span>
								<span className="px-2 py-1 bg-gray-100 rounded">Tailwind</span>
								<span className="px-2 py-1 bg-gray-100 rounded">TypeScript</span>
							</div>
							<Link href="/project/1" className="mt-4 inline-block btn-primary">Join Project</Link>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}