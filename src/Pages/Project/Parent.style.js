import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const ContentOuter = styled.div`
  max-width: 1440px;
  padding: 40px 120px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const ContentInner = styled.div`
  margin: auto;
`;

export const Banner = styled.div`
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 480px) {
    height: 250px;
  }
`;

export const Title = styled.div`
  color: black;
  font-size: 38px;
  font-weight: 600;
  text-align: center;
`;


export const PaperTitle = styled.div`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  color: #262626;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const PaperShortDescription = styled.div`
  font-size: 19px;
  font-weight: 300;
  text-align: center;
  color: #595959;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const PaperAuthors = styled.div`
  font-size: 26px;
  font-weight: 400;
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  & > div {
    display: flex;
    align-items: center;
  }

  a {
    color: #ad6800;
  }

  sup {
    color: #000000;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;


export const PaperAuthorOrganizations = styled.div`
  font-size: 20px;
  font-weight: 300;
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  color: #595959;

  & > div {
    display: flex;
    align-items: center;
  }

  sup {
    color: #000000;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px auto;
  width: 60%;
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Children = styled.div`
  margin-top: 32px;
  color: black;
`;

export const Anchor = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: darkblue;
`;
