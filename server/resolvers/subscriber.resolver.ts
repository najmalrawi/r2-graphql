import { default as Subscribers } from "../data-services/subscribers.service"

export default {
	Query: {
		subscribers: () => Subscribers
	}
}