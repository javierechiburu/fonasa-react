import axios from "axios";

export async function login(
  username: string,
  password: string
): Promise<{ name: string; token: string }> {
  try {
    const response = await axios.post("http://localhost:3000/login", {
      username,
      password,
    });
    const data = response.data;
    return { name: data.name, token: data.token };
  } catch (error) {
    throw new Error("Login failed");
  }
}
