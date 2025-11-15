import { TrendingUp, PieChart, Target, Sparkles, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      <nav className="fixed w-full bg-[#0a0f1c]/80 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo1.transparent.png.png" alt="DormCash Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold">DormCash</span>
          </div>
          <a href="#" className="transition-transform hover:scale-105 duration-300">
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-14"
            />
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#007991] to-[#78FFD6] rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Budget Tracking Made Simple</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Master Your Money in
              <span className="block mt-2 bg-gradient-to-r from-[#007991] to-[#78FFD6] bg-clip-text text-transparent">
                College & Beyond
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              The ultimate budget tracking app designed specifically for students and high schoolers.
              Track spending, set goals, and build healthy financial habits.
            </p>
            <a href="#" className="inline-block transition-transform hover:scale-105 duration-300">
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-20"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Students Love DormCash</h2>
            <p className="text-gray-400 text-lg">Everything you need to stay on top of your finances</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#12192b] rounded-2xl p-8 border border-gray-800/50 hover:border-[#78FFD6]/30 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#007991] to-[#78FFD6] rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Analytics</h3>
              <p className="text-gray-400 leading-relaxed">
                Get detailed insights into your spending patterns with daily, weekly, monthly, and semester views.
              </p>
            </div>

            <div className="bg-[#12192b] rounded-2xl p-8 border border-gray-800/50 hover:border-[#78FFD6]/30 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#007991] to-[#78FFD6] rounded-xl flex items-center justify-center mb-6">
                <PieChart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Category Tracking</h3>
              <p className="text-gray-400 leading-relaxed">
                Organize expenses by category and see exactly where your money goes each month.
              </p>
            </div>

            <div className="bg-[#12192b] rounded-2xl p-8 border border-gray-800/50 hover:border-[#78FFD6]/30 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#007991] to-[#78FFD6] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Savings Goals</h3>
              <p className="text-gray-400 leading-relaxed">
                Set and track financial goals for the things you want, from gadgets to experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#12192b]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See DormCash in Action</h2>
            <p className="text-gray-400 text-lg">A comprehensive financial companion in your pocket</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-8">
              <div className="bg-[#12192b] rounded-2xl p-8 border border-gray-800/50">
                <div className="mb-6">
                  <img
                    src="/IMG_20251102_212201.jpg"
                    alt="DormCash Home Screen"
                    className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">Dashboard at a Glance</h3>
                <p className="text-gray-400 leading-relaxed">
                  View your remaining budget, daily spending breakdown by category, and see how much time you have left in the month. Everything you need on one beautiful home screen.
                </p>
              </div>

              <div className="bg-[#12192b] rounded-2xl p-8 border border-gray-800/50">
                <div className="mb-6">
                  <img
                    src="/IMG_20251102_212255.jpg"
                    alt="DormCash Savings Goals"
                    className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">Achieve Your Dreams</h3>
                <p className="text-gray-400 leading-relaxed">
                  Set savings goals for things you want to buy and track your progress. Celebrate when you reach milestones and stay motivated to save smarter.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#12192b] rounded-2xl p-8 border border-gray-800/50">
                <div className="mb-6">
                  <img
                    src="/IMG_20251102_212222.jpg"
                    alt="DormCash Analytics"
                    className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">Powerful Analytics</h3>
                <p className="text-gray-400 leading-relaxed">
                  Deep dive into your spending patterns with visual charts and graphs. Compare income vs expenses and understand your financial trends over time.
                </p>
              </div>

              <div className="bg-[#12192b] rounded-2xl p-8 border border-gray-800/50">
                <div className="mb-6">
                  <img
                    src="/IMG_20251102_212330.jpg"
                    alt="DormCash Category Breakdown"
                    className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">Category Insights</h3>
                <p className="text-gray-400 leading-relaxed">
                  See detailed breakdowns of your spending by category with progress bars and percentages. Stay within budget limits and make informed decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-[#12192b] rounded-2xl p-8 border border-gray-800/50 max-w-md w-full">
              <div className="mb-6 flex justify-center">
                <img
                  src="/IMG_20251102_212240.jpg"
                  alt="DormCash Bill Reminders"
                  className="w-full max-w-xs rounded-2xl shadow-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Smart Bill Reminders</h3>
              <p className="text-gray-400 leading-relaxed text-center">
                Never miss a payment with intelligent reminders for upcoming bills and expenses. Track recurring payments and stay on top of your financial obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-400 text-lg">Everything designed for student success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 bg-[#12192b] rounded-xl p-6 border border-gray-800/50">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#78FFD6]" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Real-Time Tracking</h4>
                <p className="text-gray-400">Log expenses instantly and watch your budget update in real-time</p>
              </div>
            </div>

            <div className="flex gap-4 bg-[#12192b] rounded-xl p-6 border border-gray-800/50">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#78FFD6]" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Smart Alerts</h4>
                <p className="text-gray-400">See before you overspend and stay in control of your budget</p>
              </div>
            </div>

            <div className="flex gap-4 bg-[#12192b] rounded-xl p-6 border border-gray-800/50">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#78FFD6]" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Easy Setup</h4>
                <p className="text-gray-400">Get started in minutes with our simple onboarding process</p>
              </div>
            </div>

            <div className="flex gap-4 bg-[#12192b] rounded-xl p-6 border border-gray-800/50">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#78FFD6]" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Your Privacy Matters</h4>
                <p className="text-gray-400">We keep your financial data safe with industry-standard security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center gap-3 mb-4">
            <img src="/logo1.transparent.png.png" alt="DormCash Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">DormCash</span>
          </div>
          <p className="text-gray-400">Budget tracking made simple for students</p>
          <p className="text-gray-500 text-sm mt-4">© 2025 DormCash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;