import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

let rem = 14;

if (width <= 320) {
  rem = 12;
} else if (width <= 360) {
  rem = 12;
}else if (width <= 375) {
  rem = 14;
} else if (width <= 414) {
  rem = 15;
} else if (width <= 768) {
  rem = 40;
}


module.exports = rem;