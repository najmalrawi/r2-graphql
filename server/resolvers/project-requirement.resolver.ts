import { ProjectsService } from "../data-services/projects.service"

const projectsService = new ProjectsService()

export default {
	ProjectRequirement: {
		async options(requirement: any, userId?: number) {
			return projectsService.getOptions(requirement.pk)
		}
	}
}