// Current filter types
const filter_types = {
    0: "saturate",
    1: "grayscale"
}

// Create new stylesheet
async function createCSS(ftype, fval) {
    const ncss = new StyleSheet()
    ncss.replace(`img { filter: ${ftype}(${fval}); }`)
}

// Main function
async function EditImg() {
    // Get selected filter
    let felemnt = document.getElementById("ftypeval")
    let ftype = felemnt.options[felemnt.selectedIndex]
    // Get selected filter value
    let fval = document.getElementById("ival").value
    await createCSS()
}