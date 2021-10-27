/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.

  The pink berries are the ONLY safe ones to eat.

  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.
  Use the tests to confirm which message to return
  
  This exercise can be solved in a few different ways. One way might include the array methods
  .some() and .every(). 
  
  The .some() method tests to see if some of the values (at least 1) in an array 
  match what you're looking for and returns true or false. 
  
  The .every() method will only return true if all values match watch you're looking for. 
  
  Let's first look at an example that will teach you how to use these methods.
*/

/* Using some method to find is one is different */
// function isBushSafe(berryArray) {
//   let isSafe = berryArray.some((berry) => berry !== "pink")
//     ? "Toxic! Leave bush alone!"
//     : "Bush is safe to eat from";
//   console.log(isSafe);
// }

/* every Method to find if all of them are equal */
// function isBushSafe(berryArray) {
//   let isSafe = berryArray.every((berry) => berry === "pink");
//   !isSafe
//     ? console.log("Toxic! Leave bush alone!")
//     : console.log("Bush is safe to eat from");
// }

/* Other way to do it with the filter method*/
function isBushSafe(berryArray) {
  let result = "";
  let eatable = berryArray.filter((berry) => {
    return berry === "pink";
  });
  if (berryArray.length === eatable.length) {
    result = "Bush is safe to eat from";
  } else {
    result = "Toxic! Leave bush alone!";
  }
  console.log(result);
}

isBushSafe(["pink", "pink", "pink", "neon", "pink", "transparent"]);
isBushSafe(["pink", "pink", "pink", "pink"]);


// /* ======= TESTS - DO NOT MODIFY ===== */

test("isBushSafe finds toxic busy", () => {
  expect(
    isBushSafe(["pink", "pink", "pink", "neon", "pink", "transparent"])
  ).toEqual("Toxic! Leave bush alone!");
});

test("isBushSafe function finds safe bush", () => {
  expect(isBushSafe(["pink", "pink", "pink", "pink"])).toEqual(
    "Bush is safe to eat from"
  );
});
