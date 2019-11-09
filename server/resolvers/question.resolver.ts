import { QuestionLablesService } from "../data-services/question-labels.service"
import { QuestionsService } from "../data-services/questions.service"

const questionLabelsService = new QuestionLablesService()
const questionsService = new QuestionsService()

export default {
	Question: {
		async labels(question: any) {
			return await questionLabelsService.get(question.pk)
		},
		async columns(question: any) {
			return await questionsService.getColumns(question.pk)
		}
	}
}