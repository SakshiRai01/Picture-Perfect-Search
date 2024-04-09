import axios from 'axios';

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID CIZJvAbFbJCWmi7n1O9Qn_Qu8WHNwGPKYcFZy5J-QRo'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;