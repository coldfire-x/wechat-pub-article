import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  background-color: #f8f9fa;
  color: #2c3e50;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #e5e7eb;
  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1f2937;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.span`
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 400;
  margin-top: 0.25rem;
  display: block;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>
        <Title>WeChat Article Formatter</Title>
        <Subtitle>Convert Markdown to WeChat-compatible HTML</Subtitle>
      </div>
    </HeaderContainer>
  );
};