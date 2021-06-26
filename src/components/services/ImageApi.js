import React, {Component} from 'react';
import axios from 'axios';
import Searchbar from '../Searchbar/Searchbar';

const API_KEY = '21270738-7f7a1d93c56d2e649f64c176e';

class ImageApi extends Component {
    state = {
        hits: [],
    }
    componentDidMount() {
        
    }

    onChangeQuery = query => {
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo$page=1&per_page=12`)
            .then(response => {
                this.setState({ hits: response.data.hits });
            })
    }
    render() {
        const { hits } = this.state;
        return (
            <div>
                <Searchbar onSubmit={this.onChangeQuery}/>
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