// src/constants/uiText.ts
import { PropertyProps } from "@/interfaces";
export const BUTTON_TEXTS = {
      BOOK_NOW: 'Book Now',
      DETAILS: 'View Details',
      SUBMIT: 'Submit',
    };
    
    export const ERROR_MESSAGES = {
      NETWORK_ERROR: 'Failed to connect. Please try again later.',
      VALIDATION_ERROR: 'Please fill out all required fields correctly.',
    };
    
    export const PAGE_TITLES = {
      HOME: 'Welcome to ALX Listing App',
      PROPERTY_DETAILS: 'Property Details',
    };
    
    export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
      {
        name: "Villa Ocean Breeze",
        address: {
          state: "Seminyak",
          city: "Bali",
          country: "Indonesia"
        },
        rating: 4.89,
        category: ["Luxury Villa", "Pool", "Free Parking"],
        price: 3200,
        offers: {
          bed: "3",
          shower: "3",
          occupants: "4-6"
        },
        image: "assets/1.jpg",
        discount: ""
      },
      {
        name: "Mountain Escape Chalet",
        address: {
          state: "Aspen",
          city: "Colorado",
          country: "USA"
        },
        rating: 4.70,
        category: ["Mountain View", "Fireplace", "Self Checkin"],
        price: 1800,
        offers: {
          bed: "4",
          shower: "2",
          occupants: "5-7"
        },
        image: "assets/2.jpg",
        discount: "30"
      },
      {
        name: "Cozy Desert Retreat",
        address: {
          state: "Palm Springs",
          city: "California",
          country: "USA"
        },
        rating: 4.92,
        category: ["Desert View", "Pet Friendly", "Self Checkin"],
        price: 1500,
        offers: {
          bed: "2",
          shower: "1",
          occupants: "2-3"
        },
        image: "assets/3.jpeg",
        discount: ""
      },
      {
        name: "City Lights Penthouse",
        address: {
          state: "New York",
          city: "New York",
          country: "USA"
        },
        rating: 4.85,
        category: ["City View", "Free WiFi", "24h Checkin"],
        price: 4500,
        offers: {
          bed: "2",
          shower: "2",
          occupants: "2-4"
        },
        image: "assets/4.jpg",
        discount: "15"
      },
      {
        name: "Riverside Cabin",
        address: {
          state: "Queenstown",
          city: "Otago",
          country: "New Zealand"
        },
        rating: 4.77,
        category: ["Riverside", "Private Dock", "Free Kayaks"],
        price: 2800,
        offers: {
          bed: "3",
          shower: "2",
          occupants: "4-6"
        },
        image: "assets/5.jpg",
        discount: "20"
      },
      {
        name: "Modern Beachfront Villa",
        address: {
          state: "Sidemen",
          city: "Bali",
          country: "Indonesia"
        },
        rating: 4.95,
        category: ["Beachfront", "Private Pool", "Chef Service"],
        price: 5000,
        offers: {
          bed: "5",
          shower: "4",
          occupants: "8-10"
        },
        image: "assets/6.jpg",
        discount: ""
      },
      {
        name: "Lakeside Chalet",
        address: {
          state: "Banff",
          city: "Alberta",
          country: "Canada"
        },
        rating: 4.65,
        category: ["Lakeside", "Mountain View", "Hiking Trails"],
        price: 2300,
        offers: {
          bed: "3",
          shower: "3",
          occupants: "4-5"
        },
        image: "assets/7.jpg",
        discount: "10"
      },
      {
        name: "Tropical Garden Villa",
        address: {
          state: "Koh Samui",
          city: "Surat Thani",
          country: "Thailand"
        },
        rating: 4.80,
        category: ["Garden", "Free Parking", "Self Checkin"],
        price: 2750,
        offers: {
          bed: "3",
          shower: "3",
          occupants: "5-6"
        },
        image: "assets/8.jpg",
        discount: "25"
      },
      {
        name: "Urban Loft",
        address: {
          state: "Berlin",
          city: "Berlin",
          country: "Germany"
        },
        rating: 4.60,
        category: ["City Center", "Free WiFi", "24h Checkin"],
        price: 2000,
        offers: {
          bed: "2",
          shower: "1",
          occupants: "2-3"
        },
        image: "assets/9.jpg",
        discount: ""
      },
      {
        name: "Secluded Forest Cabin",
        address: {
          state: "Whistler",
          city: "British Columbia",
          country: "Canada"
        },
        rating: 4.72,
        category: ["Secluded", "Hot Tub", "Self Checkin"],
        price: 2600,
        offers: {
          bed: "4",
          shower: "2",
          occupants: "5-7"
        },
        image: "assets/10.jpg",
        discount: "40"
      },
      {
        name: "Cliffside Villa",
        address: {
          state: "Amalfi",
          city: "Salerno",
          country: "Italy"
        },
        rating: 4.93,
        category: ["Cliffside", "Infinity Pool", "Sea View"],
        price: 6000,
        offers: {
          bed: "4",
          shower: "4",
          occupants: "6-8"
        },
        image: "assets/11.jpg",
        discount: "50"
      },
      {
        name: "Coastal Escape Villa",
        address: {
          state: "Noosa",
          city: "Queensland",
          country: "Australia"
        },
        rating: 4.83,
        category: ["Beachfront", "Pet Friendly", "Free Parking"],
        price: 3400,
        offers: {
          bed: "3",
          shower: "3",
          occupants: "4-6"
        },
        image: "assets/1.jpg",
        discount: ""
      },
      {
        name: "Historical Villa",
        address: {
          state: "Florence",
          city: "Tuscany",
          country: "Italy"
        },
        rating: 4.67,
        category: ["Historical", "Free Breakfast", "Self Checkin"],
        price: 2700,
        offers: {
          bed: "2",
          shower: "2",
          occupants: "2-4"
        },
        image: "assets/2.jpg",
        discount: "35"
      },
      {
        name: "Downtown Apartment",
        address: {
          state: "Tokyo",
          city: "Tokyo",
          country: "Japan"
        },
        rating: 4.81,
        category: ["City Center", "Free WiFi", "Public Transport"],
        price: 2200,
        offers: {
          bed: "1",
          shower: "1",
          occupants: "2"
        },
        image: "assets/4.jpg",
        discount: ""
      },
      {
        name: "Luxury Safari Lodge",
        address: {
          state: "Serengeti",
          city: "Mara",
          country: "Tanzania"
        },
        rating: 4.97,
        category: ["Safari", "Guided Tours", "Free Breakfast"],
        price: 4500,
        offers: {
          bed: "4",
          shower: "4",
          occupants: "6-8"
        },
        image: "assets/5.jpg",
        discount: "20"
      },
      {
        name: "Countryside Cottage",
        address: {
          state: "Cotswolds",
          city: "Gloucestershire",
          country: "UK"
        },
        rating: 4.58,
        category: ["Countryside", "Fireplace", "Self Checkin"],
        price: 1800,
        offers: {
          bed: "2",
          shower: "1",
          occupants: "2-4"
        },
        image: "assets/6.jpg",
        discount: "25"
      },
      {
        name: "Riverfront Mansion",
        address: {
          state: "Paris",
          city: "Île-de-France",
          country: "France"
        },
        rating: 4.86,
        category: ["Riverfront", "Private Garden", "Self Checkin"],
        price: 5000,
        offers: {
          bed: "4",
          shower: "3",
          occupants: "6-8"
        },
        image: "assets/7.jpg",
        discount: "30"
      },
      {
        name: "Ski Chalet",
        address: {
          state: "Zermatt",
          city: "Valais",
          country: "Switzerland"
        },
        rating: 4.75,
        category: ["Mountain View", "Ski Access", "Fireplace"],
        price: 3900,
        offers: {
          bed: "3",
          shower: "3",
          occupants: "4-5"
        },
        image: "assets/8.jpg",
        discount: ""
      },
      {
        name: "Island Paradise Villa",
        address: {
          state: "Mahe",
          city: "Victoria",
          country: "Seychelles"
        },
        rating: 4.98,
        category: ["Beachfront", "Private Pool", "Chef Service"],
        price: 6500,
        offers: {
          bed: "5",
          shower: "5",
          occupants: "8-10"
        },
        image: "assets/9.jpg",
        discount: "60"
      },
      {
        name: "Clifftop Retreat",
        address: {
          state: "Cape Town",
          city: "Western Cape",
          country: "South Africa"
        },
        rating: 4.78,
        category: ["Ocean View", "Private Pool", "Self Checkin"],
        price: 4100,
        offers: {
          bed: "3",
          shower: "3",
          occupants: "4-5"
        },
        image: "assets/11.jpg",
        discount: ""
      }
    ];
    