import axios from "axios";

export const getExampleMessage = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/example");
    return response.data.message;
  } catch (error) {
    console.error("Error fetching message:", error);
    throw error;
  }
};
