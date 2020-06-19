import React, { useContext, useCallback } from "react";
import "../_mockLocation";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import {
  SafeAreaView,
  NavigationEvents,
  withNavigationFocus,
} from "react-navigation";

import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import TrackForm from "../components/TrackForm";
import { ScrollView } from "react-native-gesture-handler";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      return addLocation(location, state.recording);
    },
    [state.recording]
  );

  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <ScrollView>
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text h3>TrackCreateScreen</Text>
        <Map></Map>

        {err ? <Text>Please enablel location Services</Text> : null}

        <TrackForm></TrackForm>
      </SafeAreaView>
    </ScrollView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus-square-o" size={30} color='blue'></FontAwesome>,
};

const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);
