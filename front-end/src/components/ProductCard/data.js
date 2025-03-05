// data.js
import Img1 from "../../assets/products/p1.1.webp";
import Img11 from "../../assets/products/p1.2.webp";
import Img12 from "../../assets/products/p1.3.webp";
import Img13 from "../../assets/products/p1.4.webp";
import Img14 from "../../assets/products/p1.5.webp";
import Img15 from "../../assets/products/p1.6.webp";
import Img16 from "../../assets/products/p1.7.webp";
import Img17 from "../../assets/products/p1.8.webp";

import Img2 from "../../assets/products/p2.1.webp";
import Img22 from "../../assets/products/p2.2.webp";
import Img23 from "../../assets/products/p2.3.webp";
import Img24 from "../../assets/products/p2.4.webp";
import Img25 from "../../assets/products/p2.5.webp";
import Img26 from "../../assets/products/p2.6.webp";
import Img27 from "../../assets/products/p2.7.webp";
import Img28 from "../../assets/products/p2.8.webp";

import Img3 from "../../assets/products/p3.1.webp";
import Img32 from "../../assets/products/p3.2.webp";
import Img33 from "../../assets/products/p3.3.webp";
import Img34 from "../../assets/products/p3.4.webp";
import Img35 from "../../assets/products/p3.5.webp";
import Img36 from "../../assets/products/p3.6.webp";
import Img37 from "../../assets/products/p3.7.webp";
import Img38 from "../../assets/products/p3.8.webp";


import Img4 from "../../assets/products/p4.1.webp";
import Img42 from "../../assets/products/p4.2.webp";
import Img43 from "../../assets/products/p4.3.webp";
import Img44 from "../../assets/products/p4.4.webp";
import Img45 from "../../assets/products/p4.5.webp";
import Img46 from "../../assets/products/p4.6.webp";
import Img47 from "../../assets/products/p4.7.webp";
import Img48 from "../../assets/products/p4.8.webp";

import Img5 from "../../assets/products/p5.1.webp";
import Img52 from "../../assets/products/p5.2.webp";
import Img53 from "../../assets/products/p5.3.webp";
import Img54 from "../../assets/products/p5.4.webp";
import Img55 from "../../assets/products/p5.5.webp";
import Img56 from "../../assets/products/p5.6.webp";
import Img57 from "../../assets/products/p5.7.webp";
import Img58 from "../../assets/products/p5.8.webp";

export const products = [
  {
    
    id: 1,
    name: "Funky Jeans",
    size: 28,
    color: "Blue",
    images: [Img1, Img11, Img12, Img13, Img14, Img15, Img16, Img17],
    hoverImg: Img15,
    details: {
      title: "Stylish Men's Slim Fit Jeans",
      description: "50 Piece (MOQ)",
      businessType: "Manufacturer, Exporter, Supplier, Retailer, Trader",
      availableSizes: [28, 30, 32, 34, 36, 38],
      type: "Men Casual Jeans",
      material: "Denim Cotton",
      preferredBuyer: "All Over World",
      additionalInfo: [
        { label: "Application", value: "Casual, Party, Multi Use" },
        { label: "Color", value: "Blue, Black, Grey, Multicolor" },
        { label: "Gender", value: "Men" },
        { label: "Season", value: "Summer, Winter" },
        { label: "Feature", value: "Comfortable, Breathable, Stretchable" },
        { label: "Pattern", value: "Plain, Printed" },
        { label: "Occasion", value: "Casual Wear, Party Wear, Outdoor Wear" },
        { label: "Country of Origin", value: "India" }
      ]
    },
  },
  {
    id: 2,
    name: "Shorts Jeans",
    size: 30,
    color: "Black",
    images: [Img2, Img22, Img23, Img24, Img25, Img26, Img27, Img28],
    hoverImg: Img26,
    details: {
      title: "Premium Women's High Waist Jeans",
      description: "40 Piece (MOQ)",
      businessType: "Manufacturer, Exporter, Supplier, Retailer, Trader",
      availableSizes: [26, 28, 30, 32, 34],
      type: "Women Casual Jeans",
      material: "Stretchable Denim",
      preferredBuyer: "All Over World",
      additionalInfo: [
        { label: "Application", value: "Casual, Fashion, Multi Use" },
        { label: "Color", value: "Blue, Black, White, Pink" },
        { label: "Gender", value: "Women" },
        { label: "Season", value: "Summer, Spring" },
        { label: "Feature", value: "Soft Fabric, Stretchable, Comfortable" },
        { label: "Pattern", value: "Solid, Printed" },
        { label: "Occasion", value: "Casual Wear, Party Wear, Office Wear" },
        { label: "Country of Origin", value: "India" }
      ]
    },
    
  },
  {
    id: 3,
    name: "Trousers & Chinos",
    size: 32,
    color: "Blue",
    images : [ Img3, Img32, Img38, Img33, Img34, Img35, Img36, Img37],
    hoverImg: Img35,
    details: {
      title: "Kids Stylish Printed Jeans",
      description: "30 Piece (MOQ)",
      businessType: "Manufacturer, Exporter, Supplier, Retailer, Trader",
      availableSizes: [20, 22, 24, 26, 28],
      type: "Kids Casual Jeans",
      material: "Cotton Blend",
      preferredBuyer: "All Over World",
      additionalInfo: [
        { label: "Application", value: "Casual, Sports, Multi Use" },
        { label: "Color", value: "Blue, Green, Yellow, Red" },
        { label: "Gender", value: "Boys, Girls" },
        { label: "Season", value: "Summer, Winter" },
        { label: "Feature", value: "Soft, Easily Washable, Breathable" },
        { label: "Pattern", value: "Printed, Cartoon, Solid" },
        { label: "Occasion", value: "Casual Wear, Outdoor Wear, Playtime" },
        { label: "Country of Origin", value: "India" }
      ]
    },
    
  },
  {
    id: 4,
    name: "Track Pants & Joggers",
    size: 30,
    color: "Blue",
    images : [Img4, Img42, Img43, Img44, Img45, Img46, Img47, Img48],
    hoverImg: Img46,
    details: {
      title: "Trendy Men's Ripped Jeans",
      description: "25 Piece (MOQ)",
      businessType: "Manufacturer, Exporter, Supplier, Retailer, Trader",
      availableSizes: [28, 30, 32, 34, 36, 38],
      type: "Men Fashion Jeans",
      material: "Denim Cotton",
      preferredBuyer: "All Over World",
      additionalInfo: [
        { label: "Application", value: "Casual, Clubwear, Multi Use" },
        { label: "Color", value: "Light Blue, Dark Blue, Black" },
        { label: "Gender", value: "Men" },
        { label: "Season", value: "Summer, Autumn" },
        { label: "Feature", value: "Trendy, Comfortable, Stylish" },
        { label: "Pattern", value: "Ripped, Distressed" },
        { label: "Occasion", value: "Casual Wear, Party Wear" },
        { label: "Country of Origin", value: "India" }
      ]
    },
    
  },
  {
    id: 5,
    name: "Funky Jeans",
    size: 36,
    color: "Blue",
    images : [Img5, Img52, Img53, Img54, Img55, Img56, Img57, Img58],
    hoverImg: Img56,
    details: {
      title: "Classic Cargo Style Jeans",
      description: "20 Piece (MOQ)",
      businessType: "Manufacturer, Exporter, Supplier, Retailer, Trader",
      availableSizes: [28, 30, 32, 34, 36, 38],
      type: "Utility Jeans",
      material: "Cotton Denim",
      preferredBuyer: "All Over World",
      additionalInfo: [
        { label: "Application", value: "Outdoor, Workwear, Multi Use" },
        { label: "Color", value: "Khaki, Black, Olive Green" },
        { label: "Gender", value: "Unisex" },
        { label: "Season", value: "All Season" },
        { label: "Feature", value: "Multiple Pockets, Durable, Comfortable" },
        { label: "Pattern", value: "Solid" },
        { label: "Occasion", value: "Outdoor Wear, Workwear, Hiking" },
        { label: "Country of Origin", value: "India" }
      ]
    }
  }
]
