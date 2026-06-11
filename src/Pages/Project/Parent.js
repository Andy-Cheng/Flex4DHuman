import React from 'react';
import { Badge } from 'antd';
import {
  Container,
  ContentOuter,
  ContentInner,
  Banner,
  Title,
  BadgeContainer,
  Children,
  Anchor
} from './Parent.style';

const getBadgeText = (key, value, valueLink) => {
  const keyWithCapitalizeFirstLetter =
    key.charAt(0).toUpperCase() + key.slice(1);
  
  let formattedValue = value;
  if (typeof value === 'string' && value.includes('Jen-Hao Cheng')) {
    const parts = value.split('Jen-Hao Cheng');
    formattedValue = (
      <>
        {parts[0]}
        <span style={{ fontWeight: "bold" }}>Jen-Hao Cheng</span>
        {parts[1]}
      </>
    );
  }
  
  return (
    <>
      <span style={{ fontWeight: 600 }}>{keyWithCapitalizeFirstLetter}: </span>
      {valueLink ? <Anchor href={valueLink}>{formattedValue} (Link)</Anchor> : formattedValue}
    </>
  );
};

const Parent = ({
  bannerSrc,
  title,
  publication,
  link,
  authors,
  time,
  location,
  category,
  responsibilities,
  honors,
  children
}) => (
  <Container style={{ marginTop: 64 }}>
    <Banner style={{ backgroundImage: `url('${bannerSrc}')` }} />
    <ContentOuter>
      <ContentInner>
        <Title>{title}</Title>
        <BadgeContainer>
          {category === 'Research' && (
            <>
              <Badge
                color="black"
                text={getBadgeText('publication', publication, link)}
              />
              <Badge color="black" text={getBadgeText('authors', authors)} />
            </>
          )}
          <Badge color="black" text={getBadgeText('time', time)} />
          <Badge color="black" text={getBadgeText('location', location)} />
          <Badge color="black" text={getBadgeText('category', category)} />
          {responsibilities && (
            <Badge
              color="black"
              text={getBadgeText('responsibilities', responsibilities)}
            />
          )}
          {honors && (
            <Badge color="black" text={getBadgeText('honors', honors)} />
          )}
        </BadgeContainer>
        <Children>{children}</Children>
      </ContentInner>
    </ContentOuter>
  </Container>
);

export default Parent;
