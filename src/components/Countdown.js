import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fontSizes, paddingSizes, marginSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 60000;

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

export const Countdown = ({ minutes = 1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);
  const [millis, setMillis] = useState(null);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
    if (millis === 0) {
      onEnd();
    }
  }, [millis]);

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 60000) % 60;
  const seconds = (millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    paddingTop: paddingSizes.lg,
    backgroundColor: 'rgba(94,132,226,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});