import axios from "axios";

export const storeDestinationService = async (data) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("image", data.image);
  formData.append("category_id", data.kategori);

  try {
    const response = await axios.post(
      `${process.env.API_URL}destination`,
      formData,
      {
        headers: { Authorization: process.env.API_TOKEN },
      }
    );
    return response.status;
  } catch (error) {
    return error.response.status;
  }
};
