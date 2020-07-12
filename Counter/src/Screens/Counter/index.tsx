import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
`;

const TitleContainer = Styled.View``;

const TitleLabel = Styled.Text``;

const CountContainer = Styled.View``;

const CountLabel = Styled.Text``;

const ButtonContainer = Styled.View``;

interface Props {
  title?: string;
  initValue: number;
}

const Counter = ({title, initValue}: Props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <Container>
      {title && (
        <TitleContainer>
          <TitleLabel>{title}</TitleLabel>
        </TitleContainer>
      )}
      <CountContainer>
        <CountLabel>{initValue + count}</CountLabel>
      </CountContainer>
      <ButtonContainer>
        <Button iconName="plus" onPress={() => setCount(count + 1)} />
        <Button iconName="minus" onPress={() => setCount(count - 1)} />
      </ButtonContainer>
    </Container>
  );
};

export default Counter;
