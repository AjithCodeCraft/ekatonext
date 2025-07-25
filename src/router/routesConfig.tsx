// src/router/routesConfig.tsx
import type { AppRoute } from "./types";
import { lazy } from "react";


const Homepage = lazy(() => import("@/pages/website/Home"));
const ProgramPageSection = lazy(() => import("@/components/website/sections/programs/programs"));
const ProgramDetailPage = lazy(() => import("@/pages/website/Home/ProgramDetailPage"));
const QuizPage2 = lazy(() => import("@/pages/website/Quiz/QuizPage"));
const MedicalQuestionnaire = lazy(() => import("@/pages/website/onboarding/MedicalQuestionnaire"));
const UploadPortal = lazy(() => import("@/pages/website/onboarding/UploadPortal"));
const BookingScheduler = lazy(() => import("@/pages/website/consultation/BookingScheduler"));
const PaymentPage = lazy(() => import("@/pages/website/payment"));
const ThankYouPage = lazy(() => import("@/pages/website/payment/thank-you"));
const ProfessionalDemo = lazy(() => import("@/pages/website/demo/ProfessionalDemo"));
const WhatWeHealPageSection = lazy(() => import("@/pages/website/what-we-heal"));
const TreatmentPageSection = lazy(() => import("@/pages/website/treatment"));
const OurApproachPageSection = lazy(() => import("@/pages/website/approach"));
const ModernHeaderDemo = lazy(() => import("@/pages/website/demo/ModernHeaderDemo"));
const Login = lazy(() => import("@/components/website/auth/LoginModal"));
const StoriesPage = lazy(() => import("@/pages/website/stories"));
const TalkToHealerPage = lazy(() => import("@/pages/website/talk-to-healer"));
const HealerBookingPage = lazy(() => import("@/pages/website/talk-to-healer/booking/[healerId]"));
const WomensHealthPage = lazy(() => import("@/components/website/sections/whatwehealsection/healtabs/womens-health"));
const DigestiveHealthPage = lazy(() => import("@/components/website/sections/whatwehealsection/healtabs/digestive-health"));
const MentalWellnessPage = lazy(() => import("@/components/website/sections/whatwehealsection/healtabs/mental-wellness"));
const HormonalBalancePage = lazy(() => import("@/components/website/sections/whatwehealsection/healtabs/hormonal-balance"));
const LifestyleConditionsPage = lazy(() => import("@/components/website/sections/whatwehealsection/healtabs/lifestyle-conditions"));
// Dashboard Components


export const useRoutesConfig = () => {
  // Website Routes
  const websiteRoutes: AppRoute[] = [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/programs",
      element: <ProgramPageSection />,
    },
    {
      path: "/programs/:programId",
      element: <ProgramDetailPage />,
    },
    {
      path: "/quiz",
      element: <QuizPage2 />,
    },
    {
      path: "/onboarding/medical-questionnaire",
      element: <MedicalQuestionnaire />,
    },
    {
      path: "/treatment",
      element: <TreatmentPageSection />,
    },
    {
      path: "/approach",
      element: <OurApproachPageSection />,
    },
    {
      path: "/onboarding/upload-portal",
      element: <UploadPortal />,
    },
    {
      path: "/consultation",
      element: <BookingScheduler />,
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    },
    {
      path: "/payment/thank-you",
      element: <ThankYouPage />,
    },
    {
      path: "/demo/professional",
      element: <ProfessionalDemo />,
    },
    {
      path: "/demo/modern-header",
      element: <ModernHeaderDemo />,
    },
    {
      path: "/what-we-heal",
      element: <WhatWeHealPageSection />,
    },
    {
      path: "/what-we-heal/womensHealth",
      element: <WomensHealthPage />,
    },
    {
      path: "/what-we-heal/digestiveHealth",
      element: <DigestiveHealthPage />,
    },
    {
      path: "/what-we-heal/mentalWellness",
      element: <MentalWellnessPage />,
    },
    {
      path: "/what-we-heal/hormonalBalance",
      element: <HormonalBalancePage />,
    },
    {
      path: "/what-we-heal/lifestyleConditions",
      element: <LifestyleConditionsPage />,
    },
    {
      path: "/stories",
      element: <StoriesPage />,
    },
    {
      path: "/talk-to-healer",
      element: <TalkToHealerPage />,
    },
    {
      path: "/talk-to-healer/book/:healerId",
      element: <HealerBookingPage />,
    },
    {
      path: "/approach/five-healers",
      element: <OurApproachPageSection />,
    },
    {
      path: "/approach/daily-rituals",
      element: <OurApproachPageSection />,
    },
    {
      path: "/talk-to-healer",
      element: <TalkToHealerPage />,
    },
  ];
  const authRoutes: AppRoute[] = [
    {
      path: "/login",
      element: <Login />,
    },
  ];

  return { websiteRoutes, authRoutes };
};