import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import { COLORS } from '@utils/Constants';
import { SCREENS } from '@constants/screenNames';
import { SHOP_TEXT } from '@constants/Shop';
import ShoeCard from '@components/ShoeCard/ShoeCard';
import CustomFlatList from '@components/CustomFlatList/CustomFlatList';
import { navigate } from '@utils/NavigationUtils';

const Shop = () => {
    const styles = createStyle(COLORS)
    const shoes = useSelector((state: any) => state.shoes.shoes)

    const renderItem = useCallback(({ item, index }: any) => (
        <ShoeCard
            shoe={item}
            index={index}
            actionLabel={SHOP_TEXT.BUY_LABEL}
            onPress={() => navigate(SCREENS.SHOE_DETAILS, { shoeId: item.id })}
        />
    ), [])

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{SHOP_TEXT.HEADER_TITLE}</Text>
                <View style={styles.headerIcons}>
                    <Icon name="search-outline" size={22} color={COLORS.text} />
                    <View style={styles.headerIconWrap}>
                        <Icon name="heart-outline" size={22} color={COLORS.text} />
                        <View style={styles.dot} />
                    </View>
                    <View style={styles.headerIconWrap}>
                        <Icon name="notifications-outline" size={22} color={COLORS.text} />
                        <View style={styles.dot} />
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <CustomFlatList
                    data={shoes}
                    renderItem={renderItem}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    contentContainerStyle={styles.list}
                    ListHeaderComponent={
                        <View style={styles.sectionRow}>
                            <Text style={styles.sectionTitle}>{SHOP_TEXT.RECOMMENDATION_LABEL}</Text>
                            <Icon name="grid-outline" size={18} color={COLORS.muted} />
                        </View>
                    }
                    emptyText={SHOP_TEXT.EMPTY_TEXT}
                    emptyTextStyle={styles.emptyText}
                />
            </View>
        </SafeAreaView>
    );
};

export default Shop;
