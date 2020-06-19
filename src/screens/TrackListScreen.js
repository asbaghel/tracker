import React, { useContext } from "react";

import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";
const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log(state, "hi there satre");
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks}></NavigationEvents>

      <FlatList
        data={state}
        keyExtractor={(item) => {
          item._id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem
                chevron
                style={styles.listItem}
                title={item.name}
                onPress={() => {
                  navigation.navigate("TrackDetail", { _id: item._id });
                }}
              ></ListItem>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

TrackListScreen.navigationOptions = {
  title: "Tracks",
};
const styles = StyleSheet.create({
  listItem: {
    borderTopWidth: 0.4,
    borderColor: "grey",
   
  },
});
export default TrackListScreen;
