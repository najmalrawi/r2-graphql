export class QuestionsService {

	async get(projectId: number) {

		const Questions = [
			{ pk: 1, project: 3, title: "Project Z Question A" },
		]

		return Questions.filter( (question:any) => question.project === projectId )
	}

	async getColumns(questionId?: number, columnId?: number) {

		const QuestionColumns = [
			{ pk: 1, question: 1, name: "Column Boolean", data_type: 0 },
			{ pk: 2, question: 1, name: "Column Integer", data_type: 1 },
			{ pk: 3, question: 1, name: "Column Float", data_type: 2 },
			{ pk: 4, question: 1, name: "Column String", data_type: 3 },
			{ pk: 5, question: 1, name: "Column Enum", data_type: 4 },
			{ pk: 6, question: 1, name: "Column Set", data_type: 5 },
		]

		return columnId
		? QuestionColumns.find((column:any) => column.pk === columnId)
		: QuestionColumns.filter( (column:any) => column.question === questionId )
	}

	async getColumnOptions(columnId: number) {

		const QuestionColumnOptions = [
			{ pk: 1, column: 5, option: "Option A" },
			{ pk: 2, column: 5, option: "Option B" },
			{ pk: 3, column: 5, option: "Option C" },
		]

		return QuestionColumnOptions.filter((option:any) => option.column === columnId)
	}

	async getColumnAttributes(columnId: number) {

		const QuestionColumnAttributes = [
			{ pk: 1, column: 4, name: "subtype", value: "url" },
			{ pk: 2, column: 4, name: "pattern", value: "/pattern/" },
		]

		const filtered = QuestionColumnAttributes.filter((attr:any) => attr.column === columnId)

		if ( filtered ) {

			const attributes = {}

			for ( let attr of filtered ) {
				attributes[attr.name] = attr.value
			}

			return attributes
		}
		else return null
	}
}