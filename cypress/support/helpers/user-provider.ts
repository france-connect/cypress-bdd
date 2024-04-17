import { User } from '../types';

const DEFAULT_USER_DESC = 'standard';

export const getUserByDescription = (
  users: User[],
  description: string,
): User => {
  const foundUser: User = users.find((user) =>
    user.descriptions.includes(description),
  );
  expect(foundUser, `No user matches the description '${description}'`).to
    .exist;
  return foundUser;
};

export const getDefaultUser = (users: User[]): User =>
  getUserByDescription(users, DEFAULT_USER_DESC);
