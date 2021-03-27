/**
 * Handles the script logic for the home page.
 * Named after the file to help organize the
 * site due to it being fully static.
 * @author GameGlitz
 */

applyDate();
applyProtocol();
typeText();

/**
 * Applies the date manipulation to the document.
 */
async function applyDate() {
    date = new Date();
    document.getElementById("terminal-date").innerHTML = date;
}

/**
 * Applies the protocol identifier maniplation to the document.
 */
async function applyProtocol() {
    async function fetchData(url) {
        const res = await fetch(url);
        return await res.text();
    }

    fetchData('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
        let protocolRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
        let protocolIdentifier = data.match(protocolRegex)[0];
        document.getElementById("terminal-protocol").innerHTML = protocolIdentifier;
    });
}