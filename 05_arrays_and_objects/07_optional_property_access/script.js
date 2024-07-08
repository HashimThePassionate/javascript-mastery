function city(object) {
  return object.address?.city;
}

console.log(city({address: {city: "Toronto"}})); // → Toronto
console.log(city({name: "Vera"})); // → undefined


console.log({}.arrayProp?.[0]); // → undefined


console.log("string".notAMethod?.()); // → undefined


let user = {
  profile: {
    getName: () => "Alice"
  }
};

console.log(user.profile?.getName?.()); // → Alice
console.log(user.account?.getBalance?.()); // → undefined