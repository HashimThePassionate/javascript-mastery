function test(label, body) {
    if (!body()) console.log(`❌ Failed: ${label}`);
  }

test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
});

test("Convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});

test("Don't convert case-less characters", () => {
  return "مرحبا".toUpperCase() == "مرحبا";
});

test("Convert mixed-case text to uppercase", () => {
  return "Hello, Χαίρετε, مبا".toUpperCase() == "HELLO, ΧΑΊΡΕΤΕ, مرحبا";
});
  