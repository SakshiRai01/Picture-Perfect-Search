import { useState } from 'react';
import Searchbar from './Components/Searchbar';
import ImageList from './Components/ImageList';
import searchImages from './api';

function App() {
  const [image, setImages] = useState([]);

  const handleSubmit = async(term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ImageList images={image} />
    </div>
  );
}

export default App;
