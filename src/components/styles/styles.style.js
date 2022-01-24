import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    margin: auto;
    width: 40vw;
    border: 2px solid red;
    border-radius: 30px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 800px) {
        width: 60vw;
      }
      @media screen and (max-width: 800px) {
        width: 80vw;
      }
      @media screen and (max-width: 600px) {
        width: 100vw;
      }
`;

const Cardwrap = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    border: 2px solid blue;
    height: 100%;
    width: 100%;
    border-radius: 30px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;
    color: ${(props) => props.theme.color};
    transition: background-color 0.5s linear, color 0.5s linear;    
`;

const Cardimg = styled.div`
    border:2px solid green;
    border-radius: 30px;
    width: 100%;
    height: 60%;
`;

const Themebtn = styled.button`
    border: none;
    align-self: flex-start;
    background-color: ${(props) => props.theme.button.backgroundColor};;
    color: #F7D047;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 10px;
    margin: 20px;
    padding: 10px 12px;
    width: auto;
    position: absolute
`;

export {
  Container, Cardwrap, Cardimg, Themebtn,
};
