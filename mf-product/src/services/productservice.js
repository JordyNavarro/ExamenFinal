const axios = require("axios");
module.exports={

    get:async function(){
        const {data} = await axios.get("http://localhost:8080/products/");
        return data; 
    }
}