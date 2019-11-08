import { UsersService } from "../data-services/users.service"
import { default as Branches } from "../data-services/branches.service"
import { default as Subscribers } from "../data-services/subscribers.service"

const usersService = new UsersService();

export default {
	Query: {
		async users( _, { branchId }) {
			return await usersService.get(branchId)
		},
		async getUser(_, { userId }) {
			return await usersService.get(null, userId)
		}
	},
	User: {
		branch(user) {
			return Branches.find((branch:any) => branch.pk === user.branch)
		},
		subscriber(user) {
			return Subscribers.find((subscriber:any) => subscriber.pk === user.subscriber)
		}
	}
}