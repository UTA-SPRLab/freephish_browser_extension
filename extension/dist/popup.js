const button = document.querySelector('.toggle');
const statusOutput = document.getElementById('statusOutput');
let extensionEnabled = true;

// check suspicious status
const checkSus = async () => {
    chrome.storage.local.get({"currentPageStatus": "undetermined"}).then((result) => {
        switch (result.currentPageStatus) {
            case "suspicious":
                statusOutput.setAttribute("class", "")
                statusOutput.classList.add("sus");
                break;
            case "not suspicious":
                statusOutput.setAttribute("class", "")
                statusOutput.classList.add("notsus");
                break;
            default:
                statusOutput.setAttribute("class", "")
                statusOutput.classList.add("undetermined");
        }
    });
}

checkSus();

chrome.storage.onChanged.addListener((changes, namespace) => {
    statusOutput.innerHtml = checkSus();
});

// check if extension is enabled or disabled
chrome.storage.sync.get({ "extensionStatus": true }).then((data) => {
    if (data.extensionStatus) {
        enableButton();
    } else {
        disableButton();
    }
});

button.addEventListener('click', () => {
    chrome.storage.sync.get({ "extensionStatus": true }).then((data) => {
        if (data.extensionStatus) {
            disableButton();
            chrome.storage.sync.set({ "extensionStatus": false });
        } else {
            enableButton();
            chrome.storage.sync.set({ "extensionStatus": true });
        }
    });
});

const enableButton = () => {
    button.classList.remove('disabled');
    button.classList.add('enabled');
    button.innerHTML = "Blocking Enabled";
    extensionEnabled = true;
}

const disableButton = () => {
    button.classList.remove('enabled');
    button.classList.add('disabled');
    button.innerHTML = "Blocking Disabled";
    extensionEnabled = false;
}