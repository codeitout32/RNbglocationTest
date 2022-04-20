import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Canvas,
  Fill,
  Image,
  BackdropBlur,
  ColorMatrix,
  useImage,
  Text,
  Circle,
} from '@shopify/react-native-skia';

const BlurBGg = () => {
  const r = 128;
  return (
    <Canvas
      style={{
        width: 600,
        height: 700,
        flex: 1,
        position: 'absolute',
        top: 20,
        zIndex: 100,
      }}>
      <Circle cx={r} cy={r} r={r} color="lightblue" />
      <BackdropBlur blur={5} />
      {/* <Fill color="rgba(0, 0, 0, 0.2)" /> */}

      <Text x={0} y={0} text="Hello World" familyName="serif" size={32} />
    </Canvas>
  );
};

export default BlurBGg;

const styles = StyleSheet.create({});
