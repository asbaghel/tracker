import React, { useContext } from "react";

import { Button, Text, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from '../hooks/useSaveTrack'
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

 const [saveTrack]=useSaveTrack()
  return (
    <>
      <Text>TrackForm</Text>

      <Spacer>
        <Input
          value={name}
          placeholder="Enter Name"
          onChangeText={changeName}
        ></Input>
      </Spacer>

      <Spacer>
        {recording ? (
          <Button title=" Stop Recording " onPress={stopRecording}></Button>
        ) : (
          <Button title=" Start Recording " onPress={startRecording}></Button>
        )}

       
      </Spacer>
<Spacer>
{!recording && locations.length ? <Button title="Save"  onPress={saveTrack}></Button> : null}
</Spacer>
     
    </>
  );
};

export default TrackForm;
