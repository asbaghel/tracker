import React, { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackContext);
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <View>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline
          coordinates={track.locations.map((loc) => loc.coords)}
        ></Polyline>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 200,
  },
});
export default TrackDetailScreen;
