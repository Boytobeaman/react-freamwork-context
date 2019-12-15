import React, { Component, useContext } from 'react';
import { AppContext } from '../../MainPage/AppContext'

// class Button extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {

//     return (
//       <div className="button-wrap">
//         <AppContext.Consumer>
//           {context =>(
//             <button onClick={context.toggleOnOff}>{context.buttonText} </button>
//           )}
//         </AppContext.Consumer>
//         <button onClick={context.toggleOnOff}>{context.buttonText} </button>
//       </div>
//     )
//   }
// }

// useContext can only be use in function component
function Button(){
  const {toggleOnOff, buttonText} = useContext(AppContext)
  return (
        <div className="button-wrap">
          <button onClick={toggleOnOff}>{buttonText} </button>
        </div>
  )
}
export default Button;