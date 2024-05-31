interface User {
  name: string;
  token: string;
}

export const loadUser = (): User | undefined => {
  try {
    const sUser = localStorage.getItem("user");
    if (sUser === null) {
      return undefined;
    }
    return JSON.parse(sUser);
  } catch (err) {
    console.error("Error loading user", err);
    return undefined;
  }
};

export const saveUser = (user: User): void => {
  try {
    const sUser = JSON.stringify(user);
    localStorage.setItem("user", sUser);
  } catch (err) {
    console.error("Error saving user", err);
  }
};

export const removeUser = (): void => {
  try {
    localStorage.removeItem("user");
  } catch (err) {
    console.error("Error removing user", err);
  }
};
