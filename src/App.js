import React from 'react';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default App;