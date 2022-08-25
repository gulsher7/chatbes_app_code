//import liraries
import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import HorizontalLine from '../../Components/HorizontalLine';
import RoundImage from '../../Components/RoundImage';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constatns/imagePath';
import strings from '../../constatns/lang';
import navigationStrings from '../../constatns/navigationStrings';
import actions from '../../reudx/actions';
import colors from '../../styles/colors';
import styles from './styles';



const Users = ({ navigation }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await actions.fetchUsers()
            console.log("res fetch users", res)
            if (!!res?.data) {
                setData(res.data.users)
            }
        } catch (error) {
            console.log("error raised during fetch user", error)
        }
    }



    const onPressRight = () => {
        navigation.goBack()
    }

    const onPressItem = useCallback((item) => {

    }, [])


    const renderItem = useCallback(({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => onPressItem(item)} activeOpacity={0.7} style={styles.headerStyle}>
                <RoundImage
                    image={item?.profileImage}
                    size={40}
                />
                <Text style={styles.userName}>{item?.name}</Text>
            </TouchableOpacity>
        )
    }, [data])

    const listEmptyComponent = useCallback(() => {
        return (
            <View style={styles.listEmptyStyle}>
                <Text>No User Found</Text>
            </View>
        )
    }, [data])

    const listHeaderComponent = useCallback(() => {
        return (
            <View style={styles.headerStyle}>
                <RoundImage
                    image={imagePath.icGroup}
                    isStatic={true}
                    size={40}
                />
                <Text style={styles.newGroupText}>{strings.NEW_GROUP}</Text>

            </View>
        )
    }, [data])

    return (
        <WrapperContainer
            containerStyle={{ paddingHorizontal: 0 }}
        >
            <HeaderComponent
                rightPressActive={false}
                centerText={strings.NEW_CHAT}
                containerStyle={{ paddingHorizontal: 8 }}
                rightText={strings.CANCEL}
                rightTextStyle={{ color: colors.lightBlue }}
                onPressRight={onPressRight}
            />

            <FlatList
                data={data}
                renderItem={renderItem}
                ListEmptyComponent={listEmptyComponent}
                contentContainerStyle={{ flexGrow: 1 }}
                ListHeaderComponent={listHeaderComponent}
                ItemSeparatorComponent={() => <HorizontalLine />}

            />


        </WrapperContainer>
    );
};

export default Users;
