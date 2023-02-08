import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

        /* width */
        ::-webkit-scrollbar {
            width: 10px;
            
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #FFF;
            border-radius: 5px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #7159c1;
            border-radius: 5px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: red;
        }
    }

    html, body #root {
        height: 100%;
    }

    body {
        font-size: 14px;
        background: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle