import axios from "axios";

const Api = {
  search: function(type, profile, cost) {
    const authKey = "5cj3F0nQw4ngucb3XjmYCeWpnnxqshoF";
    const queryURL = "https://api.mlab.com/api/1/databases/recipe/collections/recipe?apiKey=" +
      authKey + "&q={'type':" + JSON.stringify(type) + "," + "'flavourProfile':" + JSON.stringify(profile) + "," + "'cost':" + JSON.stringify(cost) + "}";
    return axios.get(queryURL);
  }
};

export default Api;
