import { default as Branches } from "../data-services/branches.service"

export default {
	Query: {
		branches: () => Branches
	}
}