import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RavenousApp } from './components/RavenousApp';
import { Provider, AppStore } from './stores/AppStore';

const appStore = new AppStore();

ReactDOM.render(
    <Provider value={appStore}>
        <RavenousApp />
    </Provider>,
    document.getElementById('app')
);