import React, { Component } from 'react';
import ImageApi from './components/services/ImageApi';
// import axios from 'axios';

// const ArticleList = ({ articles }) => (
//   <ul>
//     {articles.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// class App extends Component {
//   state = {
//     articles: [],
//   };

//   componentDidMount() {
//     axios
//       .get('https://hn.algolia.com/api/v1/search?query=react')
//       .then(response => this.setState({ articles: response.data.hits }));
//   }

//   render() {
//     const { articles } = this.state;

//     return articles.length > 0 ? <ArticleList articles={articles} /> : null;
//   }
// }
class App extends Component {
  render() {
    return (
      <div>
        <ImageApi/>
      </div>
    )
  }
}

export default App;
