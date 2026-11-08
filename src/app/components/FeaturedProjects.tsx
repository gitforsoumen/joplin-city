import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Main Street Infrastructure Upgrade',
    status: 'In Progress',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0fGVufDF8fHx8MTc1OTM5NDA1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete street reconstruction including water lines, sidewalks, and ADA compliance.',
    estimatedCompletion: 'Dec 2025',
    color: '#83A226',
  },
  {
    id: 2,
    title: 'Cunningham Park Renovation',
    status: 'In Progress',
    progress: 40,
    image: 'https://images.unsplash.com/photo-1703688829492-0cab2287d358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwYXJrJTIwcGVvcGxlfGVufDF8fHx8MTc1OTQ5MTMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'New playground equipment, walking trails, and pavilion construction.',
    estimatedCompletion: 'Jun 2026',
    color: '#83A226',
  },
  {
    id: 3,
    title: 'Transit System Expansion',
    status: 'Planning',
    progress: 15,
    image: 'https://images.unsplash.com/photo-1663511172369-34b8b9f04ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwYWVyaWFsfGVufDF8fHx8MTc1OTQ5MTMzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Adding three new bus routes and improving service frequency.',
    estimatedCompletion: 'Mar 2026',
    color: '#D1B10E',
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-[70px] bg-gradient-to-b from-white to-gray-50 px-[0px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-50 text-[#005B82] border-[#005B82]">
            City Development
          </Badge>
          <h2 className="mb-4 text-[40px]">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track progress on major city initiatives and infrastructure improvements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border border-[#CCCCCC] hover:border-[#005B82] transition-all duration-300 elevation-2 hover:elevation-3 cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge
                  className="absolute top-4 right-4 text-white shadow-lg"
                  style={{ backgroundColor: project.color }}
                >
                  {project.status}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="mb-3 group-hover:text-[#005B82] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-2">{project.description}</p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium" style={{ color: project.color }}>
                      {project.progress}%
                    </span>
                  </div>
                  <Progress 
                    value={project.progress} 
                    className="h-2.5"
                    style={{ 
                      '--progress-background': project.color 
                    } as React.CSSProperties}
                  />
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{project.estimatedCompletion}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#005B82] text-sm group-hover:gap-2 transition-all">
                    <span>Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2 border-[#005B82] text-[#005B82] hover:bg-gray-50 hover:text-[#7F7F7D] hover:shadow-sm transition-all duration-150 ease-in-out"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
