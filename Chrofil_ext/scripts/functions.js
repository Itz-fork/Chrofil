// Edit button
const editButton = document.getElementById("edit_button")

// Current filter types
const filter_types = {
    0: "saturate",
    1: "grayscale",
    2: "opacity"
}

// Inject css
async function createCSS(css_src) {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    try {
        await chrome.scripting.insertCSS({
            target: {
                tabId: tab.id
            },
            css: css_src,
        });
    } catch (error) {
        console.log(error)
    }
    editButton.setAttribute("aria-busy", "false")
}

// Main function
async function EditImg() {
    editButton.setAttribute("aria-busy", "true")
    var css_src = `img { filter: `

    // Get selected options and it's values
    let chdata = [...document.querySelectorAll('input:checked')].map(e => [e.value, e.parentElement.children.item(2).value])
    for (cdt of chdata) {
        css_src += `${cdt[0]}(${cdt[1]}%) `
    }
    css_src += `!important; }`
    await createCSS(css_src)
}

// Edit button listner
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("edit_button").addEventListener("click", () => EditImg(), false);
});