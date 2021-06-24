import axios from "axios";
const instance = axios.create({
    baseURL : "https://vuejs-axios-blog-44ce8-default-rtdb.europe-west1.firebasedatabase.app",
})

instance.defaults.headers.common["Authorization"] = "test_auth_key";
instance.defaults.headers.get["Accepts"] = "application/json";

export default instance;