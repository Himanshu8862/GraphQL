export const typeDefs = `#graphql
    type Game {
        id:ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    # entry points on the graph
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    },

    # add, delete, update data
    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, edit: EditGameInput!): Game
    }


    # collection of fields used inside a mutation as a single argument
    input AddGameInput{
        title: String!,
        platform: [String!]!
    }
    input EditGameInput{
        title: String,
        platform: [String!]
    }
`