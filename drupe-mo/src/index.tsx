import React from 'react';
import ReactDOM from 'react-dom';

import {Theme} from 'design-system';

ReactDOM.render(
    <React.StrictMode>
        <Theme name="FerretTheme">
            <div></div>
        </Theme>
    </React.StrictMode>
    ,
    document.getElementById('root') as HTMLElement
);
