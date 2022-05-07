import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons";

const BackHeaderIcon = styled(AntDesign)`
    font-size: 30px;
`;

const OptionIcon1 = styled(Feather)`
    font-size: 25px;
`;

const OptionIcon2 = styled(Entypo)`
    font-size: 25px;
`;

const OptionIcon3 = styled(MaterialIcons)`
    font-size: 25px;
`;

const OptionIcon4 = styled(AntDesign)`
    font-size: 25px;
`;

const OptionIcon6 = styled(MaterialCommunityIcons)`
    font-size: 25px;
`;

const OptionIcon5 = styled(MaterialCommunityIcons)`
    font-size: 25px;
    margin: 0 5px 0 0;
`;

const ProfileOptionOpenIcon = styled(Entypo)`
    font-size: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
`;

const ProfileOptionBackIcon = styled(Ionicon)`
    font-size: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
`;

const HeaderBackIcon = styled(Ionicon)`
    font-size: 40px;
    margin: 0 5px 0 0;
`;

const StarIcon = styled(AntDesign)`
    font-size: 40px;
`;

const EmailIcon = styled(MaterialCommunityIcons)`
    font-size: 30px;
`;

const ProfileStatIcon = styled(MaterialIcons)`
    font-size: 30px;
`;

const ProfileStatIcon1 = styled(AntDesign)`
    font-size: 30px;
`;

const ProfileStatIcon2 = styled(Octicons)`
    font-size: 30px;
    margin: 0 0 0 8px;
`;

export {
    BackHeaderIcon,
    OptionIcon1,
    OptionIcon2,
    OptionIcon3,
    OptionIcon4,
    ProfileOptionOpenIcon,
    ProfileOptionBackIcon,
    HeaderBackIcon,
    OptionIcon5,
    OptionIcon6,
    StarIcon,
    ProfileStatIcon,
    ProfileStatIcon1,
    ProfileStatIcon2,
    EmailIcon
}