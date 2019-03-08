import React from 'react';
import ReactDOM from 'react-dom';
import StarMatch from './components/StarMatch';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<StarMatch />, document.body.appendChild(document.createElement('div')));

serviceWorker.register();
