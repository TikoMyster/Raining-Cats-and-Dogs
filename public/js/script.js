const changeBg = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (response.ok) {
            const jsonResponse = await response.json();
            document.body.style.setProperty('--bg-img', `url(${jsonResponse.message})`)
        }
    } catch (err) { console.log(err); }
};

$(document).on('click', changeBg);
