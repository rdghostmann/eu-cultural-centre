"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, Calendar, FileText, Settings, BarChart3, Mail, Globe, Plus, Edit, Trash2 } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const adminStats = [
  { title: "Total Users", value: "1,247", change: "+12%", icon: <Users className="h-6 w-6" /> },
  { title: "Active Programs", value: "23", change: "+3", icon: <Calendar className="h-6 w-6" /> },
  { title: "Applications", value: "89", change: "+15%", icon: <FileText className="h-6 w-6" /> },
  { title: "Events", value: "12", change: "+2", icon: <Globe className="h-6 w-6" /> },
]

const recentActivities = [
  { action: "New application submitted", user: "John Doe", time: "2 hours ago", type: "application" },
  { action: "Event created", user: "Admin", time: "4 hours ago", type: "event" },
  { action: "User registered", user: "Jane Smith", time: "6 hours ago", type: "user" },
  { action: "Program updated", user: "Admin", time: "1 day ago", type: "program" },
]

const quickActions = [
  { title: "Create Event", icon: <Plus className="h-5 w-5" />, color: "bg-blue-600" },
  { title: "Manage Users", icon: <Users className="h-5 w-5" />, color: "bg-green-600" },
  { title: "Send Newsletter", icon: <Mail className="h-5 w-5" />, color: "bg-purple-600" },
  { title: "View Analytics", icon: <BarChart3 className="h-5 w-5" />, color: "bg-orange-600" },
]

export default function AdminPage() {
  const { ref: dashboardRef, isInView: dashboardInView } = useScrollAnimation()
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation()
  const { ref: actionsRef, isInView: actionsInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        className="bg-white border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-ecc-slate">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your ECC Nigeria website and programs</p>
            </div>
            <Badge className="bg-violet-500 text-white">Administrator</Badge>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto py-8">
        {/* Stats Overview */}
        <section ref={statsRef} className="mb-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {adminStats.map((stat, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={{ scale: 1.02 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-ecc-slate">{stat.value}</p>
                        <p className="text-sm text-green-600">{stat.change}</p>
                      </div>
                      <motion.div
                        className="p-3 bg-ecc-blue/10 rounded-lg text-ecc-blue"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {stat.icon}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <section ref={actionsRef} className="lg:col-span-1">
            <motion.div variants={fadeInUp} initial="hidden" animate={actionsInView ? "visible" : "hidden"}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="space-y-3"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={actionsInView ? "visible" : "hidden"}
                  >
                    {quickActions.map((action, index) => (
                      <motion.div key={index} variants={staggerItem} whileHover={hoverScale}>
                        <Button className={`w-full justify-start ${action.color} hover:opacity-90`} variant="default">
                          {action.icon}
                          <span className="ml-2">{action.title}</span>
                        </Button>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              className="mt-6"
              variants={fadeInUp}
              initial="hidden"
              animate={actionsInView ? "visible" : "hidden"}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest system activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={actionsInView ? "visible" : "hidden"}
                  >
                    {recentActivities.map((activity, index) => (
                      <motion.div
                        key={index}
                        variants={staggerItem}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-2 h-2 bg-ecc-blue rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-ecc-slate">{activity.action}</p>
                          <p className="text-xs text-gray-500">by {activity.user}</p>
                          <p className="text-xs text-gray-400">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* Main Content Area */}
          <section ref={dashboardRef} className="lg:col-span-2">
            <motion.div variants={fadeInUp} initial="hidden" animate={dashboardInView ? "visible" : "hidden"}>
              <Card>
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>Manage website content and programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Quick Content Form */}
                    <div>
                      <h3 className="text-lg font-semibold text-ecc-slate mb-4">Create New Content</h3>
                      <div className="space-y-4">
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input placeholder="Content Title" />
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ecc-blue focus:border-transparent">
                            <option value="">Select Content Type</option>
                            <option value="event">Event</option>
                            <option value="program">Program</option>
                            <option value="news">News Article</option>
                            <option value="page">Page</option>
                          </select>
                        </motion.div>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Textarea placeholder="Content Description" className="min-h-[100px]" />
                        </motion.div>
                        <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-ecc-blue hover:bg-ecc-blue/90">Create Content</Button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content List */}
                    <div>
                      <h3 className="text-lg font-semibold text-ecc-slate mb-4">Recent Content</h3>
                      <div className="space-y-3">
                        {[
                          { title: "Cultural Heritage Workshop", type: "Event", status: "Published" },
                          { title: "Student Exchange Program", type: "Program", status: "Draft" },
                          { title: "Partnership Announcement", type: "News", status: "Published" },
                        ].map((content, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            <div>
                              <h4 className="font-medium text-ecc-slate">{content.title}</h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {content.type}
                                </Badge>
                                <Badge
                                  variant={content.status === "Published" ? "default" : "secondary"}
                                  className="text-xs"
                                >
                                  {content.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button size="sm" variant="outline">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 hover:text-red-700 bg-transparent"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </motion.div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  )
}
