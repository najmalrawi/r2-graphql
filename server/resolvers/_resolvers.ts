import * as path from "path"
import { fileLoader } from "merge-graphql-schemas"

const resolvers = fileLoader(path.join(__dirname, "./**/*.resolver.ts"))

export default resolvers