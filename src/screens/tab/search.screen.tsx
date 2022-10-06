import { Input, Icon } from "native-base";
import { MagnifyingGlass } from "phosphor-react-native";
import { View, TouchableOpacity, Text } from "react-native";
import { SafeArea } from "../../components/safe-area.component";

export const SearchBar = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <Input
        placeholder="Search Products"
        bg="#fff"
        _android={{
          _focus: { borderColor: "muted.300" },
        }}
        _ios={{
          _focus: { borderColor: "muted.300" },
        }}
        width="95%"
        rounded="md"
        py="3"
        px="1"
        fontSize="18"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<MagnifyingGlass />}
          />
        }
      />
    </View>
  );
};

export const SearchScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <View className="justify-center items-center">
        <SearchBar />
      </View>
    </SafeArea>
  );
};
