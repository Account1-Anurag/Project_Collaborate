import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Skill Exchange Platform',
	description: 'Build real projects. Collaborate. Learn.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="border-b">
					<div className="container-default flex h-16 items-center justify-between">
						<div className="flex items-center gap-3">
							<Link href="/" className="text-lg font-bold text-primary">SkillX</Link>
						</div>
						<nav className="flex items-center gap-6 text-sm">
							<Link href="/">Home</Link>
							<Link href="/browse">Browse Projects</Link>
							<Link href="/post">Post a Project</Link>
							<Link href="/login" className="btn-primary">Login / Signup</Link>
						</nav>
					</div>
				</header>
				<main className="min-h-[calc(100vh-8rem)]">{children}</main>
				<footer className="border-t">
					<div className="container-default py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600">
						<div>
							<p className="font-semibold text-gray-900">About</p>
							<p className="mt-2">A platform to exchange skills and collaborate on real projects.</p>
						</div>
						<div>
							<p className="font-semibold text-gray-900">Contact</p>
							<p className="mt-2">support@skillx.app</p>
						</div>
						<div>
							<p className="font-semibold text-gray-900">Legal</p>
							<div className="mt-2 flex gap-4">
								<Link href="#">Terms</Link>
								<Link href="#">Privacy</Link>
							</div>
							<div className="mt-2 flex gap-3">
								<a href="#" aria-label="Twitter">Twitter</a>
								<a href="#" aria-label="GitHub">GitHub</a>
							</div>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}