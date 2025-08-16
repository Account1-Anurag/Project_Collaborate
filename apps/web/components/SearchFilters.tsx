"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export function SearchFilters() {
	const router = useRouter();
	const params = useSearchParams();

	const search = params.get('q') ?? '';
	const experience = params.getAll('exp');

	const setParam = useCallback((key: string, value: string | string[]) => {
		const query = new URLSearchParams(params.toString());
		if (Array.isArray(value)) {
			query.delete(key);
			value.forEach(v => query.append(key, v));
		} else {
			if (value) query.set(key, value); else query.delete(key);
		}
		router.push(`/browse?${query.toString()}`);
	}, [params, router]);

	const toggledExp = useCallback((lvl: string) => {
		const set = new Set(experience);
		if (set.has(lvl)) set.delete(lvl); else set.add(lvl);
		setParam('exp', Array.from(set));
	}, [experience, setParam]);

	return (
		<div className="card p-4">
			<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
				<input
					defaultValue={search}
					onChange={e => setParam('q', e.target.value)}
					placeholder="Search projects"
					className="w-full sm:max-w-sm rounded border border-gray-300 px-3 py-2"
				/>
				<div className="flex flex-wrap gap-2 text-sm">
					<button
						onClick={() => toggledExp('Beginner')}
						className={`px-3 py-1 rounded border ${experience.includes('Beginner') ? 'bg-gray-900 text-white' : 'border-gray-300'}`}
					>
						Beginner
					</button>
					<button
						onClick={() => toggledExp('Intermediate')}
						className={`px-3 py-1 rounded border ${experience.includes('Intermediate') ? 'bg-gray-900 text-white' : 'border-gray-300'}`}
					>
						Intermediate
					</button>
					<button
						onClick={() => toggledExp('Advanced')}
						className={`px-3 py-1 rounded border ${experience.includes('Advanced') ? 'bg-gray-900 text-white' : 'border-gray-300'}`}
					>
						Advanced
					</button>
				</div>
			</div>
		</div>
	);
}