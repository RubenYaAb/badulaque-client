import axios from "axios";

export default async function getAllArticles() {
  try {
    const httpRequest = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`);
    return httpRequest.data.data;

  } catch (error) {
    console.error(error);
  }
} 