import React from 'react';
import CssModules from 'react-css-modules'
import styles from './modalStatus.css';
import { compose, withStateHandlers } from 'recompose';
import { loadavg } from 'os';

// const Load = ({result, handleClick}) => (
//   <div styleName="loader">
//     <h1>Something</h1>  
//     <p styleName="content">{result.word? result.word: 'nothing to show'}</p>
//     <button onClick={handleClick} type="button">Click me</button>
//   </div>
// );

// const updaters = {
//   handleClick: () => evt => (
//     fetch('/api/hello')
//       .then(response => console.log(response) && response.json())
//       .then(myJson => console.log('my json', myJson) && myJson)
//   )
// };


const modalStatus = (props) => {
 console.log('props yo!', props)
 return(
 <div styleName="modStat">
    <h1>Something</h1>  
    <p styleName="content">{props.result.word? props.result.word: 'nothing to show'}</p>
    <button onClick={props.handleClick} type="button">Click me</button>
  </div>
  );
};

const updaters = {
  handleClick: () => evt => (
    fetch('/api/hello')
      .then(response => {
        console.log('response before turning it into json',response);
        return response.json();
      })
      .then(myJson => {
        console.log('my json', myJson)
        return {result: myJson};
      })
  )
};


// export default compose(
//   withStateHandlers({result: {}}, updaters),
// )(CssModules(Load, styles));
export default CssModules(modalStatus, styles)