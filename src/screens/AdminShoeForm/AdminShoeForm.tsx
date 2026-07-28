import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import createStyle from './style';
import { COLORS, AVAILABLE_SIZES } from '@utils/Constants';
import { ADMIN_SHOE_FORM_TEXT } from '@constants/AdminShoeForm';
import SizeSelector from '@components/SizeSelector/SizeSelector';
import FastImageView from '@components/FastImageView/FastImageView';

import { ADD_SHOE, UPDATE_SHOE, DELETE_SHOE } from '@redux/reducers/ShoesReducers';
import { REMOVE_SHOE_FROM_CART } from '@redux/reducers/CartReducers';
import { goBack } from '@utils/NavigationUtils';

const AdminShoeForm = ({ route }: any) => {
  const styles = createStyle(COLORS);
  const dispatch = useDispatch();
  const shoeId = route?.params?.shoeId;
  const existingShoe = useSelector((state: any) =>
    state.shoes.shoes.find((item: any) => item.id === shoeId),
  );

  const [brand, setBrand] = useState(existingShoe?.brand || '');
  const [cost, setCost] = useState(
    existingShoe ? String(existingShoe.cost) : '',
  );
  const [sizes, setSizes] = useState<number[]>(existingShoe?.sizes || []);
  const [imageUri, setImageUri] = useState(existingShoe?.imageUri || '');

  const parsedCost = parseFloat(cost);
  const isValid =
    brand.trim().length > 0 &&
    !isNaN(parsedCost) &&
    parsedCost > 0 &&
    sizes.length > 0;

  const handleCostChange = (text: string) => {
    const numericOnly = text.replace(/[^0-9.]/g, '');
    const [wholePart, ...decimalParts] = numericOnly.split('.');
    const sanitized =
      decimalParts.length > 0
        ? `${wholePart}.${decimalParts.join('')}`
        : wholePart;
    setCost(sanitized);
  };

  const toggleSize = (size: number) => {
    if (sizes.includes(size)) {
      setSizes(sizes.filter(item => item !== size));
    } else {
      setSizes([...sizes, size]);
    }
  };

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, response => {
      const uri = response?.assets?.[0]?.uri;
      if (uri) {
        setImageUri(uri);
      }
    });
  };

  const handleSave = () => {
    if (!isValid) {
      return;
    }

    const shoePayload = {
      id: existingShoe ? existingShoe.id : Date.now().toString(),
      brand: brand.trim(),
      cost: parsedCost,
      sizes: sizes.slice().sort((a, b) => a - b),
      imageUri: imageUri.trim() || undefined,
    };

    if (existingShoe) {
      dispatch(UPDATE_SHOE(shoePayload));
    } else {
      dispatch(ADD_SHOE(shoePayload));
    }

    goBack();
  };

  const handleDelete = () => {
    Alert.alert(
      ADMIN_SHOE_FORM_TEXT.DELETE_CONFIRM_TITLE,
      ADMIN_SHOE_FORM_TEXT.DELETE_CONFIRM_MESSAGE,
      [
        { text: ADMIN_SHOE_FORM_TEXT.CANCEL, style: 'cancel' },
        {
          text: ADMIN_SHOE_FORM_TEXT.DELETE,
          style: 'destructive',
          onPress: () => {
            dispatch(DELETE_SHOE(existingShoe.id));
            dispatch(REMOVE_SHOE_FROM_CART(existingShoe.id));
            goBack();
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.label}>{ADMIN_SHOE_FORM_TEXT.BRAND_LABEL}</Text>
          <TextInput
            style={styles.input}
            value={brand}
            onChangeText={setBrand}
            placeholder={ADMIN_SHOE_FORM_TEXT.BRAND_PLACEHOLDER}
          />

          <Text style={styles.label}>{ADMIN_SHOE_FORM_TEXT.COST_LABEL}</Text>
          <TextInput
            style={styles.input}
            value={cost}
            onChangeText={handleCostChange}
            placeholder={ADMIN_SHOE_FORM_TEXT.COST_PLACEHOLDER}
            keyboardType="decimal-pad"
          />

          <Text style={styles.label}>{ADMIN_SHOE_FORM_TEXT.SIZES_LABEL}</Text>
          <SizeSelector
            sizes={AVAILABLE_SIZES}
            selected={sizes}
            onSelect={toggleSize}
          />

          <Text style={styles.label}>{ADMIN_SHOE_FORM_TEXT.IMAGE_LABEL}</Text>
          <TextInput
            style={styles.input}
            value={imageUri}
            onChangeText={setImageUri}
            placeholder={ADMIN_SHOE_FORM_TEXT.IMAGE_URL_PLACEHOLDER}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.orLabel}>{ADMIN_SHOE_FORM_TEXT.OR_LABEL}</Text>

          <View style={styles.imageRow}>
            {imageUri ? (
              <FastImageView uri={imageUri} style={styles.preview} />
            ) : null}
            <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
              <Text style={styles.photoButtonText}>
                {imageUri
                  ? ADMIN_SHOE_FORM_TEXT.CHANGE_PHOTO
                  : ADMIN_SHOE_FORM_TEXT.CHOOSE_PHOTO}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.saveButton, !isValid && styles.saveButtonDisabled]}
            disabled={!isValid}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>
              {ADMIN_SHOE_FORM_TEXT.SAVE}
            </Text>
          </TouchableOpacity>

          {existingShoe ? (
            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
              <Text style={styles.deleteButtonText}>
                {ADMIN_SHOE_FORM_TEXT.DELETE}
              </Text>
            </TouchableOpacity>
          ) : null}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AdminShoeForm;
