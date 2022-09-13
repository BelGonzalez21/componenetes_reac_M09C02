// import React from 'react';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
function App() {
  return (
    // <React.Fragment> // como no utilizo el import React no lo necesito.
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    // </React.Fragment>
  );
}

export default App;
