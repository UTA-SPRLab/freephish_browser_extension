const api = "https://sprlab-freephish-extension.vercel.app/";

const checkPage = async (tab) => {
    // get current tab url
    let url = "";
    await chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        url = tabs[0].url;

        const encodedUrl = encodeURIComponent(url);



        // check url
        try {
            return verdict = fetch(`${api}?url=${encodedUrl}`)
                .then(response => response.json())
                .then(json => {
                    console.log(`\Response= ${api}?url=${encodedUrl} : ${json.urlStatus}`);

                    if (json.urlStatus) {
                        chrome.storage.local.set({ "currentPageStatus": "suspicious" });

                        chrome.storage.sync.get("extensionStatus").then(async function (result) {
                            try {
                                chrome.tabs.query({ currentWindow: true, active: true }, async function (tabs) {
                                    try {
                                        let tabid = await tabs[0].id;

                                        let extensionOn = await result.extensionStatus;

                                        if (extensionOn == true) {
                                            console.log("3WARNING")
                                            await chrome.scripting.executeScript({
                                                target: { tabId: tabid },
                                                files: ['injectionscript.js'],
                                            });
                                        }
                                    } catch (e) {
                                        console.log(e);
                                    }
                                });


                            } catch (e) {
                                console.log(e);
                            }
                        });
                    } else {
                        chrome.storage.local.set({ "currentPageStatus": "not suspicious" });
                    }
                })
        } catch (e) {
            console.log(e);
        }
    });
}

chrome.tabs.onUpdated.addListener(async tab => {
    checkPage(tab)
})

chrome.tabs.onActivated.addListener(async tab => {
    checkPage(tab)
})