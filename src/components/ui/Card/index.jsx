/* eslint-disable react/prop-types */
import {
  ButtonWrapper,
  Cancel,
  CardContainer,
  CTAButton,
  Description,
  Heading,
  Image,
  Summary
} from './styles';

function Card({
  heading,
  text,
  image,
  needButtons = false,
  cancelText = 'Cancel',
  CTAText = 'Buy'
}) {
  return (
    <CardContainer>
      <Image src={image} />
      <Description>
        <Heading>{heading}</Heading>
        <Summary>{text}</Summary>
      </Description>
      {needButtons ? (
        <ButtonWrapper>
          <Cancel>{cancelText}</Cancel>
          <CTAButton>{CTAText}</CTAButton>
        </ButtonWrapper>
      ) : null}
    </CardContainer>
  );
}

export default Card;
