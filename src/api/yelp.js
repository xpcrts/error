import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer IxhVO1K2MCGbwdea6isbcMFgHZfsCAfTbzp62uH6UF9olyc-Qv7mRRD1Mp6mkooIiEKxOMOrnTgdKFCw3tWtkiBDMrfM3Me7fT1jKTg8frhldCT4gy4oe9-iE3q5XnYx'
    }
});

