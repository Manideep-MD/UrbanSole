import React from 'react';
import { FlatList, Text } from 'react-native';

const defaultKeyExtractor = (item: any) => item?.id?.toString?.() ?? String(item?.id)

const CustomFlatList = ({ keyExtractor, emptyText, emptyTextStyle, ListEmptyComponent, ...rest }: any) => {
    return (
        <FlatList
            keyExtractor={keyExtractor || defaultKeyExtractor}
            ListEmptyComponent={
                ListEmptyComponent || (emptyText ? <Text style={emptyTextStyle}>{emptyText}</Text> : null)
            }
            showsVerticalScrollIndicator={false}
            {...rest}
        />
    );
};

export default CustomFlatList;
