import axios from "axios";
import { announcementURL } from "./url";

//function to provide announcements

export const announce = async () => {
  try {
    const res = await axios.get(announcementURL);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error in announcement retrieval");
  }
};
