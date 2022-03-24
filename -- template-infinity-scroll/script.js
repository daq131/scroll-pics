// unsplash api

const count = 10;
const apiKey = "oNTXLPo-Hi7B98dxO-4vY2pj7EpuUV8rlGEFhIIQpag";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photo from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //catch error
  }
}

getPhotos();
