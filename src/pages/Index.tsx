import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import ProofSection from "@/components/landing/ProofSection";
import SystemSection from "@/components/landing/SystemSection";
import ProcessSection from "@/components/landing/ProcessSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import WhyChooseSection from "@/components/landing/WhyChooseSection";
import QualificationSection from "@/components/landing/QualificationSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <PainSection />
      <ProofSection />
      <SystemSection />
      <ProcessSection />
      <BenefitsSection />
      <ResultsSection />
      <WhyChooseSection />
      <QualificationSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
