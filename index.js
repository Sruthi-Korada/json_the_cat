  
// const { fetchBreedDescription } = require('./breedFetcher');

// const breedName = process.argv.slice(2);

// fetchBreedDescription(breedName, (error, desc) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(desc);
//   }
// });


const {fetchBreedDescription} = require("./breedFetcher");
const breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log(`Error fetch details: ${error}`);
  } else {
    //body has been parsed into an array containing one obj
    console.log(desc);
  }
});