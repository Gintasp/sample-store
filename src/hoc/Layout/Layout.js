import React from 'react';
import Menu from '../../components/Menu';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
