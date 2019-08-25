import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../constants';

const Main = styled.main({
  backgroundColor: colors.grays.light,
  minHeight: 'calc(100vh - 60px)',
  paddingTop: 60,
});

const Page: React.FC = (props) => {
  return (
    <Main>
      {props.children}
    </Main>
  )
}

export default Page;
