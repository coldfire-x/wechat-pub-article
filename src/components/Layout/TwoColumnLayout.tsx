import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

const LeftColumn = styled(Column)`
  border-right: 1px solid #e5e5e5;
`;

const RightColumn = styled(Column)`
  background-color: #f9f9f9;
`;

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ left, right }) => {
  return (
    <Container>
      <LeftColumn>{left}</LeftColumn>
      <RightColumn>{right}</RightColumn>
    </Container>
  );
};