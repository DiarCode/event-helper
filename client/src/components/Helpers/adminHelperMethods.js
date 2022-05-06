import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../firebase/firebase.config";

async function uploadAndGetURL(file) {
  const storageRef = ref(storage, `/adviceImages/${file.name + v4()}`);
  if (!file) return alert("No file uploaded");

  const imageURL = await uploadBytes(storageRef, file)
    .then(() => {
      return getDownloadURL(storageRef)
        .then(url => {
          alert("Successfully uploaded!");
          return url;
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));

  return imageURL;
}

export { uploadAndGetURL };
