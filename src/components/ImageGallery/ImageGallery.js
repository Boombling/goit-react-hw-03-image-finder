import React, {Component} from 'react';
import Searchbar from '../Searchbar/Searchbar';
import fetchImage from '../services/image-api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';



class ImageGallery extends Component {
    state = {
        hits: [],
        currentPage: 1,
        searchQuery: '',
        isLoading: false,
        error: null
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages();
        }
    }
  
    onChangeQuery = query => {
        this.setState({ searchQuery: query, currentPage: 1, hits: [], error:null });
    }

    fetchImages = () => {
        const { currentPage, searchQuery } = this.state;
        const options = { searchQuery, currentPage };

        this.setState({ isLoading: true });

        fetchImage(options).then((hits) => {
            this.setState((prevState) => ({
                hits: [...prevState.hits, ...hits],
                currentPage: prevState.currentPage + 1,
            }));
        })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    }

    render() {
        const { hits, isLoading, error } = this.state;
        const loadMoreButton = hits.length > 0 && !isLoading;
        return (
            <div>
                {error && <h1>Search is incorrect</h1>}

                <Searchbar onSubmit={this.onChangeQuery}/>
                <ul className="ImageGallery">
                    {hits.map(({id, webformatURL, tags}) => (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        tags={tags}
                        />
                ))}
                        </ul>
                {isLoading && <h1>Loading...</h1>}
                {loadMoreButton && (
                    <button type='button' onClick={this.fetchImages}>Load more</button>
                )}
            </div>
        )
    }
}

export default ImageGallery