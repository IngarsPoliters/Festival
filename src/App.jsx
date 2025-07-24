import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { CalendarDays, MapPin, Users, Tent, ShoppingCart, Clock, AlertTriangle, CheckCircle, Star, Cloud, CloudRain } from 'lucide-react'
import './App.css'

function App() {
  // Load initial state from localStorage or use empty object
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('festival-checklist')
    return saved ? JSON.parse(saved) : {}
  })

  // Save checkedItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('festival-checklist', JSON.stringify(checkedItems))
  }, [checkedItems])

  const handleItemCheck = (category, index) => {
    const key = `${category}-${index}`
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const packingCategories = {
    essentials: {
      title: "The Absolute Essentials",
      subtitle: "Don't Leave Home Without These!",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      items: [
        'Festival Tickets (physical or digital)',
        'Identification (ID/passport)',
        'Cash & cards',
        'Phone & portable charger/power bank',
        'Medications (prescription + pain relievers)',
        'First-aid kit (basic)',
        'Reusable water bottle',
        'Headlamp or flashlight with extra batteries',
        'Bin bags (for rubbish and wet clothes)',
        'Hand sanitizer & wet wipes'
      ]
    },
    clothing: {
      title: "Clothing & Rain Gear",
      subtitle: "Embrace the Irish Summer!",
      icon: CloudRain,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      items: [
        'Waterproof jacket (essential!)',
        'Waterproof trousers',
        'Sturdy, waterproof footwear (wellies recommended)',
        'Plenty of socks (wool or synthetic)',
        'Warm layers (fleeces, hoodies, thermal tops)',
        'T-shirts/light tops',
        'Trousers/jeans/leggings',
        'Shorts/skirts (if sunny)',
        'Warm hat, gloves, & scarf',
        'Sun hat & sunglasses',
        'Sleepwear'
      ]
    },
    camping: {
      title: "Camping Comfort",
      subtitle: "Your Home Away From Home",
      icon: Tent,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      items: [
        'Tents (2 provided) ✓',
        'Mattresses (2 provided) ✓',
        'Sleeping bags (need to pack)',
        'Pillows (optional, but recommended)',
        'Foot pump for mattresses (provided) ✓',
        'Tarps (2 provided, for rain protection) ✓',
        'Camping chairs (4 provided) ✓',
        'Cooler/cool box',
        'Torch/lantern for inside tent',
        'Mallet & spare tent pegs',
        'Duct tape (ultimate repair kit!)',
        'Small brush & dustpan'
      ]
    },
    food: {
      title: "Food & Cooking",
      subtitle: "Save Money, Eat Well!",
      icon: ShoppingCart,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      items: [
        'Camping stove with butane gas (provided) ✓',
        'Cooking pots/pans (provided) ✓',
        'Food/snacks (savoury & sweet - to buy)',
        'Water (to buy)',
        'Tea or coffee (to buy)',
        'Milk/creamer (if desired)',
        'Sugar/sweetener',
        'Cooking oil (small bottle)',
        'Salt, pepper, & basic seasonings',
        'Reusable plates, bowls, cups, & cutlery',
        'Washing-up liquid & sponge',
        'Tea towels',
        'Food storage containers/bags',
        'Bottle opener/corkscrew',
        'Can opener',
        'Sharp knife & chopping board',
        'Cooler with ice packs'
      ]
    },
    personal: {
      title: "Personal Care & Hygiene",
      subtitle: "Stay Fresh!",
      icon: CheckCircle,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      items: [
        'Toothbrush & toothpaste',
        'Shampoo & conditioner (travel-sized)',
        'Soap/body wash (biodegradable preferred)',
        'Deodorant',
        'Sunscreen (even on cloudy days!)',
        'Insect repellent',
        'Lip balm',
        'Hairbrush/comb',
        'Contact lenses & solution (if applicable)',
        'Glasses (if you wear them)',
        'Small mirror',
        'Feminine hygiene products (if applicable)',
        'Small towel (microfibre recommended)'
      ]
    },
    extras: {
      title: "Festival Fun & Extras",
      subtitle: "Enhance Your Experience!",
      icon: Star,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      items: [
        'Small day bag/fanny pack',
        'Portable ashtray (if applicable)',
        'Glow sticks/fun accessories',
        'Portable fan (if hot weather)',
        'Small foldable stool',
        'Camera (check festival rules)',
        'Portable speaker (be mindful of neighbors!)',
        'Earplugs (for music)',
        'Extra duct tape (it\'s that useful!)'
      ]
    }
  }

  const itinerary = [
    {
      date: 'Wednesday, July 30th, 2025',
      events: [
        { time: 'Afternoon', activity: 'Friends Alina and Noel fly from Spain to Dublin' },
        { time: 'After 8:00 PM', activity: 'Meet friends Alina and Noel in Athlone. Pick them up' },
        { time: 'Dinner & Drinks', activity: 'Head to The Dark Horse for food and pints' },
        { time: 'Night', activity: 'Check into Glen Abhainn Village Dublin Road, Athlone' }
      ]
    },
    {
      date: 'Thursday, July 31st, 2025',
      events: [
        { time: 'Morning', activity: 'Wake up in Athlone' },
        { time: 'Travel', activity: 'Drive from Athlone to All Together Now festival in Waterford (Approx. 2 hours 15 minutes - 2 hours 30 minutes)' },
        { time: 'Arrival', activity: 'Arrive at Curraghmore Estate, Portlaw, Co. Waterford. Set up camp' },
        { time: 'Evening', activity: 'Festival begins! Enjoy All Together Now' }
      ]
    },
    {
      date: 'Friday, August 1st - Sunday, August 3rd, 2025',
      events: [
        { time: 'All Day', activity: 'Enjoy the festival!' }
      ]
    },
    {
      date: 'Monday, August 4th, 2025',
      events: [
        { time: 'Morning', activity: 'Pack up camp and depart from the festival' }
      ]
    }
  ]

  const festivalRules = [
    'Each person on a weekend camping ticket is allowed to bring 24 cans OR 1 litre of spirits OR 1.5 litres of wine for personal consumption',
    'Fireworks, Chinese Lanterns, flares and high power torches are not allowed',
    'Wax candles or any type of candles or incense are not allowed',
    'Glass is not allowed',
    'Soft drinks and food are allowed',
    'You cannot park your vehicle beside your tent',
    'Do not follow sat nav / Google Maps directly to the festival site'
  ]

  const weatherInfo = {
    forecast: "Typical Irish summer weather expected: mild temperatures (12-18°C), frequent rain showers, and cloudy conditions",
    tips: [
      "Layering is essential - temperatures can vary throughout the day",
      "Rain gear is non-negotiable - even if forecast looks good",
      "Waterproof footwear highly recommended for muddy conditions",
      "Pack more socks than you think you'll need!"
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Together Now Festival Planning</h1>
          <p className="text-lg text-gray-600">July 31 - August 3, 2025 • Curraghmore Estate, Waterford</p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              4 People
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Crossmolina → Athlone → Waterford
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Tent className="w-4 h-4" />
              Camping
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <CloudRain className="w-4 h-4" />
              Rain Expected
            </Badge>
          </div>
        </header>

        <Tabs defaultValue="packing" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="packing" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Smart Packing
            </TabsTrigger>
            <TabsTrigger value="itinerary" className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Itinerary
            </TabsTrigger>
            <TabsTrigger value="rules" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Festival Rules
            </TabsTrigger>
          </TabsList>

          <TabsContent value="packing" className="space-y-6">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-blue-600" />
                  Weather-Adjusted Packing Guide
                </CardTitle>
                <CardDescription>
                  {weatherInfo.forecast}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {weatherInfo.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              {Object.entries(packingCategories).map(([key, category]) => {
                const IconComponent = category.icon
                const checkedCount = category.items.filter((_, index) => checkedItems[`${key}-${index}`]).length
                const totalCount = category.items.length
                const completionPercentage = Math.round((checkedCount / totalCount) * 100)
                
                return (
                  <Card key={key} className={`${category.bgColor} ${category.borderColor} border-2`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconComponent className={`w-6 h-6 ${category.color}`} />
                          <div>
                            <CardTitle className={`${category.color}`}>{category.title}</CardTitle>
                            <CardDescription className="text-gray-600">
                              {category.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${category.color}`}>
                            {checkedCount}/{totalCount} packed
                          </div>
                          <div className="text-xs text-gray-500">
                            {completionPercentage}% complete
                          </div>
                        </div>
                      </div>
                      {completionPercentage > 0 && (
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              category.color.includes('red') ? 'bg-red-500' :
                              category.color.includes('blue') ? 'bg-blue-500' :
                              category.color.includes('green') ? 'bg-green-500' :
                              category.color.includes('orange') ? 'bg-orange-500' :
                              category.color.includes('purple') ? 'bg-purple-500' :
                              'bg-pink-500'
                            }`}
                            style={{ width: `${completionPercentage}%` }}
                          ></div>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.items.map((item, index) => {
                          const isChecked = checkedItems[`${key}-${index}`] || false
                          const isProvided = item.includes('provided') || item.includes('✓')
                          
                          return (
                            <div key={index} className="flex items-center space-x-3">
                              <Checkbox
                                id={`${key}-${index}`}
                                checked={isChecked}
                                onCheckedChange={() => handleItemCheck(key, index)}
                              />
                              <label
                                htmlFor={`${key}-${index}`}
                                className={`text-sm cursor-pointer flex-1 ${
                                  isChecked ? 'line-through text-gray-500' : 'text-gray-700'
                                } ${isProvided ? 'font-medium text-green-700' : ''}`}
                              >
                                {item}
                              </label>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="bg-yellow-50 border-yellow-200 border-2">
              <CardHeader>
                <CardTitle className="text-yellow-800">Important Reminders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span className="text-sm text-yellow-800">Check weather forecast before departure</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span className="text-sm text-yellow-800">Pack light, pack smart - you'll carry everything</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span className="text-sm text-yellow-800">Label your gear if sharing equipment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span className="text-sm text-yellow-800">Leave no trace - respect the environment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="itinerary" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  Trip Itinerary
                </CardTitle>
                <CardDescription>
                  Our complete schedule from Athlone to the festival
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">{day.date}</h3>
                    <div className="space-y-2">
                      {day.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex gap-3">
                          <Badge variant="outline" className="min-w-fit">
                            {event.time}
                          </Badge>
                          <p className="text-gray-700">{event.activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Travel Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Hotel Details</h4>
                    <p className="text-sm text-gray-600">Glen Abhainn Village Dublin Road, Athlone</p>
                    <p className="text-sm text-gray-600">Check-in: 3:00 PM - 9:00 PM</p>
                    <p className="text-sm text-gray-600">Check-out: 11:00 AM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Driving Time</h4>
                    <p className="text-sm text-gray-600">Athlone to Waterford: 2h 15m - 2h 30m</p>
                    <p className="text-sm text-gray-600">Distance: ~160-180 km</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Festival Rules & Regulations</CardTitle>
                <CardDescription>
                  Important rules to follow at All Together Now festival
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {festivalRules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  )
}

export default App



