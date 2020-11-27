import axios from "axios";

var mixin = {
  methods: {
    async doSubmit(user) {
      const result = await axios.post("http://localhost:8081/register", user);
      if (result.data.status == "ok") {
        alert(result.data.message);
      } else {
        alert("Register failed : " + result.data.message);
      }
    },
  },
};

export default mixin;
