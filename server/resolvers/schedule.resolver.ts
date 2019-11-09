import { ScheduleService } from "../data-services/schedule.service"
import { ProjectsService } from "../data-services/projects.service"

const scheduleService = new ScheduleService()
const projectsService = new ProjectsService()

export default {
	Query: {
		async schedule( _, { userId, completed }) {
			return await scheduleService.get(userId, completed)
		},
	},
	Schedule: {
		async project(schedule: any) {
			return await projectsService.getOne(schedule.project)
		},
	}
}