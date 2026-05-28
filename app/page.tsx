import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-sm">
        <div className="text-2xl font-bold text-green-600">🥗 NutriAI</div>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Track Your Nutrition with AI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Upload food images, get instant nutrition facts, and track your health goals with our AI-powered nutrition tracker.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="text-lg">Get Started Free</Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline" className="text-lg">Learn More</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
            <div className="text-3xl mb-3">📸</div>
            <h3 className="text-xl font-semibold mb-2">AI Food Detection</h3>
            <p className="text-gray-600 dark:text-gray-400">Upload food photos and get instant recognition powered by Google Gemini Vision API.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-semibold mb-2">Nutrition Tracking</h3>
            <p className="text-gray-600 dark:text-gray-400">Track calories, macros, and micronutrients with detailed nutritional data.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
            <div className="text-3xl mb-3">⚖️</div>
            <h3 className="text-xl font-semibold mb-2">Fitness Calculations</h3>
            <p className="text-gray-600 dark:text-gray-400">Calculate BMI, BMR, TDEE, and get personalized calorie targets.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Coach</h3>
            <p className="text-gray-600 dark:text-gray-400">Get personalized nutrition advice from our AI nutrition coach.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
