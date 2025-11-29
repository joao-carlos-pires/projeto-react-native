import { BottomTabBarButton } from '@react-navigation/bottom-tabs';
import { ComponentProps } from 'react';

export function HapticTab(props: ComponentProps<typeof BottomTabBarButton>) {
  return <BottomTabBarButton {...props} />;
}
