import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Video } from "expo-av";
import React, { useState, useRef } from "react";

export default function App() {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This Video Does Not Include Sound</Text>
      <Video
        ref={video}
        style={styles.video}
        source={require("./assets/{dcebe36d-8b87-481a-a9a1-8ccce3e3fbdd}.mov")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        <Button
          title="Play from 5s"
          onPress={() => video.current.playFromPositionAsync(5000)}
        ></Button>
        <Button
          title={status.isLooping ? "Set to not loop" : "Set to loop"}
          onPress={() => video.current.setIsLoopingAsync(!status.isLooping)}
        ></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginTop: 100,
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },

  buttons: {
    width: "35%",
    marginVertical: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
