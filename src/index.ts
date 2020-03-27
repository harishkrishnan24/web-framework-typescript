import { User } from "./models/User";

const user = new User({ name: "My Name", age: 20 });

user.set({ name: "New name" });

console.log(user.get("name"));
console.log(user.get("age"));
