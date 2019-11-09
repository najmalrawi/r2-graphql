import { QuestionsService } from "../data-services/questions.service"

const questionsService = new QuestionsService()
const dataTypes = ["BOOLEAN", "INTEGER", "FLOAT", "STRING", "ENUM", "SET"]

export default {
	QuestionColumn: {
		async dataType(column) {
			const col:any = await questionsService.getColumns(null, column.pk)

			return col ? dataTypes[col.data_type] : "";
		},
		async options(column) {
			return await questionsService.getColumnOptions(column.pk)
		},
		async attributes(column) {

			return await questionsService.getColumnAttributes(column.pk)
		},
	}
}