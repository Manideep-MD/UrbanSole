import { StyleSheet } from 'react-native';

const createStyle = (colors: any) => {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingTop: 8,
      paddingBottom: 20,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: colors.text,
    },
    headerIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerIconWrap: {
      marginLeft: 16,
    },
    dot: {
      position: 'absolute',
      top: -2,
      right: -2,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.danger,
    },
    list: {
      paddingHorizontal: 12,
      paddingBottom: 12,
      flexGrow: 1,
    },
    sectionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
      paddingHorizontal: 9,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.text,
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 32,
      color: colors.text,
    },
  });
};

export default createStyle;
