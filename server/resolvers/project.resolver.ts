import { ProjectsService } from "../data-services/projects.service"
import { QuestionsService } from "../data-services/questions.service"

const projectsService = new ProjectsService()
const questionsService = new QuestionsService()

export default {
	Query: {
		async projects( _, { branchId, type }) {
			return await projectsService.get(branchId, type)
		},
	},
	Project: {
		async type(project: any) {
			return await ["Retail", "Consumer"][project.type]
		},
		async createdAt(project: any) {
			return await project.created_at
		},
		async questions(project: any) {
			return await questionsService.get(project.pk)
		},
		async requirements(project: any) {
			return projectsService.getRequirements(project.pk)
		}
	}
}