export {}; //see line 16
const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { name, age }: { name: string; age: number } = profile;
// https://medium.com/@muravitskiy.mail/cannot-redeclare-block-scoped-variable-varname-how-to-fix-b1c3d9cc8206
// way to fix err: Cannot redeclare block-scoped variable 'name'.

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
