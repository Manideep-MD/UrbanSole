import React from 'react';
import FastImage from '@d11/react-native-fast-image';

const FastImageView = ({ uri, style, resizeMode = 'contain' }: any) => {
    return (
        <FastImage
            source={{ uri, priority: FastImage.priority.normal }}
            style={style}
            resizeMode={resizeMode}
        />
    );
};

export default FastImageView;
