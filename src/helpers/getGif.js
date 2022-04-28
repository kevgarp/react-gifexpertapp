export const getGifs = async(category) => {
    const apiKey = 'x0XTuy78spR5MxtzNa0OnzhC3jySM80I';
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=${ encodeURI(apiKey) }&limit=10`;

    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
};