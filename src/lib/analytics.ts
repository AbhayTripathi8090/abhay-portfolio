type GtagCommand = "event" | "config" | "js";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: GtagCommand,
      eventName: string | Date,
      eventParams?: EventParams
    ) => void;
  }
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  const eventParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined)
  ) as EventParams;

  window.gtag("event", eventName, eventParams);
}
