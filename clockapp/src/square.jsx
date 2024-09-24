 
// function Square(props){
//     return(<>
//     <button name='square' >{props.value}</button>
//     </>)
// }
// export default Square;

import './App.css'
function Square(props){
    
    return(<>
       <button className='square' onClick={props.onSquareClick}>{props.value}</button>
       
    </>)
} 

export default Square;