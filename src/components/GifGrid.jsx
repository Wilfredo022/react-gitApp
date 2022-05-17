import { useFetchURL } from "../hooks/useFetchURL";
import { ImageGifGrid } from "./ImageGifGrid";

const GifGrid = ({ categoria }) => {
  const { data, loading } = useFetchURL(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {loading && (
        <p className="cargando animate__animated animate__flash">Cargando...</p>
      )}

      <div className="cardGrid">
        {data.map((el) => (
          <ImageGifGrid el={el} key={el.id} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
