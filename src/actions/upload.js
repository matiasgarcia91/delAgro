export const VIDEO_UPLOAD_PENDING = 'VIDEO_UPLOAD_PENDING';
export const VIDEO_UPLOAD_SUCCESS = 'VIDEO_UPLOAD_SUCCESS';
export const VIDEO_UPLOAD_ERROR = 'VIDEO_UPLOAD_ERROR';

function buildFormData(video) {
  const data = new FormData();
  data.append('file', {
    uri: video,
    name: 'video',
  });
  return data;
}

export const uploadVideo = video => (dispatch) => {
  dispatch({ type: VIDEO_UPLOAD_PENDING });
  fetch('http://localhost:8000/upload', {
    method: 'post',
    body: buildFormData(video),
  })
    .then((response) => {
      dispatch({ type: VIDEO_UPLOAD_SUCCESS, video: JSON.parse(response._bodyInit).video });
    })
    .catch((error) => {
      dispatch({ type: VIDEO_UPLOAD_ERROR, error });
    });
};

