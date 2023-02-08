import styled from "styled-components";

const Container = styled.div `
    position: relative;
    background-color: #FFF;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    cursor: grab;
    
    
    p { font-weight: bold; line-height: 20px; }

    header {
        position: absolute;
        top: -22px;
        left: 15px;
    }

    img {
        width: 24px;
        height: 24px;
        border-radius: 2px;
        margin-top: 5px;
    }
`;

const Label = styled.div `
    width: 10px;
    height: 10px;
    border-radius: 2px;
    display: inline-block;
    background: ${ props => props.color };
`;

export { Container, Label }