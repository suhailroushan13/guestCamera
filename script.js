// Dummy photos array. Replace with your actual photos.
const photos = [
  "./photo1.png",
  "./photo2.png",
  "./photo3.png",
  // ... add all 10 photos
];

// Display the most recent photo
const photoContainer = document.getElementById("photoContainer");
const recentPhoto = photos[photos.length - 1]; // Assuming the last photo in the array is the most recent
const imgElement = document.createElement("img");
imgElement.src = recentPhoto;
imgElement.alt = "Recent Photo";
photoContainer.appendChild(imgElement);
