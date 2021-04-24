import User from "./UserModel";

// Fake users data
// const users = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 4 },
//   { id: 5 },
//   { id: 6 },
//   { id: 67 },
// ];

export default async function handler(_req, res) {
  // Get data from your database
  // res.status(200).json(users);
  const users = await User.find({});
  res.status(200).json(users);
}
