import {useEffect} from 'react';
import {withTiming} from 'react-native-reanimated';
import useAnimatedStyleProperty from '../../../common/hooks/useAnimatedStyleProperty';
const animationDuration = 300;

type UseAnimatedListType = {
  isLoading: boolean;
};

const useAnimatedOpacity = ({isLoading}: UseAnimatedListType) => {
  const {animatedValue: opacityValue, animatedStyle: animatedOpacityStyle} =
    useAnimatedStyleProperty('opacity', 0);

  useEffect(() => {
    if (!isLoading) {
      opacityValue.value = withTiming(1, {duration: animationDuration});
    } else {
      opacityValue.value = 0;
    }
  }, [opacityValue, isLoading]);
  return {animatedOpacityStyle};
};

export default useAnimatedOpacity;
