async function shareItinerary(title, text) {
    const shareData = {
        title: title,
        text: text,
        url: window.location.href
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            // Fallback: Copy to clipboard
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    } catch (err) {
        console.log('Share failed:', err);
    }
}

function printPdf() {
    window.print();
}