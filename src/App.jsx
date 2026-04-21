import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import { profile, skills, clients, projects, education } from './data/resume'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} skills={skills} />
      <ExperienceSection clients={clients} />
      <ProjectsSection projects={projects} />
      <ContactSection profile={profile} education={education} />
    </>
  )
}
