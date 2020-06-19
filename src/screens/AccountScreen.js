import React, { useContext } from "react";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <View>
        <Button title="Sign out" onPress={signout}></Button>
      </View>
    </SafeAreaView>
  );
};
AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={30} color="blue" ></FontAwesome>,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 100,
    flex: 1,
    justifyContent: "center",
  },
});
export default AccountScreen;
