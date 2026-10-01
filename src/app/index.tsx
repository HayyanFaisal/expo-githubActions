import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

type Product = {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: string;
  rating: number;
  storage: string;
  network: string;
};

const PRODUCTS: Product[] = [
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    description: 'Premium titanium phone with a bright OLED display and pro camera system.',
    price: '$999',
    rating: 4.8,
    storage: '256 GB',
    network: '5G',
  },
  {
    id: 'galaxy-s25-ultra',
    name: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    description: 'Large flagship built for sharp photos, productivity, and all-day use.',
    price: '$1,299',
    rating: 4.7,
    storage: '256 GB',
    network: '5G',
  },
  {
    id: 'pixel-9-pro',
    name: 'Pixel 9 Pro',
    brand: 'Google',
    description: 'A clean Android experience with helpful AI tools and a capable camera.',
    price: '$999',
    rating: 4.6,
    storage: '128 GB',
    network: '5G',
  },
  {
    id: 'oneplus-13',
    name: 'OnePlus 13',
    brand: 'OnePlus',
    description: 'Fast everyday performance paired with quick charging and a vivid display.',
    price: '$899',
    rating: 4.6,
    storage: '256 GB',
    network: '5G',
  },
  {
    id: 'xiaomi-15',
    name: 'Xiaomi 15',
    brand: 'Xiaomi',
    description: 'Compact flagship with strong performance and versatile mobile photography.',
    price: '$849',
    rating: 4.5,
    storage: '256 GB',
    network: '5G',
  },
  {
    id: 'nothing-phone-3',
    name: 'Phone (3)',
    brand: 'Nothing',
    description: 'Distinctive transparent-inspired design with a smooth, minimal interface.',
    price: '$799',
    rating: 4.4,
    storage: '256 GB',
    network: '5G',
  },
  {
    id: 'galaxy-a56',
    name: 'Galaxy A56',
    brand: 'Samsung',
    description: 'Balanced mid-range phone with a colorful screen and dependable battery.',
    price: '$499',
    rating: 4.4,
    storage: '128 GB',
    network: '5G',
  },
  {
    id: 'pixel-9a',
    name: 'Pixel 9a',
    brand: 'Google',
    description: 'Smart camera features and useful Android tools at an approachable price.',
    price: '$499',
    rating: 4.5,
    storage: '128 GB',
    network: '5G',
  },
  {
    id: 'iphone-16e',
    name: 'iPhone 16e',
    brand: 'Apple',
    description: 'A straightforward iPhone experience with strong performance and battery life.',
    price: '$599',
    rating: 4.3,
    storage: '128 GB',
    network: '5G',
  },
  {
    id: 'motorola-edge-60-pro',
    name: 'Edge 60 Pro',
    brand: 'Motorola',
    description: 'Slim Android phone with a curved display, quick charging, and ample storage.',
    price: '$699',
    rating: 4.4,
    storage: '512 GB',
    network: '5G',
  },
];

function ProductCard({ product, position }: { product: Product; position: number }) {
  return (
    <ThemedView
      type="backgroundElement"
      style={styles.productCard}
      accessible
      accessibilityLabel={`${product.name} by ${product.brand}. ${product.description} Rated ${product.rating} out of 5. Price ${product.price}. ${product.storage}, ${product.network}. Item ${position} of ${PRODUCTS.length}.`}>
      <View style={styles.productTopRow}>
        <View style={styles.productNumber}>
          <ThemedText type="smallBold" style={styles.productNumberText}>
            {position.toString().padStart(2, '0')}
          </ThemedText>
        </View>

        <View style={styles.productHeading}>
          <ThemedText type="small" themeColor="textSecondary">
            {product.brand.toUpperCase()}
          </ThemedText>
          <ThemedText type="subtitle" style={styles.productName}>
            {product.name}
          </ThemedText>
        </View>

        <ThemedText type="smallBold" style={styles.price}>
          {product.price}
        </ThemedText>
      </View>

      <ThemedText type="small" themeColor="textSecondary" style={styles.description}>
        {product.description}
      </ThemedText>

      <View style={styles.detailsRow}>
        <View style={styles.detailBox}>
          <ThemedText type="smallBold">★ {product.rating}</ThemedText>
        </View>
        <View style={styles.detailBox}>
          <ThemedText type="smallBold">{product.storage}</ThemedText>
        </View>
        <View style={styles.detailBox}>
          <ThemedText type="smallBold">{product.network}</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

function ListHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.eyebrow}>
        <ThemedText type="code" style={styles.eyebrowText}>
          PHONE CATALOG
        </ThemedText>
      </View>

      <ThemedText type="title" style={styles.title}>
        Featured phones
      </ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.subtitle}>
        Ten popular picks with the essentials at a glance.
      </ThemedText>

      <ThemedView type="backgroundElement" style={styles.ownerBox}>
        <ThemedText type="small" themeColor="textSecondary">
          PREPARED BY
        </ThemedText>
        <View style={styles.ownerRow}>
          <ThemedText type="smallBold">HAYYAN FAISAL</ThemedText>
          <ThemedText type="code" themeColor="textSecondary">
            23F-3108
          </ThemedText>
        </View>
      </ThemedView>

      <View style={styles.sectionHeading}>
        <ThemedText type="smallBold">ALL PRODUCTS</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {PRODUCTS.length} phones
        </ThemedText>
      </View>
    </View>
  );
}


export default function HomeScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <FlatList
          data={PRODUCTS}
          keyExtractor={(product) => product.id}
          renderItem={({ item, index }) => <ProductCard product={item} position={index + 1} />}
          ListHeaderComponent={ListHeader}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
  },
  listContent: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.six,
  },
  header: {
    marginBottom: Spacing.three,
  },
  eyebrow: {
    alignSelf: 'flex-start',
    backgroundColor: '#D9EEFF',
    borderWidth: 1,
    borderColor: '#99CAEF',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    marginBottom: Spacing.three,
  },
  eyebrowText: {
    color: '#075985',
  },
  title: {
    fontSize: 40,
    lineHeight: 44,
  },
  subtitle: {
    marginTop: Spacing.two,
  },
  ownerBox: {
    borderWidth: 1,
    borderColor: '#8B8D98',
    padding: Spacing.three,
    marginTop: Spacing.four,
  },
  ownerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.two,
    marginTop: Spacing.one,
  },
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.five,
  },
  productCard: {
    borderWidth: 1,
    borderColor: '#8B8D98',
    padding: Spacing.three,
  },
  productTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.three,
  },
  productNumber: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#208AEF',
  },
  productNumberText: {
    color: '#FFFFFF',
  },
  productHeading: {
    flex: 1,
  },
  productName: {
    fontSize: 21,
    lineHeight: 26,
  },
  price: {
    color: '#16794B',
    fontSize: 16,
  },
  description: {
    marginTop: Spacing.three,
    lineHeight: 20,
  },
  detailsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    marginTop: Spacing.three,
  },
  detailBox: {
    borderWidth: 1,
    borderColor: '#8B8D98',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  separator: {
    height: Spacing.three,
  },
});
