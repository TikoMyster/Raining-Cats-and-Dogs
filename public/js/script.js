const changeBg = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (response.ok) {
            const jsonResponse = await response.json();
            document.getElementById('top-banner-bg-image').style.setProperty('--bg-img', `url(${jsonResponse.message})`);
        }
    } catch (err) { console.log(err); }
};

$(document).contextmenu(changeBg);
