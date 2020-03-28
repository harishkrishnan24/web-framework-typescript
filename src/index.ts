import { User } from "./models/User";

const user = new User({ name: "My Name", age: 20 });

user.on('change', () => { });
user.on('change', () => { });
user.on('blur', () => { });

console.log(user);
