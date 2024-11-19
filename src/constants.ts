import destinationOne from "./assets/Images/tourOne.png";
import destinationTwo from "./assets/Images/tourTwo.png";
import destinationThree from "./assets/Images/tourThree.png";
import destinationFour from "./assets/Images/tourFour.png";
import destinationFive from "./assets/Images/tourFive.png";
import destinationSix from "./assets/Images/tourSix.png";
import destinationSeven from "./assets/Images/tourSeven.png";
import destinationEight from "./assets/Images/tourEight.png";
import destinationNine from "./assets/Images/tourNine.png";
import destinationTen from "./assets/Images/tourTen.png";

export const destinations = [
  {
    title: "Pérez Art Museum Miami",
    description:
      "The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami......",
    image: destinationOne,
    price: "$50 - $200",
    duration: "2 Days",
  },
  {
    title: "Hard Rock Stadium",
    description:
      "Hard Rock Stadium is a multi-purpose stadium located in Miami Gardens, Florida, a city......",
    image: destinationTwo,
    price: "$50 - $80",
    duration: "1 Day",
  },
  {
    title: "Matheson Hammock Park",
    description:
      "Matheson Hammock Park is a 630 acres urban park in metropolitan Miami at 9610 Old .....",
    image: destinationThree,
    price: "$50 - $200",
    duration: "3 Days",
  },
  {
    title: "The Wharf Miami",
    description:
      "An all new outdoor pop-up event space anchored with live music, eats, cocktails.........",
    image: destinationFour,
    price: "$50 - $200",
    duration: "2 Days",
  },
  {
    title: "Miami Tower",
    description:
      "The Miami Tower is a 47-story, landmark office skyscraper in Miami, Florida, United States. It is located in central Downtown.",
    image: destinationFive,
    price: "$50 - $200",
    duration: "2 Days",
  },
  {
    title: "Skyviews Miami",
    description:
      "Views of Biscayne Bay & the downtown Miami skyline from climate-controlled glass gondolas.",
    image: destinationSix,
    price: "$50 - $200",
    duration: "2 Days",
  },
  {
    title: "Pérez Art Museum Miami",
    description:
      "The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami......",
    image: destinationSeven,
    price: "$50 - $200",
    duration: "2 Days",
  },
  {
    title: "Hard Rock Stadium",
    description:
      "Hard Rock Stadium is a multi-purpose stadium located in Miami Gardens, Florida, a city......",
    image: destinationEight,
    price: "$50 - $80",
    duration: "1 Day",
  },
];

export const navigationLinks = [
  { title: "Add Tour", path: "explore-tours" },
  { title: "Book Tour", path: "book-tour" },
  { title: "My Tours", path: "my-tours" },
];

export const gridImages = [
  destinationOne,
  destinationEight,
  destinationNine,
  destinationSeven,
  destinationTen,
];

export const includedListDetails = [
  { label: "Destination", value: "Miami" },
  {
    label: "Departure Location",
    value: "2000 Brush St, Detroit, MI 48226, United States",
  },
  { label: "Return", value: "7:00 PM on Day 3" },
];

export const includedSubItems = [
  "Basic first aid kit",
  "Fuel Expense",
  "Detail Guided Maps",
  "Comfortable Private Booked Transport",
  "Mess Tent, Kitchen Utensils, and Cook",
  "Waterproof Tents on twin/triple Sharing",
];

export const textContent = [
  "The Pérez Art Museum Miami —officially known as the Jorge M. Pérez Art Museum of Miami-Dade County—is a contemporary art museum that relocated in 2013 to the Museum Park in Downtown Miami, Florida.",
  "Founded in 1984 as the Center for the Fine Arts, it became known as the Miami Art Museum from 1996 until it was renamed in 2013 upon the opening its new building designed by Herzog & de Meuron at 1103 Biscayne Boulevard",
  "PAMM, along with the $275 million Phillip and Patricia Frost Museum of Science and a city park which are being built in the area with completion in 2017, is part of the 20-acre Museum Park.",
];

export const schedule = [
  {
    day: "Day 1",
    weather: "sunny",
    temperature: "18°C",
    activities: [
      "Tours with American Sign Language",
      "Audio description group tours",
      "Large-print gallery notes",
      "Lunch Included.",
    ],
  },
  {
    day: "Day 2",
    weather: "cloudy",
    temperature: "20°C",
    activities: [
      "Tours with American Sign Language",
      "Audio description group tours",
      "Large-print gallery notes",
      "Lunch Included.",
    ],
  },
  {
    day: "Day 3",
    weather: "sunny",
    temperature: "17 °C",
    activities: [
      "Tours with American Sign Language",
      "Audio description group tours",
      "Large-print gallery notes",
      "Lunch Included.",
    ],
  },
];
