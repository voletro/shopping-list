import { Input, Icon, Row } from "native-base";
import { MagnifyingGlass } from "phosphor-react-native";
import { View, TouchableOpacity, Text } from "react-native";
import { SafeArea } from "../../components/safe-area.component";

export const SearchBar = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View className="rounded-lg mb-2 border-gray-200 border-[1px] bg-gray-50 w-[95%]">
        <Row className="">
          <View className="m-3">
            <MagnifyingGlass />
          </View>
          <Input
            variant="unstyled"
            placeholder="Search Products"
            className=""
          />
        </Row>
      </View>
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
        className="py-3 px-1 rounded-md text-lg w-[95%]"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="muted.300"
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
