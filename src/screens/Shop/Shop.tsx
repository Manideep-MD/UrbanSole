import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import createStyle from './style';
import useThemeColors from '@utils/useThemeColors';
import { SCREENS } from '@constants/screenNames';
import { SHOP_TEXT } from '@constants/Shop';
import ShoeCard from '@components/ShoeCard/ShoeCard';
import { navigate } from '@utils/NavigationUtils';

const Shop = () => {
    const colors = useThemeColors()
    const styles = createStyle(colors)
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
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{SHOP_TEXT.HEADER_TITLE}</Text>
                <View style={styles.headerIcons}>
                    <Icon name="search-outline" size={22} color={colors.text} />
                    <View style={styles.headerIconWrap}>
                        <Icon name="heart-outline" size={22} color={colors.text} />
                        <View style={styles.dot} />
                    </View>
                    <View style={styles.headerIconWrap}>
                        <Icon name="notifications-outline" size={22} color={colors.text} />
                        <View style={styles.dot} />
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <FlatList
                    data={shoes}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    contentContainerStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={styles.sectionRow}>
                            <Text style={styles.sectionTitle}>{SHOP_TEXT.RECOMMENDATION_LABEL}</Text>
                            <Icon name="grid-outline" size={18} color={colors.muted} />
                        </View>
                    }
                    ListEmptyComponent={<Text style={styles.emptyText}>{SHOP_TEXT.EMPTY_TEXT}</Text>}
                />
            </View>
        </SafeAreaView>
    );
};

export default Shop;
