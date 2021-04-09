// import the module
import NashRamp from "@nash-io/ramp-widget-sdk";

// initialize the widget
const nashWidget = new NashRamp({
  base: "eur",
  env: "PRODUCTION",
  destination: "0xcd5B05c5675857e52F18e4DaEb7c8d0FE98dE524",
  referrer: "MyApp",
  target: "aave",
});

nashWidget.init({
  width: 496,
  height: 480,
});