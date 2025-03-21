import axios from "axios";

export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "olx-uploads");  
    formData.append("cloud_name", "dg7qyi7ui");   

    // Send the image data to Cloudinary
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dg7qyi7ui/image/upload",
      formData  // Form data goes directly here
    );

    return response.data.url;  // Return the image URL from Cloudinary response
  } catch (error) {
    console.error("Error uploading image: ", error.message);
    throw new Error(error.message);
  }
};
