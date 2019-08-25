import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../constants';

const Main = styled.main({
  backgroundColor: colors.grays.light,
  minHeight: '100vh',
  paddingBottom: 60,
  paddingTop: 100,
});

const Page: React.FC = (props) => {
  return (
    <Main>
      {props.children}
    </Main>
  )
}

export default Page;
