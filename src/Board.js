import React from 'react'
import Piece from './piece'
import Glam from 'glamorous'

const BoardPiece = Glam.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    height:'100vh',
    }
)

const Board = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]

export default () => (
    <BoardPiece>
  <div className="OPiece">
    <Piece type={Board [0]}/>
    <Piece type={Board [1]}/>
    <Piece type={Board [2]}/>
  </div>

 <div className="XPiece">
     <Piece type={Board [3]}/>
     <Piece type={Board [4]}/>
     <Piece type={Board [5]}/>
 </div>

  <div className="BlankPiece">
      <Piece type={Board [6]}/>
      <Piece type={Board [7]}/>
      <Piece type={Board [8]}/>
  </div>




    </BoardPiece>



)