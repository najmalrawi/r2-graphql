export class ProjectsService {

	Projects:object[] = [
		{ pk: 1, branch: 2, type: 1, name: "Project X", count: -1, created_at: "DATETIME", },
		{ pk: 2, branch: 1, type: 1, name: "Project Y", count: -1, created_at: "DATETIME", },
		{ pk: 3, branch: 1, type: 0, name: "Project Z", count: 100, created_at: "DATETIME", },
		{ pk: 4, branch: 1, type: 1, name: "Project N", count: -1, created_at: "DATETIME", },
	]

	ProjectOptions: object[] = [
		{ pk: 1, requirement: 1, label: "16-30", },
		{ pk: 2, requirement: 1, label: "31-50", },
		{ pk: 3, requirement: 1, label: "50+", },
		{ pk: 4, requirement: 2, label: "Male", },
		{ pk: 5, requirement: 2, label: "Female", },
		{ pk: 6, requirement: 3, label: "Brand A", },
		{ pk: 7, requirement: 3, label: "Brand B", },
	]

	Plan: object[] = [
		{ pk: 1, user: 1, option: 1, count: 3 },
		{ pk: 2, user: 1, option: 2, count: 4 },
		{ pk: 3, user: 1, option: 3, count: 3 },
		{ pk: 4, user: 1, option: 4, count: 5 },
		{ pk: 5, user: 2, option: 3, count: 4 },
	]

	async get(branchId: number = -1, type?: number ) {

		return this.Projects.filter( (project:any) => {
			return type || 0 === type
			? ( -1 === branchId ? true : project.branch === branchId ) && ( -1 === type ? true : project.type === type )
			: -1 === branchId ? true : project.branch === branchId
		} )
	}

	async getOne(projectId: number) {

		return this.Projects.find((project:any) => project.pk === projectId)
	}

	async getRequirements(projectId: number) {
		const ProjectRequirements = [
			{ pk: 1, project: 3, label: "Age" },
			{ pk: 2, project: 3, label: "Gender" },
			{ pk: 3, project: 3, label: "Brand" },
		]

		return ProjectRequirements.filter((req:any) => req.project === projectId)
	}

	async getOptions(reqId: number) {

		return this.ProjectOptions.filter((req:any) => req.requirement === reqId)
	}

	async getOptionsCount(userId: number, projectOptId: number) {

		const plan:any = await this.Plan.find((plan:any) => plan.user === userId && plan.option === projectOptId);

		return plan !== null && plan !== undefined ? plan.count : 0
	}
}