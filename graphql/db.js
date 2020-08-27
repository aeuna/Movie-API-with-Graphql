export const people = [
  {
    id: '0',
    name: 'euna',
    age: 18,
    gender: 'female',
  },
  {
    id: '1',
    name: 'eunjung',
    age: 17,
    gender: 'female',
  },
  {
    id: '2',
    name: 'eunji',
    age: 20,
    gender: 'female',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
