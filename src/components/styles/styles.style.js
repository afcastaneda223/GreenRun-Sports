import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    margin: auto;
    width: 40vw;
    border-radius: 30px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 1200px) {
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
    border: 2px solid black;
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

const Cardcontent = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 30px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

const Form = styled.form`
    width: 100%;
    padding: 20px
`;

const FormLabel = styled.label`
  color: ${(props) => props.theme.form.labelColor};
  font-size: 10px;
  margin: 5px 0px 0px 15px;
  position: absolute;
`;

const Fromgroup = styled.div`
width: 100%;
margin: 20px;
`;

const FormControl = styled.input`
    background-color: ${(props) => props.theme.form.backgroundColor};
    border: 2px solid ${(props) => props.theme.form.borderColor};
    border-radius: 10px;
    color: ${(props) => props.theme.form.color};
    width: 90%;
    padding: 20px 15px 15px 15px;
    &:focus {
      outline: none;
      padding: 25px 15px 20px 15px;
    }
`;

const Button = styled.button`
border: none;
border-radius: 20px;
padding: 20px 40px 20px 40px;
margin: 30px 0px 0px 40px;
font-size: 15px;
color: white;
background: rgb(42,87,224);
background: linear-gradient(0deg, rgba(42,87,224,1) 0%, rgba(33,72,198,1) 100%);
-webkit-transition: background-position .7s,box-shadow .4s;
box-shadow: -1px -1px 30px -3px rgba(39,80,212,0.88);
align-self: start;
`;

export {
  Container, Cardwrap, Cardimg, Themebtn,
  Cardcontent, Form, Fromgroup, FormControl,
  FormLabel, Button,
};
