// import { useEffect, useState } from 'react';
// import google from '../api/google';
// import { REACT_APP_GOOGLE_API_KEY } from 'react-native-dotenv';
// import googleDetails from '../api/googleDetails';
// import ResultDetails from '../components/ResultDetails';
// import { View } from 'react-native';
// // import { resultID } from '../components/ResultDetails';
// // import ResultDetails from '../components/ResultDetails';
// import { resultExportToHook } from '../components/ResultDetails';
// import ResultList from '../components/ResultList';

// export default () => {
//     // console.log(">>>>>>>>>>>>>>>>>>", xResult);
//     const [ results, setResults ] = useState([]);
//     // const [ placeDetailsResults, setPlaceDetailsResults ] = useState([]);  
    
//     // console.log(resultExportToHook);
//     const searchApi = async ( searchTerm ) => {
//             const response = await google.get('/json', { 
//                 params: {
//                     key: REACT_APP_GOOGLE_API_KEY, 
//                     // location: '-33.8670522,151.1957362',
//                     // radius: 50000, 
//                     query: searchTerm, 
//                     // fields: photos,
//                     // type: searchTerm, 
//                     // inputtype: searchTerm, 
//                 }
//             });
//             setResults(response.data.results);
//     };
//     useEffect(() =>{
//         searchApi('pizza in singapore');  
//     }, [])
//     return [searchApi, results];
// };

// // export default MyHooks;