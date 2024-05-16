import * as amplitude from '@amplitude/analytics-browser';

const initializeAmplitude = () => {
  amplitude.init('AMPLITUDE_API_KEY');
};

const logEvent = (eventName, eventProperties) => {
  amplitude.track(eventName, eventProperties);
  console.log(`Dispatch Event Name: ${eventName}`);
};

export { initializeAmplitude, logEvent };