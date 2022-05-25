import Styled from 'styled-components';

export const CardTask = Styled.div`
    margin: 2px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    font-family: 'Roboto';
    font-size: 14px;
    padding: 3px;
`;

export const InfoTitle = Styled.p`
    color: #1B42A5;
    font-weight: 500;
`;

export const IconsBtn = Styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
`;
