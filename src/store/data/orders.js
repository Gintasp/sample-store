import faker from 'faker';

let orders = [];

for (let i = 0; i < 50; i++) {
  orders.push({
    id: String(i + 1),
    name: faker.name.findName(),
    email: faker.internet.email(),
    total: Math.floor(Math.random() * (50 - 9 + 1)) + 9,
    address: faker.address.streetAddress() + ', ' + faker.address.city(),
    date: faker.date.past().toLocaleDateString(),
  });
}

export default orders;
