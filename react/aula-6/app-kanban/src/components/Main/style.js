import Styled from 'styled-components';

export const MainStyle = Styled.main`
    margin: 20px 41px;  
`;

export const H2 = Styled.h2`
    font-size: 18px;
    color: #26038a;
    border-bottom: 1px solid #26038a;
    font-weight: 700;
    width: 100%;
    margin-bottom: 18px; 
`;

export const Button = Styled.button`
    width: 320px;
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

export const TasksContainer = Styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const TasksName = Styled.div`
    width: 100%;
    height: 45px;
    color: white;
    border-radius: 5px 5px 0px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.todo ? '#D21B1B' : props.doing ? '#DFD600' : '#0CE155'};
`;

export const CardsContainer = Styled.div`
    width: 250px;
    height: auto;
    .cardtask {
        background-color: ${props => props.redcards ? '#FFD0D0' : props.yellowcards ? '#FFFDCE' : '#DFFAE8'};
        border: 1px solid ${props => props.redcards ? '#D21B1B' : props.yellowcards ? '#DFD600' : '#0CE155'};
    }
`;
