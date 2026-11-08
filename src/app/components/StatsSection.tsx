import { Users, Building2, Briefcase, TrendingUp } from 'lucide-react';

const stats = [
  {
    id: 1,
    number: '51,000+',
    label: 'Residents',
    description: 'Proud citizens of Joplin',
    icon: Users,
    color: 'bg-[#005B82]',
    gradient: 'from-[#005B82] to-[#004a6b]',
  },
  {
    id: 2,
    number: '25+',
    label: 'Departments',
    description: 'Serving the community',
    icon: Building2,
    color: 'bg-[#BF500B]',
    gradient: 'from-[#BF500B] to-[#a04409]',
  },
  {
    id: 3,
    number: '150+',
    label: 'Services',
    description: 'Available to residents',
    icon: Briefcase,
    color: 'bg-[#83A226]',
    gradient: 'from-[#83A226] to-[#6d8620]',
  },
  {
    id: 4,
    number: '98%',
    label: 'Satisfaction',
    description: 'Citizen approval rating',
    icon: TrendingUp,
    color: 'bg-[#D1B10E]',
    gradient: 'from-[#D1B10E] to-[#b0950c]',
  },
];

interface StatsSectionProps {
  onNavigate?: (page: string) => void;
}

export function StatsSection({ onNavigate }: StatsSectionProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #005B82 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#005B82]/10 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="h-4 w-4 text-[#005B82]" />
            <span className="text-sm text-[#005B82]">By The Numbers</span>
          </div>
          <h2 className="mb-4 text-[40px]">Joplin at a Glance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the vibrant community we've built together through key statistics that showcase our city's growth and commitment to excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="relative mb-3">
                  <div className={`text-5xl lg:text-6xl bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105 inline-block`} style={{ fontWeight: 700 }}>
                    {stat.number}
                  </div>
                </div>

                {/* Label */}
                <h3 className="mb-2 text-gray-900 group-hover:text-[#005B82] transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${stat.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to learn more about how Joplin serves its community?
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#005B82] to-[#004a6b] text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              View Annual Report
            </button>
            <button 
              onClick={() => onNavigate?.('departments')}
              className="px-8 py-3 bg-white border-2 border-[#005B82] text-[#005B82] rounded-lg gap-2 hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out min-h-[44px]"
            >
              Explore Departments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
