import { View, Image } from 'react-native';

/* The Animated component looks at the style prop of the component. It also determines which values to animate and applies updates to create an animation */
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function EmojiSticker({ imageSize, stickerSource }) {

    const scaleImage = useSharedValue(imageSize);

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value = scaleImage.value * 2;
            }
        });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });


    return (
        <View style={{ top: -350 }}>
            <GestureDetector gesture={doubleTap}>
                <Animated.Image
                    source={stickerSource}
                    resizeMode="contain"
                    style={[imageStyle,{ width: imageSize, height: imageSize }]}
                />
            </GestureDetector>
        </View>
    );
}
