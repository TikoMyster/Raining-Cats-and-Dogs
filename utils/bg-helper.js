const fetch = require('node-fetch');

const getBgImage = async ()=>{
    try{
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if(response.ok){
            const url =response.url;
            return url;
        }
    }catch(err){
        console.log(err);
    }
    
    
};

getBgImage();