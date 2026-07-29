import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import useThemeColors from '@utils/useThemeColors';
import { SCREENS } from '@constants/screenNames';
import { ADMIN_SHOE_LIST_TEXT } from '@constants/AdminShoeList';
import ShoeCard from '@components/ShoeCard/ShoeCard';
import { navigate } from '@utils/NavigationUtils';

const AdminShoeList = () => {
    const colors = useThemeColors()
    const styles = createStyle(colors)
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
            <FlatList
                data={shoes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Text style={styles.emptyText}>{ADMIN_SHOE_LIST_TEXT.EMPTY_TEXT}</Text>}
            />

            <TouchableOpacity style={styles.fab} onPress={() => navigate(SCREENS.ADMIN_SHOE_FORM, {})}>
                <Icon name="add" size={26} color={colors.background} />
            </TouchableOpacity>
        </View>
    );
};

export default AdminShoeList;
