import { ProjectsService } from "../data-services/projects.service"
import { UsersService } from "../data-services/users.service"

const projectsService = new ProjectsService()
const usersService = new UsersService()

export default {
	ProjectOption: {
		async count(projectOpt: any) {
			const userId:any = usersService.get(-1, usersService.currentUser())

			return await projectsService.getOptionsCount(userId.pk, projectOpt.pk)
		}
	}
}