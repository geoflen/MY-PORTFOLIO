import React, { useEffect, useState } from 'react';
import { Mail, Upload, Code2, Database, BarChart3, Server, Menu, X, FileText, ArrowDownRight } from 'lucide-react';
import { Github, Linkedin } from './components/BrandIcons';
import WorkSampleModal from './components/WorkSampleModal';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [heroImage, setHeroImage] = useState(null);
  const [activeWorkSample, setActiveWorkSample] = useState(null);

  useEffect(() => {
    return () => {
      if (heroImage) {
        URL.revokeObjectURL(heroImage);
      }
    };
  }, [heroImage]);

  const handleHeroImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (heroImage) {
      URL.revokeObjectURL(heroImage);
    }

    setHeroImage(URL.createObjectURL(file));
  };

  const projects = [
    {
      title: "National Health Data Warehouse",
      description: "Architected a centralized data warehouse integrating multiple national health data sources to support reporting, analytics, and decision making across thousands of facilities.",
      tech: ["Python", "SQL Server", "SSIS", "Power BI"],
      github: "Private / Available on request",
      category: "data-platform",
      impact: "National scale • 1000+ facilities"
    },
    {
      title: "Facility Stock Status Dashboard",
      description: "Developed a high-impact Power BI dashboard used by Ministry of Health stakeholders to monitor stock levels, detect shortages, and support supply chain decisions.",
      tech: ["Power BI", "SQL", "DAX"],
      github: "Available on request",
      category: "analytics",
      impact: "Ministry of Health • Supply chain optimization",
      workSample: "/Facility Stock Status Dashboard New - 25-Nov-24.pdf"
    },
    {
      title: "HIV Case Based Surveillance System",
      description: "Built an interoperable surveillance module integrating OpenMRS, DHIS2, and National ID systems, supporting real-time case tracking and analytics.",
      tech: ["Java", "Python", "OpenHIE", "APIs", "Docker"],
      github: "Private",
      category: "integration",
      impact: "Real-time tracking • Multi-system integration"
    },
    {
      title: "Commodity Management Platform",
      description: "Supported deployment and analytics for a national-scale system managing commodities across 2000+ facilities, including reporting and data validation workflows.",
      tech: ["SQL", "Power BI", "ETL pipelines"],
      category: "data-platform",
      impact: "2000+ facilities • National deployment"
    },
    {
      title: "Maternal & Neonatal Deaths Dashboard",
      description: "Built a Power BI dashboard to analyse maternal and neonatal deaths, helping stakeholders monitor outcomes and identify areas requiring focused intervention.",
      tech: ["Power BI", "Data Analytics", "Reporting"],
      category: "analytics",
      impact: "Maternal & newborn health • Decision support",
      workSample: "/maternal_neonatal_deaths.pdf"
    },
    {
      title: "Cold Chain Equipment Management Tool",
      description: "Contributed to a national tool for tracking cold chain assets, enabling monitoring, reporting, and optimization of equipment performance.",
      tech: ["Python", "Data Analytics", "Reporting Tools"],
      category: "analytics",
      impact: "Asset tracking • Performance optimization"
    }
  ];

  const skills = {
    "Languages": ["Python", "SQL", "Java", "JavaScript", "PHP"],
    "Frameworks & Web": ["Django", "React", "Node.js"],
    "Data & BI": ["Power BI", "DAX", "SSIS", "ETL Pipelines", "Data Warehousing"],
    "Databases": ["MySQL", "SQL Server", "MongoDB", "Couchbase"],
    "Other": ["Docker", "API Integration", "Data Governance", "Data Modeling", "Geospatial Analysis (QGIS, ArcGIS)"]
  };

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              GA
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="relative w-40 h-40 mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-cyan-500/10 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-5xl font-bold">
                <img
                  src={heroImage || "/Geof2.jpeg"}
                  alt="Geoffrey Anguyo"
                  className="w-full h-full object-cover"
                />
              </div>

              <label
                htmlFor="hero-image-upload"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/95 border border-slate-700 text-sm text-slate-200 hover:border-blue-400 hover:text-white transition-colors cursor-pointer"
              >
                <Upload size={16} />
                Upload Image
              </label>
              <input
                id="hero-image-upload"
                type="file"
                accept="image/*"
                onChange={handleHeroImageUpload}
                className="sr-only"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Geoffrey Anguyo
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Full-Stack Software Engineer & BI Architect | Digital Health  | Health Informatics | Java | Python | C# | PHP
          </p>
          
          <p className="text-lg text-slate-400 mb-8">
            National Health Data Systems | Java • Python • C# • Power BI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-right hover:shadow-xl hover:shadow-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Explore My Work</span>
              <ArrowDownRight className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" size={20} />
            </a>
            <a
              href="mailto:geoflen@gmail.com"
              className="flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3.5 text-slate-200 transition-colors hover:border-cyan-400 hover:bg-slate-800 hover:text-white"
            >
              <Mail size={20} />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-slate-300 leading-relaxed">
              Data professional with a strong foundation in business intelligence, data engineering, and analytics within public health and enterprise systems. Experienced in designing scalable data platforms, building automated pipelines, and delivering executive-level dashboards that support decision making. Skilled at translating complex, multi-source data into actionable insights and high-quality reporting systems.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <Database className="mx-auto mb-3 text-blue-400" size={32} />
                <h3 className="font-semibold text-lg mb-2">Data Architecture</h3>
                <p className="text-sm text-slate-400">Scalable warehouses & ETL pipelines</p>
              </div>
              <div className="text-center p-4">
                <BarChart3 className="mx-auto mb-3 text-cyan-400" size={32} />
                <h3 className="font-semibold text-lg mb-2">Business Intelligence</h3>
                <p className="text-sm text-slate-400">Executive dashboards & analytics</p>
              </div>
              <div className="text-center p-4">
                <Server className="mx-auto mb-3 text-blue-400" size={32} />
                <h3 className="font-semibold text-lg mb-2">System Integration</h3>
                <p className="text-sm text-slate-400">API development & data interoperability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('data-platform')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'data-platform' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Data Platforms
            </button>
            <button
              onClick={() => setActiveFilter('analytics')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'analytics' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Analytics & BI
            </button>
            <button
              onClick={() => setActiveFilter('integration')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'integration' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              System Integration
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                  <Code2 className="text-slate-500" size={24} />
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                {project.impact && (
                  <div className="mb-4 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg inline-block">
                    <span className="text-sm text-blue-300">{project.impact}</span>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  {project.workSample && (
                    <button
                      type="button"
                      onClick={() => setActiveWorkSample({ title: project.title, url: project.workSample })}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >
                      <FileText size={16} />
                      View Dashboard Report
                    </button>
                  )}
                  {project.github && (
                    <span className="flex items-center gap-1 text-slate-400">
                      <Github size={16} />
                      {project.github}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg text-sm hover:bg-slate-600/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-300 mb-12">
            Interested in collaborating on data-driven health tech solutions? Let's talk.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="mailto:geoflen@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-lg"
            >
              <Mail size={24} />
              geoflen@gmail.com
            </a>
            <a
              href="https://github.com/geoflen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-lg"
            >
              <Github size={24} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/geoffrey-anguyo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-lg"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2024 Geoffrey Anguyo. Building data solutions for global health.</p>
        </div>
      </footer>

      {activeWorkSample && (
        <WorkSampleModal
          workSample={activeWorkSample}
          onClose={() => setActiveWorkSample(null)}
        />
      )}
    </div>
  );
}
