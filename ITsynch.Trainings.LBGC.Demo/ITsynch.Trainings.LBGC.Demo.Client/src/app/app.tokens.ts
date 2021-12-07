import { InjectionToken } from '@angular/core';
import { SidebarItem } from './layout/layout.models';

export const ITSYNCH_TRAININGS_DEMO_BASE_API_URL = new InjectionToken<string>(
  'ITSYNCH_TRAININGS_DEMO_BASE_API_URL'
);

export const ITSYNCH_TRAININGS_DEMO_SIDEBAR_ITEMS = new InjectionToken<SidebarItem[]>(
  'ITSYNCH_TRAININGS_DEMO_SIDEBAR_ITEMS'
);
