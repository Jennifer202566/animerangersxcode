/**
 * Anime Rangers X Codes Website
 * JavaScript functionality for code copying, search, and FAQ toggles
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initCopyButtons();
    initCodeSearch();
    initFaqToggles();
    setCurrentDate();
});

/**
 * Initialize copy buttons for all code cells
 */
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    const notification = document.getElementById('copyNotification');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeToCopy = this.getAttribute('data-code');
            
            // Create a temporary textarea element to copy the text
            const textarea = document.createElement('textarea');
            textarea.value = codeToCopy;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            
            // Select and copy the text
            textarea.select();
            document.execCommand('copy');
            
            // Remove the temporary element
            document.body.removeChild(textarea);
            
            // Show notification
            notification.classList.add('show');
            
            // Hide notification after 2 seconds
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        });
    });
}

/**
 * Initialize code search functionality
 */
function initCodeSearch() {
    const searchInput = document.getElementById('codeSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const activeCodesTable = document.getElementById('active-codes-table');
        
        if (!activeCodesTable) return;
        
        const rows = activeCodesTable.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const codeCell = row.querySelector('.code-cell');
            const rewardsCell = row.querySelector('td:nth-child(2)');
            
            if (!codeCell || !rewardsCell) return;
            
            const code = codeCell.textContent.toLowerCase();
            const rewards = rewardsCell.textContent.toLowerCase();
            
            // Check if the search term is found in either the code or rewards
            if (code.includes(searchTerm) || rewards.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

/**
 * Initialize FAQ accordion toggles
 */
function initFaqToggles() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Close other FAQ items (optional - for accordion behavior)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
}

/**
 * Set the current date in the update date element
 */
function setCurrentDate() {
    const updateDateElement = document.getElementById('update-date');
    if (!updateDateElement) return;
    
    // Get current date
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Format date as "Month Day, Year"
    const formattedDate = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    
    // Update the element
    updateDateElement.textContent = formattedDate;
}

/**
 * Add structured data for SEO (executed immediately)
 */
(function addStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Anime Rangers X Codes, 100% Working Free Gems 2025!",
        "description": "Here is the list of all the new Anime Rangers X codes (April 2025) which will give you free gems, golds, and rerolls to build a strong team.",
        "url": "animerangersxcode.org/",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "ANNIVERSARY2025",
                    "description": "5,000 Gems + 10 Rerolls"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "THANKYOU100K",
                    "description": "2,500 Gems + 5 Rerolls"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "APRILUPDATE2025",
                    "description": "3,000 Gems + Special Character Skin"
                }
            ]
        },
        "publisher": {
            "@type": "Organization",
            "name": "Anime Rangers X Codes",
            "url": "https://animerangersxcode.org/"
        }
    });
    
    document.head.appendChild(script);
})();

/**
 * Track outbound links (for analytics purposes)
 */
function trackOutboundLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is external
            if (!this.href.includes(window.location.hostname)) {
                // Here you would typically send an analytics event
                console.log('Outbound link clicked:', this.href);
                
                // If you're using Google Analytics, you might do something like:
                // gtag('event', 'click', {
                //     'event_category': 'outbound',
                //     'event_label': this.href
                // });
            }
        });
    });
}

/**
 * Initialize on page load
 */
window.addEventListener('load', function() {
    // Initialize any components that need the full page to be loaded
    trackOutboundLinks();
    
    // Add active class to the first FAQ item by default
    const firstFaqItem = document.querySelector('.faq-item');
    if (firstFaqItem) {
        firstFaqItem.classList.add('active');
    }
});
