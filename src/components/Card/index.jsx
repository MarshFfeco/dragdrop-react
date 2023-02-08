import React from "react"

import logo from '../../assets/images/img.jpg'

import { Container, Label } from "./styles";

function Card({ data }) {
    return (
        <Container>
            <header>
                { data.labels.map(label => <Label key={label} color={label} /> ) }
            </header>

            <p>{data.content}</p>

            <img src={logo} alt="" />
        </Container>
    )
}

export default Card