import React from 'react';
import { Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              name: "Starter",
              price: "Free",
              description: "Perfect for getting started",
              features: [
                "Up to 3 active projects",
                "Basic smart contract templates",
                "Community support",
                "Standard payment protection"
              ]
            },
            {
              name: "Professional",
              price: "5%",
              description: "Most popular for freelancers",
              features: [
                "Unlimited active projects",
                "Advanced smart contracts",
                "Priority support",
                "Enhanced payment protection",
                "Custom project milestones",
                "Verified profile badge"
              ],
              featured: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For large organizations",
              features: [
                "Custom smart contract templates",
                "Dedicated account manager",
                "API access",
                "Custom payment terms",
                "Team management tools",
                "Advanced analytics"
              ]
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className={`relative ${
                plan.featured
                  ? 'bg-gradient-to-b from-orange-500 to-orange-600 transform scale-105 shadow-xl'
                  : 'bg-gray-800/30 backdrop-blur-sm'
              } rounded-3xl p-8 border border-gray-700/50 hover:transform hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className={`ml-2 ${plan.featured ? 'text-white/90' : 'text-gray-400'}`}>commission</span>
                  )}
                </div>
                <p className={`mt-2 ${plan.featured ? 'text-white/90' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className={`h-5 w-5 ${plan.featured ? 'text-white' : 'text-orange-500'} mr-3`} />
                    <span className={plan.featured ? 'text-white/90' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 px-6 rounded-lg transition ${
                  plan.featured
                    ? 'bg-black text-white hover:bg-gray-900'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}