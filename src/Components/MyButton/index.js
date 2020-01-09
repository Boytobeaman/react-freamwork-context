import React, { useContext } from 'react';
import { AppContext } from '../../MainPage/AppContext'
import { Button, Badge } from 'antd';

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
function MyButton(){
  const {toggleOnOff, buttonText} = useContext(AppContext)
  return (
    <div className="button-wrap">
      <Button onClick={toggleOnOff} type="primary">Shared global variable{' '} <Badge className="ml-2" count={buttonText} /></Button>
    </div>
  )
}
export default MyButton;