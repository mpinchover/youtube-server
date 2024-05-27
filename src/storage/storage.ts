import { database } from "./mongo";

export const createUserPreferences = async (preferences: any) => {
  const col = database.collection("user_preferences");
  try {
    const result = await col.insertOne(preferences);
    return result;
  } catch (e) {
    throw e;
  }
};

export const getAllUserPreferences = async () => {
  const col = database.collection("user_preferences");
  try {
    const result = await col.find().toArray();
    return result;
  } catch (e) {
    throw e;
  }
};
