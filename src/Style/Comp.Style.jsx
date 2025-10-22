import styled from "styled-components";

export const Main = styled.main`
  background-color: #fff;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: 500ms ease-in-out;

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 20px;
  }
`;

export const TitleText = styled.h1`
  font-size: ${(props) => (props.s ? props.s : "32px")};
  font-family: ${(props) => (props.f ? props.f : "sans-serif")};
  letter-spacing: 2px;
  color: ${(props) => (props.c ? props.c : "#444")};
  font-weight: 400;
  cursor: default;
`;

export const HomePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 80px 60px;
  background-color: #f9f9f9;
  min-height: 30dvh;
  row-gap: 8px;
`;

export const InputField = styled.input`
  padding: 14px 20px;
  color: #555;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 16px;
  padding-left: 30px;

  &::placeholder {
    color: #999;
  }
`;

export const P = styled.p`
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #444;
`;

export const FlexPlate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 10px 60px;

  // mobile
  @media screen and (max-width: 530px) {
    padding: 10px 30px;
    grid-template-columns: repeat(1, 1fr);
  }

  // laptop
  @media screen and (min-width: 531px) and (max-width: 930px) {
    gap: 10px;
    row-gap: 20px;
    padding: 10px 30px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 6px 2px 0 rgb(0, 0, 0, 0.08);
  padding-bottom: 20px;
  overflow: hidden;
  transition: 200ms ease-out;
  border: 1px solid rgb(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 5px 6px 2px 0 rgb(0, 0, 0, 0.2);
  }
`;

export const Img = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const FooterPage = styled.footer`
  padding: 60px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

export const A = styled.a`
  text-decoration: none;
  color: #666;
  padding: 5px;
  border-radius: 100px;
  font-size: 24px;
  cursor: pointer;
  transition: 60ms ease-out;

  &:hover {
    color: #222;
  }

  &:active {
    scale: 0.7;
  }
`;

export const Span = styled.span`
  background: linear-gradient(-135deg, #df7688, magenta);
  color: #fff;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 14px;
  font-family: sans-serif;
`;

export const I = styled.i`
  padding: 17px 16px;
  background-color: green;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 6px 4px 0 rgb(0, 0, 0, 0.1);
  transition: 60ms ease-out;

  &:hover {
    background-color: darkgreen;
  }
  &:active {
    scale: 0.7;
  }
`;

export const ChatDiv = styled.div`
  position: fixed;
  bottom: 5%;
  right: 2%;
  display: flex;
  min-height: 500px;
  width: 400px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #aaa;
  box-shadow: 0 6px 4px 0 rgb(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const TextArea = styled.textarea`
  padding: 10px 20px;
  height: 70px;
  resize: none;
  width: 100%;
  font-family: sans-serif;
  font-size: 14px;
  color: #444;
  border: none;
  outline: none;
  background: transparent;
`;
