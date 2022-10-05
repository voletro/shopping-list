import { SafeAreaView, StatusBar } from "react-native";

type Props = {
  children: JSX.Element;
};

export const SafeArea = ({ children }: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      {children}
    </SafeAreaView>
  );
};
