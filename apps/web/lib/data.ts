export type Project = {
	id: string;
	title: string;
	description: string;
	tech: string[];
	skillsNeeded: string[];
	creator: {
		name: string;
		username: string;
	};
	duration: string;
	experience: 'Beginner' | 'Intermediate' | 'Advanced';
	expectedTeamSize: number;
	links?: {
		github?: string;
		resources?: string[];
	};
};

export type UserProfile = {
	username: string;
	name: string;
	bio?: string;
	photoUrl?: string;
	skills: string[];
	projectsCreated: string[];
	projectsJoined: string[];
	badges: string[];
};

export const PROJECTS: Project[] = [
	{
		id: '1',
		title: 'Open Source Dashboard',
		description: 'A dashboard app with analytics and charts built in Next.js.',
		tech: ['Next.js', 'Tailwind', 'TypeScript'],
		skillsNeeded: ['Frontend', 'Charts', 'UX'],
		creator: { name: 'Alex Johnson', username: 'alexj' },
		duration: '1 month',
		experience: 'Intermediate',
		expectedTeamSize: 4,
		links: { github: 'https://github.com/example/dashboard' },
	},
	{
		id: '2',
		title: 'AI Study Buddy',
		description: 'Build an AI that quizzes you using embeddings.',
		tech: ['Python', 'FastAPI', 'OpenAI'],
		skillsNeeded: ['Backend', 'ML'],
		creator: { name: 'Priya Singh', username: 'priya' },
		duration: '2 weeks',
		experience: 'Beginner',
		expectedTeamSize: 3,
	},
	{
		id: '3',
		title: 'Mobile Habit Tracker',
		description: 'Cross-platform habit tracker with streaks and reminders.',
		tech: ['React Native', 'Expo'],
		skillsNeeded: ['Mobile', 'UX'],
		creator: { name: 'Sam Lee', username: 'samlee' },
		duration: '1 month',
		experience: 'Advanced',
		expectedTeamSize: 5,
	},
];

export const USERS: UserProfile[] = [
	{
		username: 'alexj',
		name: 'Alex Johnson',
		bio: 'Frontend engineer who loves design systems.',
		photoUrl: '',
		skills: ['Next.js', 'Tailwind', 'TypeScript'],
		projectsCreated: ['1'],
		projectsJoined: ['2'],
		badges: ['Project Leader', 'Top Collaborator'],
	},
	{
		username: 'priya',
		name: 'Priya Singh',
		bio: 'ML enthusiast and backend developer.',
		photoUrl: '',
		skills: ['Python', 'FastAPI', 'OpenAI'],
		projectsCreated: ['2'],
		projectsJoined: ['1', '3'],
		badges: ['Completed 3 Projects'],
	},
];

export function getProjects(query?: {
	search?: string;
	tech?: string[];
	duration?: string;
	experience?: Array<Project['experience']>;
}): Project[] {
	let results = PROJECTS;
	if (query?.search) {
		const s = query.search.toLowerCase();
		results = results.filter(p =>
			p.title.toLowerCase().includes(s) ||
			p.description.toLowerCase().includes(s)
		);
	}
	if (query?.tech && query.tech.length) {
		results = results.filter(p => query.tech!.some(t => p.tech.includes(t)));
	}
	if (query?.duration) {
		results = results.filter(p => p.duration === query.duration);
	}
	if (query?.experience && query.experience.length) {
		results = results.filter(p => query.experience!.includes(p.experience));
	}
	return results;
}

export function getProjectById(id: string): Project | undefined {
	return PROJECTS.find(p => p.id === id);
}

export function getUserByUsername(username: string): UserProfile | undefined {
	return USERS.find(u => u.username === username);
}