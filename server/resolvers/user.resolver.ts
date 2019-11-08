import { default as Users } from "../data-services/users.service"
import { default as Branches } from "../data-services/branches.service"
import { default as Subscribers } from "../data-services/subscribers.service"

export default {
	Query: {
		async users( _, { branchId }) {
			return -1 === branchId ? Users : Users.filter((user:any) => user.branch === branchId)
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