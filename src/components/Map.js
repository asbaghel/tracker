import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return (
      <ActivityIndicator
        size="large"
        style={{ marginTop: 200 }}
      ></ActivityIndicator>
    );
  }
  return (
    <View>
      <Text>Map</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          longitudeDelta: 0.1,
          latitudeDelta: 0.1,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        ></Circle>
        {console.log(locations.length)}
        <Polyline coordinates={locations.map((loc) => loc.coords)}></Polyline>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 200,
  },
});

export default Map;
