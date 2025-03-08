import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ArtworksProps } from "../types";

export default function ArtworkContent() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState<ArtworksProps | null>(null);

  useEffect(() => {
    async function getArtworkInfo() {
      const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
      const jsonRes = await res.json();
      console.log(jsonRes);
      setArtwork(jsonRes.data);
    }
    try {
      getArtworkInfo();
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  if (artwork === null) return <p>loading...</p>;

  return (
    <>
      <title>{artwork.title}</title>
      <div>
        <h2>{artwork.title}</h2>
        <img
          src={`http://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
          width="80%"
        />
      </div>
    </>
  );
}
