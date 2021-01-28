import React from 'react';

class Checky extends React.Component{
    render() {
      return (<input type="checkbox" checked={this.props.checked} />);
    }
}

export default Checky;