import * as Location from "expo-location";

const tenMetersWIthDegrees = 0.001;

const getLocation = (increment) => {
  return {
    timestamp: 10000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      latitude: 22.7069263 + increment * tenMetersWIthDegrees,
      longitude: 75.8901352 + increment * tenMetersWIthDegrees,

      altitude: 5,
      altitudeAccuracy: 5,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });

  counter++;
}, 1000);
