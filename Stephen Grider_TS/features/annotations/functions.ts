// please always rely on type annotations with both arguments and return value
// don't rely on the type inference of return value

const add = (a: number, b: number): number => {
  return a + b;
};
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number | string {
  if (b === 0) {
    return "divider cannot be 0";
  }
  return a / b;
}

const nultiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (msg: string): void => {
  console.log(msg);
  //   return null;
  return undefined;
};

const throwError = (msg: string): void => {
  if (!msg) {
    throw new Error(msg);
  }
  // if the return type is set to "never",
  // err: A function returning 'never' cannot have a reachable end point.
};

const weatherToday = {
  date: new Date(),
  weather: "sunny"
};
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(weatherToday);
