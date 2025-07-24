# Festival Planning App

All Together Now Festival Planning App for friends going to the festival in Waterford, Ireland (July 31 - August 3, 2025).

## Features

- **Interactive Packing Checklist**: Track your packing progress with persistent localStorage
- **Live Weather Forecast**: Real-time weather data for Waterford during the festival period
- **Festival Itinerary**: Complete trip schedule and travel information
- **Festival Rules**: Important regulations and restrictions

## Weather Forecast Setup

The app includes a live weather forecast for Waterford, Ireland. To enable this feature:

1. **Get a free API key** from [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for free
   - Get 1,000 API calls per day at no cost

2. **Set up environment variables**:
   ```bash
   # Create .env file in the root directory
   cp .env.example .env
   
   # Add your API key to .env
   VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
   ```

3. **Weather Data Includes**:
   - Temperature highs and lows
   - Wind speeds
   - Rain probability and amounts
   - 4-day forecast for festival period
   - Weather icons and conditions

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

The app is ready for deployment on static hosting platforms like:
- Coolify
- Netlify
- Vercel
- GitHub Pages

Make sure to set the `VITE_OPENWEATHER_API_KEY` environment variable in your deployment platform.