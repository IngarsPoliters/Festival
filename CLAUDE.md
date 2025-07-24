# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based festival planning application for the "All Together Now" festival in Ireland. The app provides an interactive packing checklist, itinerary, and festival information for a group camping trip.

## Architecture

- **Single-page React application** with no complex routing or state management
- **Component structure**: Main App component with embedded UI components imported from a custom UI library
- **State management**: Simple useState hooks for form data and checklist tracking
- **Styling**: Tailwind CSS with custom color schemes and responsive design
- **Data structure**: Static objects containing festival information, packing lists, and itinerary

## Key Components

- **Packing System**: Interactive checklist with categories (essentials, clothing, camping, food, personal care, extras)
- **Progress Tracking**: Real-time completion percentages and visual progress bars for each packing category
- **Tabbed Interface**: Four main sections using custom Tabs component
- **Weather Integration**: Weather-aware packing recommendations for Irish summer conditions

## UI Library Dependencies

The app uses a custom UI component library with these imports:
- `@/components/ui/button.jsx`
- `@/components/ui/card.jsx`
- `@/components/ui/tabs.jsx`
- `@/components/ui/badge.jsx`
- `@/components/ui/textarea.jsx`
- `@/components/ui/checkbox.jsx`

Icons are provided by Lucide React.

## File Structure

- `App.jsx` - Main application component containing all logic and data
- `index.html` - Basic HTML entry point with React root div
- `App.css` - Referenced but not present in current structure

## Data Management

All application data is hardcoded within the App component:
- `packingCategories` - Categorized packing lists with UI styling config
- `itinerary` - Trip schedule and timeline
- `festivalRules` - Festival regulations and restrictions
- `weatherInfo` - Weather forecast and packing tips

## Development Notes

- No build system configuration files found (package.json, etc.)
- No test files or testing framework present
- Application appears to be a standalone React component without typical project scaffolding
- CSS classes suggest Tailwind CSS is expected to be available