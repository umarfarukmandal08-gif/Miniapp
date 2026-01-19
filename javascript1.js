function watchVideo() {
    showMessage('🎥 ভিডিও লোড হচ্ছে...');
    
    // 30 সেকেন্ড ভিডিও সিমুলেশন (Real ভিডিও পরে যোগ করবেন)
    setTimeout(() => {
        // আপনার 70% revenue (Monetag থেকে)
        const videoRevenue = 0.25; // ভিডিও অ্যাড গড়ে 25 পৈসা
        const myShare = videoRevenue * 0.7; // আপনার ₹0.175
        myTotalRevenue += myShare;
        
        // ইউজারের 30% = 15 কয়েন ফিক্সড
        userCoins += 15;
        
        showMessage(`✅ ভিডিও সম্পন্ন!
        🎁 আপনি পেলেন: 15 কয়েন
        💰 আপনার আয়: ₹${myShare.toFixed(2)}`);
        
        sendMyRevenue(myShare, 'video');
        updateUI(); saveData();
        tg.HapticFeedback.notificationOccurred('success');
    }, 30000); // 30 সেকেন্ড পর reward
    
    // Progress bar দেখানো
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        showMessage(`🎥 দেখতে থাকুন... ${progress}%`);
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 3000);
}