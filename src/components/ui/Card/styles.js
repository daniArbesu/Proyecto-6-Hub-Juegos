import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  max-width: 368px;
  background: #ffffff;
  box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.16);
  border-radius: 10px;

  transition: 0.3s;

  :hover {
    transform: translate(0, -10px);
  }
`;

export const Image = styled.img`
  height: 184px;
  width: 320px;
  border-radius: 8px;

  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 320px;
`;

export const Heading = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #464646;
`;

export const Summary = styled.p`
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 1px;
  color: #676767;
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 100%;
`;

export const Cancel = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 1px;
  color: #8c92c0;
`;

export const CTAButton = styled.button`
  padding: 8px 32px;
  gap: 10px;
  color: white;
  background: #3adb92;
  border-radius: 4px;

  :hover {
    background: #1bc578;
  }
`;
