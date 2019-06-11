import React from 'react';
import axios from 'axios';

const App = props => {

    const login = () => {
        axios.get('/api/auth/fb-login').then(res => {
            console.log(res.data)
        })
    }

    return(
        <div>
            <h1>App</h1>
            <a href='/api/auth/fb-login'>Login</a>
        </div>
    )
}

export default App;