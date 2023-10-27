// Edit button
const editButton = document.getElementById("edit_button")

// Current filter types
const filter_types = {
    0: "saturate",
    1: "grayscale"
}

// Inject css
async function createCSS(ftype, fval) {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    try {
        await chrome.scripting.insertCSS({
            target: {
                tabId: tab.id
            },
            css: `img { filter: ${filter_types[ftype]}(${fval}) !important; }`,
        });
    } catch (error) {
        alert(error)
    }
    editButton.setAttribute("aria-busy", "false")
}

// Main function
async function EditImg() {
    editButton.setAttribute("aria-busy", "true")
    // Get selected filter
    let ftype = document.getElementById("filter_type").selectedIndex
    // Get selected filter value
    let fval = document.getElementById("valrange").value
    await createCSS(ftype, fval)
}

// Edit button listner
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("edit_button").addEventListener("click", () => EditImg(), false);
});