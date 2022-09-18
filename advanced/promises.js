//Callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    callback("this is callback error", undefined);
  }, 2000);
};

getDataCallback((err, data) => {
  if (err) {
  } else {
    console.log(data);
  }
});

//promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("this is the promise data");
    reject("this is my promise error");
  }, 2000);
});

myPromise.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
