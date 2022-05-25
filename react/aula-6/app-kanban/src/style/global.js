import {createGlobalStyle} from 'styled-components';

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
</style>

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        overflow-x: hidden; 
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #e5e5e5;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
    }

    header {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #26038a;
        color: #fff;
    }

    h1 {
        font-size: 24px;
    }

`; 

