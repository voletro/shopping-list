import { useNavigation } from "@react-navigation/native";
import { Input, Icon, Row } from "native-base";
import { Barcode, MagnifyingGlass } from "phosphor-react-native";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { SafeArea } from "../../components/safe-area.component";

export const SearchBar = () => {
  const navigation = useNavigation();
  return (
    <View className="rounded-lg mb-2 border-gray-200 border-[1px] bg-gray-50 w-[95%] mt-2 justify-between">
      <Row className="w-11/12">
        <View className="m-3">
          <MagnifyingGlass />
        </View>
        <TextInput
          placeholder="Search Products"
          className="rounded-md text-lg w-[80%]"
        />
        <TouchableOpacity
          className="m-3"
          onPress={() => navigation.navigate("BarcodeScreen")}
        >
          <Barcode />
        </TouchableOpacity>
      </Row>
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
