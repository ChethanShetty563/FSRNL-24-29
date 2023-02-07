const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const authors = [
  {
    id: '1',
    info: {
      name: 'Chethan',
      age: '25',
      gender: 'M',
    },
  },
  {
    id: '2',
    info: {
      name: 'Nibbi',
      age: '25',
      gender: 'F',
    },
  },
];

const typeDefs = `
type Author {
    id : ID!
    info: Person
}
type Person {
    name : String!
    age: Int
    gender: String
}

type DeleteMessage {
    id: ID!
    message: String
}
type Query {
    getAuthors: [Author]
    retrieveAuthor(id: ID!): Author
}
type Mutation {
    createAuthor(name: String!, gender: String!): Author
    updateAuthor(id: ID!, name: String!, age: Int) : Author
    deleteAuthor(id: ID!): DeleteMessage
}
`;

const resolvers = {
  Query: {
    getAuthors: () => authors,
    retrieveAuthor: (obj, { id }) => authors.find((author) => author.id === id),
  },
  Mutation: {
    createAuthor: (obj, args) => {
      const id = String(authors.length - 1);
      const { name, gender } = args;
      const newAuthor = {
        id,
        info: {
          name,
          gender,
        },
      };
      authors.push(newAuthor);
      return newAuthor;
    },

    updateAuthor: (obj, { id, name, gender, age }) => {
      console.log(age);
      const author = authors.find((author) => author.id == id);

      if (author) {
        const authorIndex = authors.indexOf(author);
        if (name) {
          author.info.name = name;
        }
        if (gender) {
          author.info.gender = gender;
        }
        if (age) {
          author.info.age = age;
        }

        console.log(author.age);

        authors[authorIndex] = { id, info: author };

        return { id, info: author };
      } else {
        throw new Error('ID not found');
      }
    },
    deleteAuthor: (obj, { id }) => {
      const author = authors.find((author) => author.id === id);
      if (author) {
        const authorIndex = authors.indexOf(author);
        authors.splice(authorIndex, 1);
        return { id, message: 'Author deleted' };
      } else {
        throw new Error('ID not found');
      }
    },
  },
};

const PORT = 3000;

const app = express();

async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

app.listen(PORT, () => {
  console.log('server running');
});
