import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { fontSizes, paddingSizes, marginSizes } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';

const HistoryItem = ({ item, index }) => {
  // return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
  return (
    <Text
      style={{
        color: item.status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md,
      }}>
      {item.subject}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  //   <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
  //     {focusHistory.length && (
  //       <>
  // <Text style={styles.title}>Things we've focused on</Text>
  // <FlatList
  //   style={{ flex: 1 }}
  //   contentContainerStyle={{ flex: 1, alignItems: 'center' }}
  //   data={focusHistory}
  //   renderItem={HistoryItem}
  // />
  //         <View style={styles.clearContainer}>
  //           <RoundedButton size={75} title="Clear" onPress={() => onClear()} />
  //         </View>
  //       </>

  //     )}
  //   </SafeAreaView>
  // );

  return (
    <SafeAreaView
      style={{ flex: 0.5, alignItems: 'center', color: colors.white }}>
      {focusHistory.length ? (
        <>
          <Text style={styles.title}>Things we've focused on</Text>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
            data={focusHistory}
            renderItem={HistoryItem}
          />
          <View style={styles.clearContainer}>
            <RoundedButton size={75} title="Clear" onPress={() => onClear()} />
          </View>
        </>
      ) : (
        <Text></Text>
      )}
    </SafeAreaView>
  );
};

//Line 27 <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>

const styles = StyleSheet.create({
  // historyItem: (status) => ({
  //   color: status > 1 ? 'red' : 'green',
  //   fontSize: fontSizes.md,
  // }),
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
  },
  clearContainer: {
    alignItems: 'center',
    paddingLeft: paddingSizes.md,
  },
});

// const styles = (size) =>
//   StyleSheet.create({
//     radius: {
//       borderRadius: size / 2,
//       width: size,
//       height: size,
//       alignItems: 'center',
//       justifyContent: 'center',
//       borderColor: colors.white,
//       borderWidth: 2,
//     },
//     text: { color: colors.white, fontSize: size / 3 },
//   });
