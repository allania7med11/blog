import api from "./api";

export default function uploadImageCallBack(file: File) {
  return new Promise((resolve, reject) => {
    debugger;
    const fb = new FormData();
    fb.append("image", file, file.name);
    api
      .upload(fb)
      .then((response) => {
        resolve({ data: { link: response.data } });
      })
      .catch((err) => {
        reject(err);
      });
  });
}
