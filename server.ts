import { GraphQLServer } from "graphql-yoga"
import { default as typeDefs } from "./server/schema/_types"
import { default as resolvers } from "./server/resolvers/_resolvers"
import { default as options } from "./server/graphql-options"

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(options, () => {

	console.log(`Server is running on localhost:${options.port}`)

}).catch(error => {

	console.error("Connection error", error)
})