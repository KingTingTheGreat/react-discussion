import styled from "styled-components";
import { ArtworksProps } from "../types";
import { Link } from "react-router";

const ArtworkPreviewDiv = styled.div`
  margin: 10px;
  padding: 4px;
  width: 400px;
  background-color: lightblue;
`;

export default function ArtworkPreview({
  artwork,
}: {
  artwork: ArtworksProps;
}) {
  return (
    <Link to={`/artwork/${artwork.id}`}>
      <ArtworkPreviewDiv>
        <h3>{artwork.title}</h3>
        <p>{artwork.place_of_origin}</p>
      </ArtworkPreviewDiv>
    </Link>
  );
}
