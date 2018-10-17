import React, { component } from 'react';
import axios from 'axios'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }


    componentDidMount() {
        axios.get('/api/products').then(response => {
            console.log('response in Main.js', response)
        })
    }

    render() {
        return (
            <div>
                hello
            </div>

        )
    }
}

export default Main;