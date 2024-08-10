import axios from "axios";

export const parseAddress: any = (address: any) => {
  return Object.values(address)
    ?.slice(0, Object.values(address)?.length - 1)
    .map((item: any) => item)
    ?.join(", ");
};

export const getCustomerList = async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/users")
    ?.then((userDataList: any) => {
      return userDataList?.data?.map((data: any) => {
        return {
          name: data?.name,
          title: data?.username,
          id: data?.id,
          address: parseAddress(data?.address),
        };
      });
    });
};

export const getImages = () => {
  return axios
    .get(
      "https://api.unsplash.com/photos?client_id=Wq0-k7acnRfmbF1VGcbAeJ1iML_DKZBlL3JwL-IhStk",
      {
        params: {
          per_page: 30,
        },
      }
    )
    ?.then((images: any) => {
      return images?.data;
    });
};
