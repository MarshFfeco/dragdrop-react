import React, { useRef } from "react"
import { useDrag, useDrop } from "react-dnd"

import logo from '../../assets/images/img.jpg'

import { Container, Label } from "./styles";

function Card({ data, index }) {
    const ref = useRef();

    const [{ isDragging }, dragRef] = useDrag ({
        type: 'CARD',
        item: {id: data.id, index, content: data.content },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedIndex = item.index
            const tagetIndex = index;

            if(draggedIndex == tagetIndex) return;

            const targetSize = ref.current.getBoundingClientRect() 
            const targetCenter = (targetSize.bottom - targetSize.top) / 2

            const draggedOffSet = monitor.getClientOffset();
            const draggedTop = draggedOffSet.y - targetSize.top

            const nothingHere = draggedTop < targetCenter && draggedIndex < tagetIndex
            const nothingHere2 = draggedTop > targetCenter && draggedIndex > tagetIndex

            if(nothingHere || nothingHere2) return;

            
        }
    })

    dragRef(dropRef(ref))

    return (
        <Container ref={ref} isDragging={isDragging}>
            <header>
                { data.labels.map(label => <Label key={label} color={label} /> ) }
            </header>

            <p>{data.content}</p>

            <img src={logo} alt="" />
        </Container>
    )
}

export default Card