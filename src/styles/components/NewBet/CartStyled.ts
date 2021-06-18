import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: all 0.4s;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.grayLight};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;

  @media (max-width: 720px) {
    margin: 0;
  }
`;

export const Content = styled.div`
  position: relative;
  padding: 1rem 0;
  max-height: 15rem;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  p {
    color: ${({ theme }) => theme.grayLight};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.grayWhite};

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.grayLight};
    margin-right: 5px;
  }
`;

export const ButtoSaveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 5rem;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ButtonCart = styled.button`
  display: none;
  color: ${({ theme }) => theme.grayLight};
  padding: 0.5rem 1rem;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-radius: 10px;
  transition: all 0.4s;

  @media (max-width: 720px) {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  &:hover {
    filter: brightness(75%);
  }
  &:active {
    filter: brightness(50%);
  }
`;

export const NumCart = styled.span`
  display: none;
  padding: 2px 1.5rem;
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 1.25rem;
  color: #fff;
  background-color: ${({ theme }) => theme.greenLogo};
  border-radius: 10px;

  @media (max-width: 720px) {
    display: block;
  }
  @media (max-width: 540px) {
    padding: 1px 1rem;
  }
`;
