export class UsersService {

	get(branchId: number = -1, userId?: number ) {

		const Users = [
			{ pk: 1, branch: 1, subscriber: 1, firstname: "Muhammad", lastname: "Najimov", password: "1" },
			{ pk: 2, branch: 2, subscriber: 2, firstname: "Suleiman", lastname: "Najimov", password: "2" },
			{ pk: 3, branch: 2, subscriber: 3, firstname: "Najmuddeen", lastname: "Najimov", password: "3" },
			{ pk: 4, branch: 1, subscriber: 4, firstname: "Yahyo", lastname: "Najimov", password: "4" },
		]

		return userId
		? ( Users.find((user:any) => user.pk === userId) ) :
		-1 === branchId
		? Users : Users.filter((user:any) => user.branch === branchId)
	}

	currentUser() {

		return 1
	}
}