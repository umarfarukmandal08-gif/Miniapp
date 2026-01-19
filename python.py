@app.route('/revenue', methods=['POST'])
def track_revenue():
    data = request.json
    ad_type = data.get('type', 'ad')
    
    message = f"""
🎉 {'🎥 ভিডিও' if ad_type=='video' else '📺 অ্যাড'} ইনকাম!
💰 আপনার আয়: ₹{data['myRevenue']:.2f}
👤 ইউজার: {data['userCoins']} কয়েন
📊 মোট: {data['totalAds']} views
    """
    
    # আপনার Telegram এ পাঠানো
    requests.post(f"https://api.telegram.org/bot{YOUR_BOT_TOKEN}/sendMessage", 
                  json={'chat_id': YOUR_TELEGRAM_ID, 'text': message})
    return "OK"