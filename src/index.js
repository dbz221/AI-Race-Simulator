function enterDetails(event) {
  event.preventDefault();

  let prompt = `You are an AI tool that can simulate F1 races based on real-world data and user inputs. Here are some features you must include based on the user's input: the driver, track, and weather conditions.
Driver Selection: ${driver.value}
Track Selected: ${track.value}
Weather Conditions: ${condition.value}

Simulate different weather conditions to add realism (e.g., rain, sunny, overcast).

You need to output the following in a clear format with appropriate spacing to present on a webpage:
1. Race Simulation Summary
2. Real-time commentary and updates during the simulation
3. Final standings of the race event

`;
  let context =
    "Please ensure the response is clear and detailed, with creative elements. Avoid consistently placing the prompted driver in the pole position. You are allowed to DNF a driver. Use actual race results for inspiration for the final results. Format text using appropriate HTML syntax, please separate the lines ";

  let apiKey = "ebet14afo803932798f53163dbb80c50";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(generateRace);
  console.log(`apiurl is ${apiURL}`);
}

function generateRace(response) {
  let raceSim = document.querySelector("#response-container");
  raceSim.innerHTML = response.data.answer;
}

let driver = document.querySelector("#driver");
let track = document.querySelector("#track");
let condition = document.querySelector("#condition");

let submit = document.querySelector("#submit-btn");

submit.addEventListener("click", enterDetails);
