const initDataLayerPush = (eventName, incomingObject) => {
  const baseObj = {
    'event': eventName
  };
  const dataLayerObject = {...baseObj, ...incomingObject};
  // eslint-disable-next-line no-undef
  dataLayer.push(dataLayerObject);
};

export { initDataLayerPush };
