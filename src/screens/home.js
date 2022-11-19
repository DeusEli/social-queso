import React, { useContext, useState } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import { View, Text } from "react-native";
import FormButton from "../components/formButton";
import { Red500, Amber100 } from "../utils/Colors";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View className="h-full w-full items-center justify-center">
      <Text className="text-lg">Home Queso | Welcome</Text>
    </View>
  );
};

export default Home;
