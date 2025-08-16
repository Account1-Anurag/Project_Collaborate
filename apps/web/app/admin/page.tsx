export default function AdminPage() {
	return (
		<div className="container-default py-10 space-y-6">
			<h1 className="text-2xl font-semibold">Admin Dashboard</h1>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div className="card p-4">
					<p className="text-xs text-gray-500">Active Projects</p>
					<p className="text-2xl font-bold">3</p>
				</div>
				<div className="card p-4">
					<p className="text-xs text-gray-500">Join Requests (24h)</p>
					<p className="text-2xl font-bold">12</p>
				</div>
				<div className="card p-4">
					<p className="text-xs text-gray-500">Reported Issues</p>
					<p className="text-2xl font-bold">0</p>
				</div>
			</div>
			<div className="card p-4">
				<p className="font-medium">Recent Join Requests</p>
				<div className="mt-3 overflow-x-auto">
					<table className="min-w-full text-sm">
						<thead>
							<tr className="text-left text-gray-600">
								<th className="py-2 pr-4">User</th>
								<th className="py-2 pr-4">Project</th>
								<th className="py-2 pr-4">Status</th>
								<th className="py-2">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="py-2 pr-4">jane</td>
								<td className="py-2 pr-4">Open Source Dashboard</td>
								<td className="py-2 pr-4">Pending</td>
								<td className="py-2"><button className="btn-primary">Approve</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}