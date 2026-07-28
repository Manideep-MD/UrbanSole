import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import { COLORS } from '@utils/Constants';
import { SCREENS } from '@constants/screenNames';
import { ADMIN_SHOE_LIST_TEXT } from '@constants/AdminShoeList';
import ShoeCard from '@components/ShoeCard/ShoeCard';
import CustomFlatList from '@components/CustomFlatList/CustomFlatList';
import { navigate } from '@utils/NavigationUtils';

const AdminShoeList = () => {
    const styles = createStyle(COLORS)
    const shoes = useSelector((state: any) => state.shoes.shoes)

    const renderItem = useCallback(({ item, index }: any) => (
        <ShoeCard
            shoe={item}
            index={index}
            actionLabel={ADMIN_SHOE_LIST_TEXT.EDIT_LABEL}
            onPress={() => navigate(SCREENS.ADMIN_SHOE_FORM, { shoeId: item.id })}
        />
    ), [])

    return (
        <View style={styles.container}>
            <CustomFlatList
                data={shoes}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.list}
                emptyText={ADMIN_SHOE_LIST_TEXT.EMPTY_TEXT}
                emptyTextStyle={styles.emptyText}
            />

            <TouchableOpacity style={styles.fab} onPress={() => navigate(SCREENS.ADMIN_SHOE_FORM, {})}>
                <Icon name="add" size={26} color={COLORS.background} />
            </TouchableOpacity>
        </View>
    );
};

export default AdminShoeList;
