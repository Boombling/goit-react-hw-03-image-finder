import React, {Component} from 'react';
import axios from 'axios';



class ImageApi extends Component {
    state = {
        hits: [],
    }
    componentDidMount() {
        axios.get('https://pixabay.com/api/?key=21270738-7f7a1d93c56d2e649f64c176e&q=dog&image_type=photo$page=1&per_page=12')
            .then(response => {
                this.setState({ hits: response.data.hits });
        })
    }
    render() {
        const { hits } = this.state;
        return (
            <div>
                <ul>
                    {hits.map(({ id, webformatURL, tags }) => (
                        <li key={id}>
                            <img src={webformatURL} alt={tags} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ImageApi