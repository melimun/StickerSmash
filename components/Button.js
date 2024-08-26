import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (

        <View style={styles.row}>
                 <View style={styles.column}>

      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
        <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.smallText, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
        
      </View>
      </View>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  // Styles from previous step remain unchanged.
  smallText: {
    fontSize:10,
    lineHeight: 21
  },
   row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
});
