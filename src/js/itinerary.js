async function shareItinerary() {
    const shareData = {
        title: document.title,
        text: 'Check out my itinerary!',
        url: window.location.href
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
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

// Add event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.getElementById('shareBtn');
    const printBtn = document.getElementById('printBtn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', shareItinerary);
    }
    
    if (printBtn) {
        printBtn.addEventListener('click', printPdf);
    }
});