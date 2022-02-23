const defaultProducts = [
  {
    id: "iphone",
    name: "Iphone",
    price: 1000,
  },
  {
    id: "samsung",
    name: "Samsung",
    price: 2000,
  },
];

const createClient = (name, lastName) => {
  const interests = [];

  const subscribeInterest = (interest) => {
    interests.push(interest);
  };

  const notifyInterests = (listProductInterestChange) => {
    console.log("Recebido no Email do Cliente: ", name, lastName);

    listProductInterestChange.forEach((productChanged) =>
      console.log("Produto que mudou: ", productChanged.name)
    );
  };

  return { name, lastName, notifyInterests, interests, subscribeInterest };
};

const createPushNotification = () => {
  let states = {
    interests: [],
    observers: [],
    listProductsChanged: [],
  };

  const subscribeInterest = (interest) => {
    states.interests.push(interest);
  };

  const subscribe = (observer) => {
    states.observers.push(observer);
  };

  const hasInterestInProductChanged = (product) => {
    if (!product) return false;
    return states.interests.some((interest) => interest === product.id);
  };

  const notify = (productChanged) => {
    if (!hasInterestInProductChanged(productChanged)) return;

    console.log(`Notification ${states.observers.length} Observer(s)`);

    states.observers.forEach((observerFunction) =>
      observerFunction(states.listProductsChanged, defaultProducts)
    );
  };

  const updateProducts = (productChanged) => {
    states.listProductsChanged.push(productChanged);
    notify(productChanged);
  };

  return {
    states,
    notify,
    subscribe,
    updateProducts,
    subscribeInterest,
  };
};

const client = createClient("John", "Doe");
const pushNotification = createPushNotification();

client.subscribeInterest("iphone");
client.subscribeInterest("samsung");
client.interests.forEach((interest) =>
  pushNotification.subscribeInterest(interest)
);

pushNotification.subscribe(client.notifyInterests);
pushNotification.updateProducts({
  id: "iphone",
  name: "Iphone",
  price: 1000,
});
pushNotification.updateProducts({
  id: "samsung",
  name: "Samsung",
  price: 1000,
});
