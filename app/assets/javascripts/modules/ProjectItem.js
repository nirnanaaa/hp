import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: 'Florian',
      text: 'Kasper',
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }
  onScroll() {
    // this.setState({});
  }
  // componentDidMount: function() {
  //       window.addEventListener('scroll', this.onScroll, false);
  //   },
  //   componentWillUnmount: function() {
  //       window.removeEventListener('scroll', this.onScroll, false);
  //   }
  animateName() {
    const {beeings} = this.state;
    let cur = 0;
  }
  render() {
    const {topText, text} = this.state;
    const {projectName, start, end, introduction, image, tools, target} = this.props;
    const styles = {
      bg: {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover'
      }
    };
    const tooled = JSON.parse(tools);
    return (
      <a
        className="project"
        href={target}
        style={styles.bg}
      >
      <div className="overlay"></div>
        <div className="labels">
          <h1>{projectName}</h1>
          <p>{introduction}</p>
          <span>{start} - {end}</span>
          <div className="images">
            {tooled.map((tool, index) => <img src={tool} height="48" key={index}/>)}
          </div>
        </div>
    </a>);
  }
}
export default function projectItem (element) {
  return ReactDOM.render(
      <Item
        element={element}
        image={element.dataset.image}
        projectId={element.dataset.id}
        tools={element.dataset.tools}
        projectName={element.dataset.name}
        introduction={element.dataset.introduction}
        start={element.dataset.start}
        target={element.dataset.target}
        end={element.dataset.end}
      />,
      element
    );
}
