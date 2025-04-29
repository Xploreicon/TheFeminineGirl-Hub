import { IProducts } from "../types/productsType";


export const initialProducts: IProducts[] = [
    
    
            {
              name: "Apple iPhone 14, 128GB, Blue",
              price: 380000,
              timeStamp: { seconds: 1703188000, nanoseconds: 0 },
              category: "phone",
              description: "The iPhone 14 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and excellent durability with Ceramic Shield.",
              discountPercent: 8,
              features: [
                "6.1-inch Super Retina XDR display",
                "A15 Bionic chip",
                "Dual 12MP camera system",
                "All-day battery life",
                "Water and dust resistance (IP68)"
              ],
              id: "009",
              imageUrls: ["https://example.com/iphone14blue.jpg"],
              inStock: true,
              quantity: 18
            },
            {
              name: "Apple iPad Air 10.9-inch, 64GB, Wi-Fi, Space Gray",
              price: 350000,
              timeStamp: { seconds: 1703188000, nanoseconds: 0 },
              category: "phone",
              description: "The iPad Air combines powerful performance with a sleek design, featuring the M1 chip and advanced display technology.",
              discountPercent: 6,
              features: [
                "10.9-inch Liquid Retina display",
                "M1 chip",
                "Touch ID",
                "Support for Apple Pencil (2nd generation)",
                "10-hour battery life"
              ],
              id: "010",
              imageUrls: ["https://example.com/ipadair10.9.jpg"],
              inStock: true,
              quantity: 12
            },
            {
              name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
              price: 180000,
              timeStamp: { seconds: 1703188000, nanoseconds: 0 },
              category: "headphone",
              description: "The Sony WH-1000XM5 offers industry-leading noise cancellation and exceptional sound quality for immersive listening.",
              discountPercent: 12,
              features: [
                "Adaptive noise cancellation",
                "30-hour battery life",
                "Quick charging (3 minutes for 3 hours)",
                "Multipoint connection",
                "Hi-Res Audio certified"
              ],
              id: "011",
              imageUrls: ["https://example.com/sonywh1000xm5.jpg"],
              inStock: true,
              quantity: 20
            },
            {
              name: "Nintendo Switch OLED Model",
              price: 280000,
              timeStamp: { seconds: 1703188000, nanoseconds: 0 },
              category: "console",
              description: "The Nintendo Switch OLED model features a vibrant 7-inch display, enhanced audio, and a wide adjustable stand.",
              discountPercent: 5,
              features: [
                "7-inch OLED screen",
                "64GB internal storage",
                "Wide adjustable stand",
                "Enhanced audio in handheld mode",
                "Dock with a wired LAN port"
              ],
              id: "012",
              imageUrls: ["https://example.com/nintendoswitcholed.jpg"],
              inStock: true,
              quantity: 15
            },
            {
              name: "ZOTAC Gaming GeForce RTX 3060 Twin Edge",
              price: 220000,
              timeStamp: { seconds: 1703188000, nanoseconds: 0 },
              category: "accessories",
              description: "The ZOTAC Gaming RTX 3060 offers powerful graphics performance, ray tracing, and DLSS AI acceleration for gaming and creativity.",
              discountPercent: 7,
              features: [
                "12GB GDDR6 memory",
                "Ray tracing and DLSS AI technology",
                "IceStorm 2.0 cooling",
                "Compact design for smaller cases",
                "PCI Express 4.0"
              ],
              id: "013",
              imageUrls: ["https://example.com/zotacrtx3060.jpg"],
              inStock: true,
              quantity: 10
            },
            {
              name: "Logitech MX Master 3 Wireless Mouse",
              price: 45000,
              timeStamp: { seconds: 1703188000, nanoseconds: 0 },
              category: "accessories",
              description: "The Logitech MX Master 3 is designed for productivity, featuring ultra-fast scrolling and customizable buttons.",
              discountPercent: 10,
              features: [
                "Darkfield 4000 DPI sensor",
                "USB-C quick charging",
                "7 customizable buttons",
                "Flow control for multi-computer use",
                "Ergonomic design"
              ],
              id: "014",
              imageUrls: ["https://example.com/logitechmxmaster3.jpg"],
              inStock: true,
              quantity: 25
            },
            {
                "name": "Apple iPhone 15 Pro Max, 256GB, Titanium",
                "price": 550000,
                "timeStamp": { "seconds": 1703187944, "nanoseconds": 0 },
                "category": "phone",
                "description": "The iPhone 15 Pro Max features a titanium frame, 6.7-inch Super Retina XDR display, A17 Pro chip, and a 48MP main camera.",
                "discountPercent": 5,
                "features": [
                  "6.7-inch Super Retina XDR display",
                  "A17 Pro chip",
                  "48MP main camera",
                  "USB-C connectivity",
                  "Face ID"
                ],
                "id": "001",
                "imageUrls": ["https://example.com/iphone15promax.jpg"],
                "inStock": true,
                "quantity": 10
              },
              {
                "name": "Apple iPhone 14 Pro, 128GB, Space Black",
                "price": 400000,
                "timeStamp": { "seconds": 1703187944, "nanoseconds": 0 },
                "category": "phone",
                "description": "The iPhone 14 Pro comes with a 6.1-inch display, A16 Bionic chip, and a 48MP main camera.",
                "discountPercent": 10,
                "features": [
                  "6.1-inch Super Retina XDR display",
                  "A16 Bionic chip",
                  "48MP main camera",
                  "Ceramic Shield front",
                  "5G capable"
                ],
                "id": "002",
                "imageUrls": ["https://example.com/iphone14pro.jpg"],
                "inStock": true,
                "quantity": 15
              },
              {
                "name": "Apple iPad Pro 12.9-inch, M4 chip, 256GB, Silver",
                "price": 600000,
                "timeStamp": { "seconds": 1703187944, "nanoseconds": 0 },
                "category": "phone",
                "description": "The iPad Pro 12.9-inch features the M4 chip, Liquid Retina XDR display, and support for Apple Pencil.",
                "discountPercent": 7,
                "features": [
                  "12.9-inch Liquid Retina XDR display",
                  "M4 chip",
                  "Support for Apple Pencil (2nd generation)",
                  "5G capable",
                  "Face ID"
                ],
                "id": "003",
                "imageUrls": ["https://example.com/ipadpro12.9.jpg"],
                "inStock": true,
                "quantity": 8
              },
              {
                "name": "Apple MacBook Pro 14-inch, M2 Pro, 512GB SSD, Space Gray",
                "price": 900000,
                "timeStamp": { "seconds": 1703187944, "nanoseconds": 0 },
                "category": "console",
                "description": "The MacBook Pro 14-inch with M2 Pro chip offers exceptional performance, a Liquid Retina XDR display, and long battery life.",
                "discountPercent": 5,
                "features": [
                  "14-inch Liquid Retina XDR display",
                  "M2 Pro chip",
                  "16GB RAM",
                  "512GB SSD",
                  "Up to 17 hours battery life"
                ],
                "id": "004",
                "imageUrls": ["https://example.com/macbookpro14.jpg"],
                "inStock": true,
                "quantity": 5
              },
              {
                "name": "Sony PlayStation 5 Console",
                "price": 350000,
                "timeStamp": { "seconds": 1703187944, "nanoseconds": 0 },
                "category": "console",
                "description": "The PlayStation 5 offers lightning-fast loading, adaptive triggers, and 3D audio technology for an immersive gaming experience.",
                "discountPercent": 0,
                "features": [
                  "Ultra-high-speed SSD",
                  "Ray tracing",
                  "4K-TV gaming",
                  "Up to 120fps with 120Hz output",
                  "Tempest 3D AudioTech"
                ],
                "id": "005",
                "imageUrls": ["https://example.com/ps5.jpg"],
                "inStock": true,
                "quantity": 20
              },
              {
                "name": "PULSE 3D Wireless Headset for PS5",
                "price": 50000,
                "timeStamp": { "seconds": 1703187944, "nanoseconds": 0 },
                "category": "headphone",
                "description": "The PULSE 3D wireless headset is fine-tuned for 3D Audio on PS5 consoles, featuring a refined design and dual noise-cancelling microphones.",
                "discountPercent": 10,
                "features": [
                  "Wireless headset",
                  "Dual noise-cancelling microphones",
                  "USB Type-C charging",
                  "Easy-access controls",
                  "Compatible with PS5 and PS4"
                ],
                "id": "006",
                "imageUrls": ["https://example.com/pulse3dheadset.jpg"],
                "inStock": true,
                "quantity": 25
              },
              {
                "name": "Logitech Brio 505 Webcam",
                "price": 60000,
                "timeStamp": { "seconds": 1703187944, "nanoseconds": 0 },
                "category": "accessories",
                "description": "The Logitech Brio 505 is a high-quality webcam with smart features like light correction and noise reduction, perfect for video conferencing.",
                "discountPercent": 5,
                "features": [
                  "Full HD 1080p video",
                  "Auto light correction",
                  "Noise-reducing microphone",
                  "USB-C connectivity",
                  "Privacy shutter"
                ],
                "id": "007",
                "imageUrls": ["https://example.com/logitechbrio505.jpg"],
                "inStock": true,
                "quantity": 30
              },
              {
                "name": "Apple 20W USB-C Power Adapter",
                "price": 15000,
                "timeStamp": { "seconds": 1703187944, "nanoseconds": 0 },
                "category": "accessories",
                "description": "The Apple 20W USB-C Power Adapter offers fast, efficient charging at home, in the office, or on the go.",
                "discountPercent": 0,
                "features": [
                  "20W power output",
                  "USB-C port",
                  "Compatible with iPhone and iPad",
                  "Compact design",
                  "Fast charging support"
                ],
                "id": "008",
                "imageUrls": ["https://example.com/apple20wcharger.jpg"],
                "inStock": true,
                "quantity": 50
              }
          ]
          