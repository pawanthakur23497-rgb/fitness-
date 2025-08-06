"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dumbbell,
  Heart,
  Zap,
  Users,
  Star,
  Play,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Clock,
  Target,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-20 items-center justify-between mx-auto">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-75"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-xl">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                The Fit Club
              </span>
              <div className="text-xs text-orange-500 font-medium">
                FITNESS REDEFINED
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {[
              "Home",
              "Programs",
              "Trainers",
              "Pricing",
              "About",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
          <a href="#contact">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-6">
              Join Now
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww"
          alt="Modern Gym Interior"
          fill
          className="object-cover"
          priority
        />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="relative z-20 text-center text-white px-4 max-w-6xl">
          <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="h-4 w-4 mr-2 text-orange-400" />
            <span className="text-sm font-medium">Fitness Redefined</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Transform Your
            </span>
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Body & Mind
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join The Fit Club and discover the power within you. Professional
            trainers, state-of-the-art equipment, and a community that supports
            your transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=tUykoP30Gb0"
              target="_blank"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 rounded-full border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group bg-transparent"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                About The Fit Club
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Where Fitness Meets
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                At The Fit Club, we believe fitness is more than just working
                out—it's about building a lifestyle that empowers you to be your
                best self. Our state-of-the-art facility, expert trainers, and
                supportive community create the perfect environment for your
                transformation.
              </p>

              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: "500+", label: "Happy Members", icon: Users },
                  { number: "15+", label: "Expert Trainers", icon: Award },
                  { number: "5", label: "Years Experience", icon: TrendingUp },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
              <Image
                src="https://cdn.shopify.com/s/files/1/0744/0203/files/2.Image.jpg?v=1704207401"
                alt="Trainer helping client"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="container mx-auto items-center relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Our Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              Choose Your
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Fitness Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From high-intensity workouts to mindful yoga sessions, we have
              programs designed for every fitness level and goal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cardio Burn",
                description:
                  "High-energy cardio sessions to boost your endurance and burn calories",
                icon: Heart,
                intensity: "High",
                duration: "45 min",
                gradient: "from-red-500 to-pink-500",
                bgGradient: "from-red-500/10 to-pink-500/10",
              },
              {
                title: "Strength Training",
                description:
                  "Build muscle and increase strength with our comprehensive weight training",
                icon: Dumbbell,
                intensity: "Medium",
                duration: "60 min",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-500/10 to-cyan-500/10",
              },
              {
                title: "HIIT Workouts",
                description:
                  "Maximum results in minimum time with high-intensity interval training",
                icon: Zap,
                intensity: "High",
                duration: "30 min",
                gradient: "from-yellow-500 to-orange-500",
                bgGradient: "from-yellow-500/10 to-orange-500/10",
              },
              {
                title: "Yoga & Mobility",
                description:
                  "Improve flexibility, balance, and mental wellness through yoga practice",
                icon: Target,
                intensity: "Low",
                duration: "50 min",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-500/10 to-emerald-500/10",
              },
              {
                title: "Personal Coaching",
                description:
                  "One-on-one training sessions tailored to your specific goals",
                icon: Users,
                intensity: "Custom",
                duration: "60 min",
                gradient: "from-purple-500 to-violet-500",
                bgGradient: "from-purple-500/10 to-violet-500/10",
              },
              {
                title: "Group Classes",
                description:
                  "Fun and motivating group workouts with like-minded individuals",
                icon: Users,
                intensity: "Medium",
                duration: "45 min",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-500/10 to-red-500/10",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-6">
                    <Badge
                      className={`bg-gradient-to-r ${program.bgGradient} text-white border-0`}
                    >
                      {program.intensity} Intensity
                    </Badge>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="h-4 w-4 mr-2" />
                      {program.duration}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 rounded-full group-hover:shadow-lg transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50"></div>
        <div className="container mx-auto items-center relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Meet Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Expert Trainers,
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our certified trainers bring years of experience and passion to
              help you achieve your fitness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                specialty: "Strength & Conditioning",
                experience: "8 years",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4NYaMGS8d806xsl4U3GFR8jif0vKMWlPRg&s",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                name: "Mike Rodriguez",
                specialty: "HIIT & Cardio",
                experience: "6 years",
                image:
                  "https://media.istockphoto.com/id/972833328/photo/male-personal-trainer-helping-sportswoman-to-do-exercises-with-barbell-at-gym.jpg?s=612x612&w=0&k=20&c=5kIxaobVDjjDrYvv8qNB2lGJoBImzHvj-csu30o_lZY=",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                name: "Emma Chen",
                specialty: "Yoga & Wellness",
                experience: "10 years",
                image:
                  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2KmXXVDcSQApcHWJ4K0PBJ/e4ffd95fc1d4de560174917195229183/GettyImages-1163686524.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                name: "David Thompson",
                specialty: "Personal Training",
                experience: "12 years",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_D4hDQmQHV8BEXjwkniRyh97qZH79zEqyVg&s",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((trainer, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${trainer.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6">
                    Book Session
                  </Button>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-1">
                    {trainer.specialty}
                  </p>
                  <p className="text-sm text-gray-500">
                    {trainer.experience} experience
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="container mx-auto items-center relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Membership Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              Choose Your
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Flexible membership options designed to fit your lifestyle and
              budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$29",
                period: "/month",
                description: "Perfect for getting started",
                features: [
                  "Access to gym equipment",
                  "Locker room access",
                  "Basic fitness assessment",
                  "Mobile app access",
                ],
                popular: false,
                gradient: "from-gray-600 to-gray-700",
                bgGradient: "from-gray-500/10 to-gray-600/10",
              },
              {
                name: "Premium",
                price: "$59",
                period: "/month",
                description: "Most popular choice",
                features: [
                  "Everything in Basic",
                  "Unlimited group classes",
                  "2 personal training sessions",
                  "Nutrition consultation",
                  "Priority booking",
                ],
                popular: true,
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-500/10 to-red-500/10",
              },
              {
                name: "Elite",
                price: "$99",
                period: "/month",
                description: "Ultimate fitness experience",
                features: [
                  "Everything in Premium",
                  "Unlimited personal training",
                  "Custom meal planning",
                  "Recovery services",
                  "Guest passes (2/month)",
                ],
                popular: false,
                gradient: "from-purple-500 to-violet-500",
                bgGradient: "from-purple-500/10 to-violet-500/10",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular
                    ? "scale-105 border-orange-500/50 shadow-orange-500/25"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 text-sm font-semibold shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact">
                    <Button
                      className={`w-full rounded-full py-6 text-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      }`}
                    >
                      Choose Plan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50"></div>
        <div className="container mx-auto items-center relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Real Results,
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Real People
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how The Fit Club has transformed the lives of our amazing
              members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jessica Martinez",
                result: "Lost 30 lbs in 4 months",
                quote:
                  "The Fit Club changed my life completely. The trainers are amazing and the community is so supportive!",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3w5&auto=format&fit=crop&w=100&q=80", // fit young woman smiling
                gradient: "from-pink-500 to-rose-500",
              },
              {
                name: "Robert Kim",
                result: "Gained 15 lbs of muscle",
                quote:
                  "I've never felt stronger or more confident. The personal training sessions were game-changing.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3w5&auto=format&fit=crop&w=100&q=80", // fit Asian male in gym
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                name: "Maria Santos",
                result: "Improved flexibility by 40%",
                quote:
                  "The yoga classes helped me find balance in both my body and mind. Absolutely love it here!",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3w5&auto=format&fit=crop&w=100&q=80", // yoga woman in serene pose
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full blur opacity-75`}
                      ></div>
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="relative rounded-full border-2 border-white shadow-lg"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p
                        className={`text-sm font-semibold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
                      >
                        {testimonial.result}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 text-sm font-medium mb-6">
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              Ready to Start Your
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Fitness Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contact us today for a free consultation and take the first step
              towards your fitness goals.
            </p>
          </div>

          {/* Contact Grid */}
          <div>
            {/* Form Card */}
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-300">
                      First Name
                    </label>
                    <Input
                      placeholder="Your first name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-300">
                      Last Name
                    </label>
                    <Input
                      placeholder="Your last name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-300">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-300">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="Your phone number"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-300">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your fitness goals..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button
                  size="lg"
                  onClick={() => {
                    alert("Message sent successfully!");
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full py-6 text-lg font-semibold"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-12 mt-10">
              <h3 className="text-2xl font-bold text-white">Visit our gym</h3>
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "123 Fitness Street\nDowntown, NY 10001",
                    gradient: "from-red-500 to-pink-500",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "(555) 123-4567",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@thefitclub.com",
                    gradient: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: Clock,
                    title: "Hours",
                    content:
                      "Mon-Fri: 5:00 AM - 11:00 PM\nSat-Sun: 6:00 AM - 10:00 PM",
                    gradient: "from-orange-500 to-red-500",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div>
                <h4 className="font-bold text-white mb-4">Follow us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Instagram, gradient: "from-pink-500 to-rose-500" },
                    { icon: Facebook, gradient: "from-blue-500 to-cyan-500" },
                    { icon: Twitter, gradient: "from-sky-500 to-blue-500" },
                    { icon: Youtube, gradient: "from-red-500 to-pink-500" },
                  ].map((social, index) => (
                    <Button
                      key={index}
                      size="icon"
                      className={`bg-gradient-to-r ${social.gradient} hover:scale-110 transition-all duration-300 shadow-lg`}
                    >
                      <social.icon className="h-5 w-5 text-white" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto items-center relative text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Stay Updated with Fitness Tips & News
            </h3>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Subscribe to our newsletter and get exclusive workout tips,
              nutrition advice, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 rounded-full px-6 py-6 text-lg"
              />
              <Button
                size="lg"
                className="bg-white text-orange-500 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-xl">
                    <Dumbbell className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">
                    The Fit Club
                  </span>
                  <div className="text-xs text-orange-400 font-medium">
                    FITNESS REDEFINED
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transform your body, transform your life. Join our community of
                fitness enthusiasts today.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, gradient: "from-pink-500 to-rose-500" },
                  { icon: Facebook, gradient: "from-blue-500 to-cyan-500" },
                  { icon: Twitter, gradient: "from-sky-500 to-blue-500" },
                  { icon: Youtube, gradient: "from-red-500 to-pink-500" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    size="icon"
                    className={`bg-gradient-to-r ${social.gradient} hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <social.icon className="h-4 w-4 text-white" />
                  </Button>
                ))}
              </div>
            </div>

            {[
              {
                title: "Quick Links",
                links: ["Home", "Programs", "Trainers", "Pricing", "About Us"],
              },
              {
                title: "Programs",
                links: [
                  "Cardio Burn",
                  "Strength Training",
                  "HIIT Workouts",
                  "Yoga & Mobility",
                  "Personal Coaching",
                ],
              },
              {
                title: "Contact Info",
                links: [
                  "123 Fitness Street, NY 10001",
                  "(555) 123-4567",
                  "info@thefitclub.com",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-white mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} The Fit Club. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <a href="#contact" className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full shadow-2xl hover:shadow-orange-500/25 px-6 py-6 group"
        >
          <Dumbbell className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          Join Now
        </Button>
      </a>
    </div>
  );
}
