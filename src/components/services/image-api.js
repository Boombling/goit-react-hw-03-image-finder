import axios from 'axios';

const API_KEY = '21270738-7f7a1d93c56d2e649f64c176e';

const fetchImage = ({
    searchQuery = '',
    currentPage = 1,
    pageSize = 12
}) => {
    return axios
        .get(`https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=phot&page=${currentPage}&per_page=${pageSize}`)
        .then((response) => response.data.hits);
};

export default fetchImage 