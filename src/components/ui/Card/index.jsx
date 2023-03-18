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

function Card({ heading, text, needButtons = false, cancelText = 'Cancel', CTAText = 'Buy' }) {
  return (
    <CardContainer>
      <Image src="https://img.freepik.com/vector-gratis/fondo-maravilloso-psicodelico-aleros_23-2148837578.jpg?w=1480&t=st=1674064994~exp=1674065594~hmac=72cb805e659b886a7d536d14c517bf435a67b3d86372aa95ab534b76e6fd74c6" />
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
