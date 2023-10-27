// Edit button handler
const editButton = document.getElementById("editButton")
editButton.onclick = async () => {
    await EditImg();
};

// Current filter types
const filter_types = {
    0: "saturate",
    1: "grayscale"
}

// Create new stylesheet
async function createCSS(ftype, fval) {
    const ncss = new StyleSheet()
    ncss.replace(`img { filter: ${filter_types[ftype]}(${fval}) !important; }`)
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, ncss]
    editButton.setAttribute("aria-busy", "false")
}

// Main function
async function EditImg() {
    editButton.setAttribute("aria-busy", "true")
    // Get selected filter
    let felemnt = document.getElementById("filter_type")
    let ftype = felemnt.options[felemnt.selectedIndex]
    // Get selected filter value
    let fval = document.getElementById("valrange").value
    await createCSS()
}