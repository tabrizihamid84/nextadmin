import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    connectToDB();

    console.log("yyyy");
    const users = await User.find();
    console.log(users);
    return [];
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
