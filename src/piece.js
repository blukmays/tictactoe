import React from 'react'
import Glam from 'glamorous'

const PieceTitle = Glam.div({
    fontSize: '150px',
    border: '2px solid',
    padding: '50px',
})


export default (props) => (
    <PieceTitle>
        {props.type}
    </PieceTitle>
)