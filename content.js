

// Remove the specified HTML element(s)
function removeElements() {
    const elements = document.querySelectorAll(".ytd-mini-guide-entry-renderer");
    elements.forEach((element) => {
        let span = element.getElementsByTagName('span')[0]
        if ( span && span.innerText === "Shorts")
        {
            element.remove()
        } else {
            console.log( span && span.innerText)
        }
    });
}

// Execute the removeElements function when the DOM is ready
removeElements();
