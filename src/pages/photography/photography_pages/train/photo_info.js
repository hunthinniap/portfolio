import AWS from 'aws-sdk';


const photos  = [
];

AWS.config.update({
  region: 'us-east-2', // Update with your bucket's region
  // Credentials may not be necessary for public buckets
  // accessKeyId: 'YOUR_ACCESS_KEY',
  // secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
});

const s3 = new AWS.S3();

const listPhotosInFolder = async () => {
  const params = {
    Bucket: 'hunthinniapasset',
    Prefix: 'train/', // The folder path in the bucket
  };

  try {
    const data = s3.listObjectsV2(params);
    // 'data.Contents' will contain information about files in the folder
   
    return data;
  } catch (error) {
    console.error('Error fetching photos from S3:', error);
    return [];
  }
};

// Function to collect photo links into a list
const collectPhotoLinks = async () => {
  const photoLinks =  listPhotosInFolder();
  return photoLinks;
};

// Call the function to get the list of photo links
const listOfPhotoLinks =  collectPhotoLinks();
console.log(listOfPhotoLinks);


export {
    photos,
};