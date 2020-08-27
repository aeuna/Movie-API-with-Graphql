//Query 를 해결

const euna = {
  name: 'euna',
  age: 18,
  gender: 'female',
};
const resolvers = {
  Query: {
    person: () => euna,
  },
};

export default resolvers;
