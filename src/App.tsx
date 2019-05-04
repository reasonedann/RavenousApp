import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RavenousApp from './components/RavenousApp';
import RavenousAppContext from './stores/AppStore';

ReactDOM.render(
    <RavenousAppContext.Consumer>
        {(store) => <RavenousApp store={store}/>}
    </RavenousAppContext.Consumer>,
    document.getElementById('app')
);