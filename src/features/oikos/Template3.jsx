import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import HorizontalLine from '../../components/functions/HorizontalLine';
import { Fab, Typography } from '@mui/material';
import { TbBulb } from 'react-icons/tb';

// Container
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  background-color: #121212;
  color: #e0e0e0;

  // Mobile responsiveness
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

// Main content feature item
const FeatureItem = styled.div`
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #1e1e1e;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

// Title styling
const Title = styled.h1`
  text-align: left;
  margin-bottom: 10px;
  font-size: 2rem;
  color: #ffffff;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 10px;
  }
`;

// Subtitle for major benefits
const SubTitle = styled.h4`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  margin: 30px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Supporting text beneath the title
const SupportingLines = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Heading = styled.h3`
  text-align: center;
  color: #f7f7f7;
  opacity: 0.8;
  font-size: 1.8rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const USPList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const USPItem = styled.div`
  text-align: center;
  max-width: 300px;
  background: #1e1e1e;
  color: #e0e0e0;
  padding: 16px;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 12px;
  }
`;

const BlueBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const BlueBox = styled.div`
  height: 200px;
  font-size: 3rem;
  background: #007bff;
  min-width: 150px;
  color: white;
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 150px;
    font-size: 2.5rem;
  }
`;

const ItemList = styled.div`
  background: rgba(30, 30, 30, 0.86);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;

const Explanation = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Template3 = ({ dataList = [] }) => {
  const { id } = useParams(); // Get the dynamic id from the route

  // Filter the dataList by the page_title matching the id
  const filteredData = dataList.find((data) => data.page_title === id);

  // If no matching data, show a "Not Found" message
  if (!filteredData) {
    return (
      <Container>
        <Typography variant="h4" color="error" align="center">
          Data not found for the given page title.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <FeatureItem>
        <BlueBoxContainer>
          <BlueBox><TbBulb /></BlueBox>
          <div>
            <Title>{filteredData.hero_statement || ''}</Title>
            <Typography sx={{ marginLeft: "20px" }}>Use case</Typography>
          </div>
        </BlueBoxContainer>

        <SupportingLines>{filteredData.supporting_lines || ''}</SupportingLines>
      </FeatureItem>

      <SubTitle>Major Benefits</SubTitle>
      <HorizontalLine />

      <Section>
        <Heading>{filteredData.topic_heading || ''}</Heading>
        <USPList>
          {(filteredData.main_points_usps || []).map((usp, i) => (
            <USPItem key={i}>
              <Fab color="primary" sx={{ fontSize: '2rem', mb: 2 }}>
                {i + 1}
              </Fab>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                {usp.text.split(":")[0]}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {usp.text || ''}
              </Typography>
            </USPItem>
          ))}
        </USPList>
      </Section>
      <br />
      <Section>
        <Heading>{filteredData.what_is_topic || ''}</Heading>
        <Explanation>{filteredData.explanation_with_images || ''}</Explanation>
      </Section>
      <br />
      <Section>
        <Heading>{filteredData.how_it_works || ''}</Heading>
        <Explanation>
          {filteredData.how_it_works_explanation_with_images.length && filteredData.how_it_works_explanation_with_images.map((e) => (
            <ItemList key={e}>
              <span style={{ fontWeight: "bold", color: "white", textDecoration: "underline", textDecorationColor: "#0d6efd", fontSize: "1.2rem", marginRight: "5px" }}>
                {e.split(":")[0]}
              </span>
              {e.split(":")[1]}
            </ItemList>
          ))}
        </Explanation>
      </Section>
    </Container>
  );
};

export default Template3;
