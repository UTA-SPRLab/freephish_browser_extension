function displayWarning() {
    return new Promise((resolve) => {
        const regexToMatchTLD = "[(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b";
        const domain = location.hostname.replace(regexToMatchTLD, '');;
        document.body.innerHTML = `
          <div style="direction: ltr; position: fixed; top: 0; left: 0; z-index: 999999; display: block; width: 100%; height: 100%; background: #F44336; font-family: Arial, Helvetica, sans-serif;">
            <div style="display: flex; justify-content: center; align-items: center; margin: 0 auto; margin-top: 20vh; color: #fff; flex-wrap: wrap;">
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.6667 101.333H101.333C103.074 101.321 104.785 100.883 106.317 100.058C107.849 99.2328 109.156 98.0451 110.124 96.5987C111.092 95.1522 111.691 93.4909 111.869 91.7598C112.047 90.0286 111.799 88.28 111.147 86.6667L73.28 21.3334C72.3576 19.6662 71.0054 18.2765 69.364 17.3088C67.7227 16.3411 65.8521 15.8307 63.9467 15.8307C62.0413 15.8307 60.1707 16.3411 58.5293 17.3088C56.888 18.2765 55.5358 19.6662 54.6133 21.3334L16.7467 86.6667C16.1064 88.2431 15.8524 89.9498 16.0061 91.6444C16.1598 93.3389 16.7167 94.9721 17.6301 96.4075C18.5436 97.843 19.7873 99.0391 21.2572 99.896C22.7272 100.753 24.3808 101.246 26.08 101.333" fill="#FFAB00"/>
                    <path d="M26.6667 101.333H101.333C103.074 101.321 104.785 100.883 106.317 100.058C107.849 99.2328 109.156 98.0451 110.124 96.5987C111.092 95.1522 111.691 93.4909 111.869 91.7598C112.047 90.0286 111.799 88.28 111.147 86.6667L73.28 21.3334C72.3576 19.6662 71.0054 18.2765 69.364 17.3088C67.7227 16.3411 65.8521 15.8307 63.9467 15.8307C62.0413 15.8307 60.1707 16.3411 58.5293 17.3088C56.888 18.2765 55.5358 19.6662 54.6133 21.3334L16.7467 86.6667C16.1064 88.2431 15.8524 89.9498 16.0061 91.6444C16.1598 93.3389 16.7167 94.9721 17.6301 96.4075C18.5436 97.843 19.7873 99.0391 21.2572 99.896C22.7272 100.753 24.3808 101.246 26.08 101.333" stroke="#263238" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M64 48V58.6667M64 80V80.0533" stroke="#263238" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div style="flex-basis: 100%; height: 0;"></div>
                <p style="font-size: 66px; text-align: center; margin: 0"><b>Warning!</b></p>
                <div style="flex-basis: 100%; height: 0;"></div>
                <p style="font-size: 24px; text-align: center;"><b><i>FreePhish</i></b> has indentified <u style="font-weight: 100; color: #FFAB00;">${domain}</u> as a potential phishing website.</p>
            </div>
          </div>
    `;
        resolve();
    });
}

function stopWebpage() {
    return new Promise((resolve) => {
        window.stop();
        debugger;
        resolve();
    });
}

async function inject() {
    await displayWarning();
    await fnAsync();
}

inject();