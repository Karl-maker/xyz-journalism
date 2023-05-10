const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    // Google Analytics tracking code here
    console.log(`Tracking event: ${category}, ${action}, ${label}, ${value}`);
}

export {
    trackEvent
};