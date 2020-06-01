import axios from 'axios';

export default axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/place/photo',
    headers: {
        Authorization: 'Bearer AIzaSyDEQkC8S9sXPaCj3B7PJwGOr8n-gjNIhAM'
    }
});

