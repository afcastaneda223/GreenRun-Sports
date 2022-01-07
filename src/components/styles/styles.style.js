import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    border: 2px solid red;
    border-radius: 30px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Cardwrap = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    border: 2px solid blue;
    height: 100vh;
    width: 100vw;
    border-radius: 30px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;
    color: ${(props) => props.theme.color};
`;

const Cardimg = styled.div`
    border:2px solid green;
    border-radius: 30px;
    width: 100vw;
    height: 60vh;
`;

const Themebtn = styled.button`
    border: none;
    align-self: flex-start;
    background-color: ${(props) => props.theme.button.backgroundColor};;
    color: #F7D047;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 16px;
    margin: 20px;
    padding: 13px 15px;
    width: auto;
    position: absolute
`;

export {
  Container, Cardwrap, Cardimg, Themebtn,
};
