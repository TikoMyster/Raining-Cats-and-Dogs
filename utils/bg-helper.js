const fetch = require('node-fetch');

const getBgImage = async (req, res, next) => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (response.ok) {
            req.url = response.url;
            next();
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = getBgImage;