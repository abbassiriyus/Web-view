import React, { useState, useEffect } from 'react';
import { Dimensions, View, WebView } from 'react-native';

const TelegramWebView = () => {
  const [webViewHeight, setWebViewHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const handleWebViewMessage = (event) => {
      // WebView'dan kelgan xabarlarni ushlab olish va qayta ishlash
      console.log('Received message from WebView:', event.nativeEvent.data);
    };

    // WebView'dan kelayotgan xabarlarni ushlab olish uchun eventListener o'rnatish
    window.addEventListener('message', handleWebViewMessage);

    return () => {
      // Komponent oʻchganda eventListener ni olib tashlash
      window.removeEventListener('message', handleWebViewMessage);
    };
  }, []);

  const handleWebViewNavigationStateChange = (navState) => {
    // WebView navigatsiya holati oʻzgarganida chaqiriladigan funksiya
    if (navState.title) {
      // WebView sarlavhasi oʻzgarganda, WebView balandligini sozlash
      setWebViewHeight(Dimensions.get('window').height);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://your-telegram-webview-url.com' }}
        style={{ height: webViewHeight }}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

export default TelegramWebView;