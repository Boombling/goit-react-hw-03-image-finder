import React, {Component} from 'react';
import Searchbar from '../Searchbar/Searchbar';
import fetchImage from '../services/image-api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal'



class ImageGallery extends Component {
    state = {
        hits: [],
        currentPage: 1,
        searchQuery: '',
        isLoading: false,
        error: null,
        showModal: false,
        largeImage: ''
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

    toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
    }

    showModalImage = largeImageURL => {
        this.setState({
            largeImage: largeImageURL,
            showModal: true
        })
    }

    render() {
        const { hits, isLoading, error, showModal } = this.state;
        const loadMoreButton = hits.length > 0 && !isLoading;
        return (
            <div>
                {error && <h1>Search is incorrect</h1>}

                <Searchbar onSubmit={this.onChangeQuery}/>
                <ul className="ImageGallery">
                    <ImageGalleryItem
                        hits={this.state.hits}
                        onClick={this.showModalImage}
                        />
                </ul>
                {isLoading && <h1>Loading...</h1>}
                {loadMoreButton && (
                    <Button onClick={this.fetchImages} />
                )}
                {showModal &&
                    <Modal onClose={this.toggleModal} img={this.state.largeImage} />}
            </div>
        )
    }
}

export default ImageGallery