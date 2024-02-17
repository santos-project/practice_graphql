const { ApolloServer, gql } = require("apollo-server");

// Hackernewsのリンクデータ 1つ1つの投稿
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
];

// GraphQLスキーマの定義
const typeDefs = gql`
  type Query {
    info: String!
    feed: [Link]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

// リゾルバ関数　スキーマで定義されたクエリに対する処理を記述
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
};

const server = new ApolloServer({
  // スキーマとリゾルバをApolloServerに渡す
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
