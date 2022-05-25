import Styled from 'styled-components';

export const FormField = Styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`;

export const H2 = Styled.h2`
    font-size: 18px;
    color: #26038a;
    border-bottom: 1px solid #26038a;
    font-weight: 700;
    width: 100%;
    margin-bottom: 18px; 
`;

export const InputArea = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Fieldset = Styled.fieldset`
    text-align: center;
    box-sizing: border-box;
    width: 210px;
    height: 40px;
    background: #FFFFFF;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #26038A;
    border-radius: 10px;
    overflow-y: hidden; 
`;

export const Legend = Styled.legend`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #26038a;
    overflow-y: hidden; 
`;

export const Input = Styled.input`
    width: 100%;
    height: 100%;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    border-radius: 10px;
    padding: 3px;

    :focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`;

export const Select = Styled.select`
    width: 100%;
    height: 100%;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    border-radius: 10px;
    padding: 3px;

    :focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }    
    :option {
        color: black;
        background: white;
    }
`; 

export const Button = Styled.button`
    width: 319px;
    height: 36px;
    background-color: #1B42A5;
    border-radius: 5px;
    border: none;
    margin: 18px 0 20px 0;
    color: #fff;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
`; 