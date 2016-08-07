import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  navItem(module, title, target) {
    return (
      <a
        href={target}
        title={title}
      >
        {title}
      </a>
    );
  }
  openMenu() {
    this.setState({open: !this.state.open});
  }
  render() {
    const {open} = this.state;
    const styles = {
      menu: {
        position: (open ? 'fixed' : 'relative'),
        backgroundColor: '#fff',
      },
      pos: {
        display: (open ? 'block' : 'none')
      },
      disabled: {
        display: 'none'
      }
    };
    return (
      <nav className="mobile" style={styles.menu}>
        <div className="open" onClick={this.openMenu.bind(this)}>
          <i className="material-icons">{open ? 'close' : 'menu'}</i>
        </div>
        <menu className="items" style={styles.pos}>
          <li style={styles.disabled}>
            {this.navItem('React.Edges.Home', 'Home', '/')}
          </li>
          <li style={styles.disabled}>
            {this.navItem('React.Edges.Development', 'Development', '/my/development')}
          </li>
          <li style={styles.disabled}>
            {this.navItem('React.Edges.Projects', 'Projects', '/my/projects')}
          </li>
          <li>
            {this.navItem('React.Edges.Work', 'Work', '/my/work')}
          </li>
          <li>
            {this.navItem('React.Edges.About', 'About', '/my/about')}
          </li>
          <li>
            {this.navItem('React.Edges.Contact', 'Contact', '/my/contact')}
          </li>
        </menu>
      </nav>
    );
  }
}
export default function playMobileNav (element) {
  return ReactDOM.render(<MobileNav element={element} />, element);
}
