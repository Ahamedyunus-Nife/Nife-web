import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Import Helmet for meta tags
import data from "./solutions.json";

const Container = styled.div`
  background-color: #121212;
  color: #fff;
  font-family: "Arial", sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #f0f0f0;
`;

const SupportingLine = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 40px;
  color: #ccc;
`;

const UseCaseList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style-type: none;
  padding: 0;
`;

const UseCaseItem = styled.li`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  border-bottom: 5px solid rgba(13, 109, 253, 0.67);

  &:hover {
    transform: scale(1.05);
    background-color: rgba(13, 109, 253, 0.67);
    color: #fff;
  }
`;

const UseCaseTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #e0e0e0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #bbb;
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0d6efd;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  font-size: 1rem;

  &:hover {
    background-color: #0b5ed7;
    text-decoration: none;
  }
`;

export default function ShowAllUseCases() {
  return (
    <Container>
      {/* Adding Helmet to include meta tags */}
      <Helmet>
        <title>Use Cases - Nife</title>
        <meta
          name="description"
          content="Explore real-world applications and success stories of Nife's cloud and edge computing solutions."
        />
        <meta name="keywords" content="Cloud Case Studies, Edge Computing, Hybrid Cloud Solutions, Nife Case Studies" />
        <meta property="og:title" content="Use Cases - Nife" />
        <meta
          property="og:description"
          content="Explore real-world applications and success stories of Nife's cloud and edge computing solutions."
        />
        <meta property="og:image" content="https://nife.io/case-studies-image.png" />
        <meta property="og:image:alt" content="Nife Case Studies Overview" />
        <meta name="twitter:title" content="Use Cases - Nife" />
        <meta
          name="twitter:description"
          content="Explore real-world applications and success stories of Nife's cloud and edge computing solutions."
        />
        <meta name="twitter:image" content="https://nife.io/case-studies-image.png" />
        <meta name="twitter:image:alt" content="Nife Case Studies Overview" />
      </Helmet>

      <Title>{"Use cases"}</Title>
      <SupportingLine>
        Here are some of the best solutions we offer to help you succeed.
      </SupportingLine>

      <UseCaseList>
        {data.map((useCase, index) => (
          <UseCaseItem key={index}>
            <UseCaseTitle>{useCase.page_title}</UseCaseTitle>
            <Description>{useCase.supporting_lines}</Description>
            <ReadMoreButton
              to={`/solutions/${encodeURIComponent(
                useCase.page_title.replace(/\s+/g, "-")
              )}`}
            >
              Read More
            </ReadMoreButton>
          </UseCaseItem>
        ))}
      </UseCaseList>
    </Container>
  );
}
