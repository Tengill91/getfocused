import client from "./client";

// hidden from  our components

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

export default {
  getListings,
};
