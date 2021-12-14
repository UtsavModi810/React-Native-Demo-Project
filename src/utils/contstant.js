const images = [
  {
    id: 1,
    name: 'image 1',
    uri: require('../assets/img/captain.jpg'),
  },
  {
    id: 2,
    name: 'image 2',
    uri: require('../assets/img/hulk.jpg'),
  },
  {
    id: 3,
    name: 'image 3',
    uri: require('../assets/img/ironman.jpg'),
  },
  {
    id: 4,
    name: 'image 4',
    uri: require('../assets/img/thor.jpg'),
  },
  {
    id: 5,
    name: 'image 1',
    uri: require('../assets/img/captain.jpg'),
  },
  {
    id: 6,
    name: 'image 2',
    uri: require('../assets/img/hulk.jpg'),
  },
  {
    id: 7,
    name: 'image 3',
    uri: require('../assets/img/ironman.jpg'),
  },
  {
    id: 8,
    name: 'image 4',
    uri: require('../assets/img/thor.jpg'),
  },
];

const Foods = [
  {id: '1', uri: require('../assets/img/thor.jpg')},
  {id: '2', uri: require('../assets/img/thor.jpg')},
  {id: '3', uri: require('../assets/img/thor.jpg')},
  {id: '4', uri: require('../assets/img/thor.jpg')},
  {id: '5', uri: require('../assets/img/thor.jpg')},
];

// api response codes
const responseCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  UNPROCESSABLE_REQUEST: 422,
  INTERNAL_SERVER_ERROR: 500,
  TOKEN_INVALID: 503,
  NO_INTERNET: 522,
  BAD_GATEWAY: 502,
};

// api methods
const apiMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export default {
  apiMethods,
  responseCode,
  Foods,
  images,
}
