export class QuestionLablesService {

	get(questionId: number) {

		const QuestionLabels = [
			{ pk: 1, question: 1, label: "Label A" },
			{ pk: 2, question: 1, label: "Label B" },
			{ pk: 3, question: 1, label: "Label C" },
			{ pk: 4, question: 1, label: "Label D" },
		]

		return QuestionLabels.filter( (label:any) => label.question === questionId )
	}
}