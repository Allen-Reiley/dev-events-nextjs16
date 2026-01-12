'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

// Import instrumentation client for initialization
import '../instrumentation-client';

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
