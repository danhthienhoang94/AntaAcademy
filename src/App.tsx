import React, { useState } from 'react';
import { ScreenType, Course, TaxArticle } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CourseModal } from './components/CourseModal';
import { ArticleModal } from './components/ArticleModal';
import { QuickContactFloating } from './components/QuickContactFloating';
import { SecurityPolicyModal } from './components/SecurityPolicyModal';

// Screens
import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { PhilosophyScreen } from './screens/PhilosophyScreen';
import { CoursesScreen } from './screens/CoursesScreen';
import { MethodologyScreen } from './screens/MethodologyScreen';
import { FacultyScreen } from './screens/FacultyScreen';
import { NewsScreen } from './screens/NewsScreen';
import { StudentPortalScreen } from './screens/StudentPortalScreen';
import { ContactScreen } from './screens/ContactScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('trang-chu');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [preselectedCourseTitle, setPreselectedCourseTitle] = useState<string | undefined>(
    undefined
  );

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<TaxArticle | null>(null);

  const handleOpenConsultation = (courseTitle?: string) => {
    setPreselectedCourseTitle(courseTitle);
    setIsConsultationOpen(true);
  };

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0d1c2f] flex flex-col selection:bg-[#dae2ff] selection:text-[#001847]">
      {/* Fixed Sticky Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 w-full pt-20">
        {currentScreen === 'trang-chu' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectCourse={(course) => setSelectedCourse(course)}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {currentScreen === 've-hoc-vien' && (
          <AboutScreen
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentScreen === 'triet-ly-va-bieu-tuong' && (
          <PhilosophyScreen
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentScreen === 'khoa-hoc-thuc-chien' && (
          <CoursesScreen
            onSelectCourse={(course) => setSelectedCourse(course)}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentScreen === 'phuong-phap-4-buoc' && (
          <MethodologyScreen
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentScreen === 'doi-ngu-giang-vien' && (
          <FacultyScreen
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentScreen === 'tin-tuc-va-thue' && (
          <NewsScreen
            onSelectArticle={(article) => setSelectedArticle(article)}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentScreen === 'cong-hoc-vien' && (
          <StudentPortalScreen
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenSecurityPolicy={() => setIsSecurityModalOpen(true)}
          />
        )}

        {currentScreen === 'lien-he' && (
          <ContactScreen onOpenConsultation={() => handleOpenConsultation()} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenSecurityPolicy={() => setIsSecurityModalOpen(true)}
      />

      {/* Quick Floating Action Widget */}
      <QuickContactFloating
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedCourseId={preselectedCourseTitle}
        onOpenSecurityPolicy={() => {
          setIsConsultationOpen(false);
          setIsSecurityModalOpen(true);
        }}
      />

      <CourseModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={(title) => handleOpenConsultation(title)}
      />

      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onConsultTax={() => handleOpenConsultation('Tư vấn thuế & quyết toán')}
      />

      <SecurityPolicyModal
        isOpen={isSecurityModalOpen}
        onClose={() => setIsSecurityModalOpen(false)}
      />
    </div>
  );
}
