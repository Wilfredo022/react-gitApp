export const fetchURL = async (buscar) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    buscar
  )}&limit=10&api_key=rmsf6J3GTvYAVNDiX5N7WoS39CnB6DBL`;

  const peticion = await fetch(url);
  const { data } = await peticion.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized.url,
    };
  });

  return gifs;
};
