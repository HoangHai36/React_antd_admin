console.log(
  "process env REACT_APP_DEV_REMOTE",
  process.env.REACT_APP_DEV_REMOTE
)

// export const API_BASE_URL =
//   process.env.NODE_ENV == "production" ||
//   process.env.REACT_APP_DEV_REMOTE == "remote"
//     ? "https://starter-mern.herokuapp.com/api/"
//     : "https://starter-mern.herokuapp.com/api/"

export const API_BASE_URL = "https://exam-dev-api.web5days.com:5001/api/";
export const ACCESS_TOKEN_NAME = "Authorization"
export const IMG_BASE_URL = "https://exam-dev-api.web5days.com:5001/";
