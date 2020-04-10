import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Card from 'components/Card';
import { Container, SearchContainer, Artist, AlbumContainer } from './styles';

import { FaSearch } from 'react-icons/fa';

const GET_ALBUNS = gql`
  {
    queryArtists(byName: "Metallica") {
      name
      id
      image
      albums {
        name
        id
        image
      }
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_ALBUNS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data);

  const artist = data.queryArtists[0];

  return (
    <Container>
      <h1>Album Finder</h1>
      <SearchContainer>
        <FaSearch />
        <input type="text" name="search" id="search" />
      </SearchContainer>
      <Artist>
        <img src={artist.image} alt={artist.name} />
        <h2>{artist.name}</h2>
      </Artist>

      <AlbumContainer>
        {artist.albums.map((album) => (
          <Card album={album} key={album.id} />
        ))}
      </AlbumContainer>
    </Container>
  );
}

export default Home;
