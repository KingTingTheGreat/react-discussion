import { useEffect, useState } from "react";
import { ArtworksProps } from "../types";
import ArtworkPreview from "./ArtworkPreview";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ArtworksListContent() {
  const [numArtworks, setNumArtworks] = useState(5);
  const [artworks, setArtworks] = useState<ArtworksProps[]>([]);

  useEffect(() => {
    async function getArtworks() {
      const res = await fetch(
        `https:api.artic.edu/api/v1/artworks?limit=${numArtworks}`,
      );
      const jsonRes = await res.json();
      setArtworks(jsonRes.data);
    }
    getArtworks().catch((e) => console.error(e));
  }, [numArtworks]);

  return (
    <StyledDiv>
      <h2>Artworks</h2>
      <input
        type="number"
        placeholder="Number of Artworks"
        value={numArtworks}
        min={1}
        onChange={(e) => setNumArtworks(Number(e.target.value))}
      />
      <p>Number of Artworks: {numArtworks}</p>
      <div>
        {artworks.map((a) => {
          return <ArtworkPreview artwork={a} />;
        })}
      </div>
    </StyledDiv>
  );
}
