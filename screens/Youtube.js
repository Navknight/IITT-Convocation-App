import React, { useEffect } from 'react';
import { View, Linking } from 'react-native';

const YouTubeLinkScreen = () => {
    const openYouTubeLink = () => {
        const youtubeLink = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID';
        
        // Use Linking to open the URL
        Linking.openURL(youtubeLink).catch((err) =>
            console.error('Error opening YouTube link:', err)
        );
    };

    useEffect(() => {
        openYouTubeLink();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    );
};

export default YouTubeLinkScreen;
