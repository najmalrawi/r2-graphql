export class ScheduleService {

	async get(userId: number, completed?: boolean ) {

		const Schedule = [
			{ pk: 1, project: 3, user: 2, completed: false, expire: "DATETIME", },
			{ pk: 2, project: 3, user: 1, completed: false, expire: "DATETIME", },
		]

		return Schedule.filter( (schedule:any) => {
			return completed === true || completed === false
			? schedule.user === userId && schedule.completed === completed
			: schedule.user === userId
		} )
	}
}