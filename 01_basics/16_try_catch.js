/**
 * try...catch
 *
 * 1) 발생시킬때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */
function runner() {
  try {
    console.log("Hello");

    throw new Error("You got a problem!");

    console.log("Linux");
  } catch (e) {
    console.log("---catch---");
    console.log(e);
  } finally{
    console.log('---finally---')
  }
}

runner();
