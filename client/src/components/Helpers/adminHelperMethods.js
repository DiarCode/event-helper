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
          return url;
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));

  return imageURL;
}

async function uploadAdviceService(imageUrl, title, body, link) {
  const response = await fetch(
    "https://event-helper-server.herokuapp.com/api/admin/add/advice",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adviceImageURL: imageUrl,
        adviceTitle: title,
        adviceBody: body,
        adviceLink: link
      }),
    }
  ).then(res => res.json());

  if (response.success) return alert("Successfully added to DB");
  else return alert("Error: " + response.error);
}

export { uploadAndGetURL, uploadAdviceService };
