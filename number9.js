const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
const [ depression, bipolar, manic, anxiety, anorexia, posttraumaticStress, seasonalAffective, bulimia ] = originalDisorderFormat.split("|$|")

// {/* <div>console.log(Depression)</div>
// <div> console.log(Bipolar) </div>
// <div>console.log(Manic)</div>
// <div>console.log(Anxiety)</div>
// <div>console.log(Anorexia)</div>
// <div>console.log(Posttraumatic Stress)</div>
// <div>console.log(Seasonal Affective)</div>
// <div>console.log(Bulimia)</div> */}

const newDisordersFormat = [`Depression`, `Bipolar`, `Manic`, `Anxiety`, `Posttraumatic Stress`, `Seasonal Affective`, `Bulimia`]
const disordersList = newDisordersFormat.join("<div></div>")


console.log(`<div>${depression}</div>`)
console.log(`<div>${bipolar}</div>`)
console.log(`<div>${manic}</div>`)
console.log(`<div>${anxiety}</div>`)
console.log(`<div>${anorexia}</div>`)
console.log(`<div>${posttraumaticStress}</div>`)
console.log(`<div>${seasonalAffective}</div>`)
console.log(`<div>${bulimia}</div>`)



// {/* <div>Depression</div>|$|<div>Bipolar</div>|$|<div>Manic</div>|$|<div>Anxiety</div>|$|<div>Anorexia</div>|$|<div>Posttraumatic Stress</div>|$|<div>Seasonal Affective</div>|$|<div>Bulimia</div> */}