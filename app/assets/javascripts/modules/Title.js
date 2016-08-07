import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: 'Florian',
      text: 'Kasper',
      beeings: [
        'programmer',
        'mentor',
        'architect',
        'athlete'
      ]
    };
  }
  componentDidMount() {
    setTimeout(this.animateName.bind(this),2000);
  }
  animateName() {
    const {beeings} = this.state;
    let cur = 0;
    //
    // setInterval(() => {
    //
    //   this.setState({});
    // }, 3000);
  }
  render() {
    const {topText, text} = this.state;
    return (<div className="wrapper">
      <span className="top">{topText}</span>
      <span className="bottom">{text}</span>
    </div>);
  }
}
export default function animateTitle (element) {
  return ReactDOM.render(<Title element={element} />, element);
}
