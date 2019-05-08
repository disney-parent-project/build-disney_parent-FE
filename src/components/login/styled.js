import styled from 'styled-components';
import LargeMickeyEars from '../../assets/large_mickey_ears.png';
import {Link} from 'react-router-dom';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  width: 100vw;
  height: 100vh;
`;

export const LoginHeader = styled.h1`
  display: flex;
	font-family: 'Merienda', cursive;
	color: white;
  background: url('${LargeMickeyEars}');
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  width: 100%;
  height: 35%;
`;

export const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 25%;
`;

export const StyledLabel = styled.label`
  justify-content: flex-start;
  color: #303eff;
  width: 75%;
  font-family: 'Merienda', cursive;
  font-size: .7rem;
  margin-bottom: 2px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 75%;
  height: 35px;
  border-radius: 3px;
`;

export const StyledSubmitInput = styled.input`
  display: flex;
  width: 25%;
  height: 5%;
  border-radius: 100px;
  align-self: center;
  font-weight: bold;
  font-size: 1.1rem;
	font-family: 'Merienda', cursive;
  margin-top: 15%;
  color: white;
  background:
    linear-gradient(to right,
      #303eff, 
      #FFF 300%);
`;

export const ForgotPasswordLink = styled(Link)`
  text-align: right;
  width: 75%;
  font-size: .8rem;
`;