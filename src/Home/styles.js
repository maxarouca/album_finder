import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 20px;

  svg {
    position: absolute;
    left: 10px;
  }

  input {
    height: 50px;
    width: 300px;
    padding: 10px;
    padding-left: 40px;
    font-size: 16px;
    border: 1px solid #b6cad4;
    border-radius: 4px;
  }
`;

export const Artist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
  }
`;

export const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
`;
