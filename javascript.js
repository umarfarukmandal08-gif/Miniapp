// Monetag Video Ads এর জন্য (YOUR_APP_ID দিন)
if (typeof Monetag !== 'undefined') {
    function watchVideo() {
        Monetag.showVideoAd(
            // Success callback
            (adData) => {
                const videoRevenue = adData.earn || 0.25;
                const myShare = videoRevenue * 0.7;
                userCoins += 15; // ফিক্সড 15 কয়েন
                
                showMessage(`🎥 ভিডিও সম্পন্ন! +15 কয়েন`);
                sendMyRevenue(myShare, 'video');
                updateUI(); saveData();
            },
            // Skip callback
            () => { showMessage('❌ ভিডিও স্কিপ করা হয়েছে'); }
        );
    }
}