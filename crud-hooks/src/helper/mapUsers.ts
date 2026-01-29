import type { User, UserResponse } from "../types";

export const mapUsersResponse = (users:User[]):UserResponse[] => {
  const mappedUsers = users.map(user => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      addressName: `${user.address.city} ${user.address.street} ${user.address.suite}`,
      phone: user.phone,
      website: user.website,
      companyName: user.company.name
    }
  });
  return mappedUsers
}