// Ads Loader Script for MultiTools
// This script handles dynamic ad loading across all pages

class AdsLoader {
    constructor() {
        this.adCodes = {
            header: [
                {
                    id: 'header-ad-1',
                    code: `<script async="async" data-cfasync="false" src="//pl27108128.profitableratecpm.com/ad7c98bfa8c4f0b020a61829e8533d8e/invoke.js"></script>
<div id="container-ad7c98bfa8c4f0b020a61829e8533d8e"></div>`
                },
                {
                    id: 'header-ad-2',
                    code: `<script type='text/javascript' src='//pl27108076.profitableratecpm.com/c3/b2/f9/c3b2f9e84723ebd7fd53ef8ffc94f78c.js'></script>`
                }
            ],
            sidebar: [
                {
                    id: 'sidebar-ad-1',
                    code: `<script type='text/javascript' src='//pl27108111.profitableratecpm.com/4c/c1/a2/4cc1a22f58ff86f1f756429620c9ba21.js'></script>`
                }
            ],
            content: [
                {
                    id: 'content-ad-1',
                    code: `<script type="text/javascript">
    atOptions = {
        'key' : '3ff2a3fd74276ca90cc14c5695b30131',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/3ff2a3fd74276ca90cc14c5695b30131/invoke.js"></script>`
                }
            ],
            footer: [
                {
                    id: 'footer-ad-1',
                    code: `<script type="text/javascript">
    atOptions = {
        'key' : '835534b9708fbde1f25bd244eb527672',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
    };
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/835534b9708fbde1f25bd244eb527672/invoke.js"></script>`
                }
            ]
        };
    }

    // Load ads in header area
    loadHeaderAds() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            const adContainer = document.createElement('div');
            adContainer.className = 'header-ads-container text-center py-2';
            adContainer.style.cssText = 'background: #f8f9fa; border-bottom: 1px solid #e9ecef;';
            
            this.adCodes.header.forEach(ad => {
                const adDiv = document.createElement('div');
                adDiv.id = ad.id;
                adDiv.className = 'd-inline-block mx-2';
                adDiv.innerHTML = ad.code;
                adContainer.appendChild(adDiv);
            });
            
            headerPlaceholder.appendChild(adContainer);
        }
    }

    // Load ads in sidebar
    loadSidebarAds() {
        const sidebarContainer = document.querySelector('.sidebar-ads-container');
        if (sidebarContainer) {
            this.adCodes.sidebar.forEach(ad => {
                const adDiv = document.createElement('div');
                adDiv.id = ad.id;
                adDiv.className = 'sidebar-ad mb-3';
                adDiv.innerHTML = ad.code;
                sidebarContainer.appendChild(adDiv);
            });
        }
    }

    // Load ads in content area
    loadContentAds() {
        const contentAdsContainer = document.querySelector('.content-ads-container');
        if (contentAdsContainer) {
            this.adCodes.content.forEach(ad => {
                const adDiv = document.createElement('div');
                adDiv.id = ad.id;
                adDiv.className = 'content-ad text-center my-4';
                adDiv.innerHTML = ad.code;
                contentAdsContainer.appendChild(adDiv);
            });
        }
    }

    // Load ads in footer area
    loadFooterAds() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            const adContainer = document.createElement('div');
            adContainer.className = 'footer-ads-container text-center py-3';
            adContainer.style.cssText = 'background: #f8f9fa; border-top: 1px solid #e9ecef;';
            
            this.adCodes.footer.forEach(ad => {
                const adDiv = document.createElement('div');
                adDiv.id = ad.id;
                adDiv.className = 'd-inline-block mx-2';
                adDiv.innerHTML = ad.code;
                adContainer.appendChild(adDiv);
            });
            
            footerPlaceholder.appendChild(adContainer);
        }
    }

    // Load all ads
    loadAllAds() {
        this.loadHeaderAds();
        this.loadSidebarAds();
        this.loadContentAds();
        this.loadFooterAds();
    }

    // Load ads for specific page type
    loadPageAds(pageType = 'default') {
        switch(pageType) {
            case 'tool':
                this.loadHeaderAds();
                this.loadContentAds();
                this.loadFooterAds();
                break;
            case 'home':
                this.loadHeaderAds();
                this.loadSidebarAds();
                this.loadContentAds();
                this.loadFooterAds();
                break;
            default:
                this.loadAllAds();
        }
    }
}

// Initialize ads loader when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const adsLoader = new AdsLoader();
    
    // Determine page type and load appropriate ads
    const path = window.location.pathname;
    if (path.includes('/tools/')) {
        adsLoader.loadPageAds('tool');
    } else if (path === '/' || path.endsWith('index.html')) {
        adsLoader.loadPageAds('home');
    } else {
        adsLoader.loadPageAds('default');
    }
});

// Export for use in other scripts
window.AdsLoader = AdsLoader; 