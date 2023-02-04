console.log("It is alive");

// Using nested callbacks

const makeSaladCallback = () => {
  setTimeout(() => {
    console.log("All vegetables diced");
    setTimeout(() => {
      console.log("Salt added");
      setTimeout(() => {
        console.log("Oil added");
        setTimeout(() => {
          console.log("Salad mixed");
          setTimeout(() => {
            console.log("Salad served");
          }, 1500);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 2000);
};

// makeSaladCallback();

const testPromiseFunc = () => {
  return new Promise((resolve, reject) => {
    // resolve("Promise Success");
    if (Math.random() < 0.5) {
      setTimeout(() => {
        reject("Something went wrong");
      }, 1500);
    }

    if (Math.random() > 0.5) {
      setTimeout(() => {
        resolve("Promise was successful");
      }, 1500);
    }
  });
};

// testPromiseFunc()
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => console.log(`Promise finished at ${new Date()}`));

const firstPromiseFunc = () => {
  return new Promise((resolve, reject) => {
    // reject("SOMETHING WENT WRONG");
    setTimeout(() => {
      resolve({ msg: "First Promise Success" });
    }, 1500);
  });
};

const secondPromiseFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ msg: "Second Promise Success" });
    }, 1500);
  });
};

// firstPromiseFunc()
//   .then(value => {
//     console.log(value.msg);
//     return secondPromiseFunc();
//   })
//   .then(value => {
//     console.log(value.msg);
//   })
//   .catch(error => {
//     // In a promise chain only one catch is enough to read and handle the error
//     console.log(error);
//   });

//   Promises for making a salad

const cutVegetables = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All vegetables diced");
    }, 1500);
  });
};

const addOil = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Oil added");
    }, 1000);
  });
};

const addSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating an error
      //   resolve("Salt added");
      reject("No salt, it's over");
    }, 1000);
  });
};

const mixSalad = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salad mixed");
    }, 2000);
  });
};

const serveSalad = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salad served");
    }, 1500);
  });
};

const makeSaladPromise = () => {
  cutVegetables()
    .then(value => {
      console.log(value);
      return addSalt();
    })
    .then(value => {
      console.log(value);
      return addOil();
    })
    .then(value => {
      console.log(value);
      return mixSalad();
    })
    .then(value => {
      console.log(value);
      return serveSalad();
    })
    .then(value => {
      console.log(value);
    })
    .catch(error => console.error(error))
    .finally(() => "Salad Finished");
};

// makeSaladPromise();

// ASYNC/AWAIT

// Defining async functions

async function testAsync() {}

const asyncExample = async () => {
  const firstPromiseData = await firstPromiseFunc();

  console.log(firstPromiseData.msg);

  const secondPromiseData = await secondPromiseFunc();

  console.log(secondPromiseData.msg);
};

// asyncExample();

// Fetching users and rendering list of users in html

const fetchUsersPromise = () => {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

fetchUsersPromise();

const fetchUsersAsync = async () => {
  try {
    const res = await fetch("https://js.typicode.com/users/");
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const renderUsers = users => {
  const userListEl = document.querySelector(".user-list");

  userListEl.innerHTML = users
    .map(user => `<li>Name: ${user.name} | Email: ${user.email}`)
    .join("");
};

const app = async () => {
  try {
    const users = await fetchUsersAsync();

    console.log(users);

    renderUsers(users);
  } catch (error) {
    console.log("FROM APP FUNC ", error);
  }
};

app();

const makeSaladAsync = async () => {
  try {
    const stepOne = await cutVegetables();
    console.log(stepOne);
    const stepTwo = await addOil();
    console.log(stepTwo);
    const stepThree = await addSalt();
    console.log(stepThree);
    const stepFour = await mixSalad();
    console.log(stepFour);
    const stepFive = await serveSalad();
    console.log(stepFive);
  } catch (error) {
    document.querySelector(".error").textContent = error;
  }
};

// makeSaladAsync();
