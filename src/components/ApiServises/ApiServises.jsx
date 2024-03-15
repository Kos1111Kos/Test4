import axios from "axios";

const ACCESS_KEY = " wKCbwJZU7LnVKNt8ThEup0j5BL9vy_s9eGd1y0mvDyw";

export const requestPhoto = async () => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${query}`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );
};
