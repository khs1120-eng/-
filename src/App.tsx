/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Users, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  Layout, 
  Palette, 
  ChevronRight, 
  Stethoscope, 
  GraduationCap, 
  HeartPulse,
  Target,
  Layers,
  Presentation,
  Mail,
  Phone,
  Globe,
  Clock,
  CheckSquare,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import pptxgen from "pptxgenjs";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- PPT Generation Logic ---

const downloadPPT = () => {
  const pres = new pptxgen();
  
  // Global Settings
  pres.layout = 'LAYOUT_16x9';
  const DEEP_GREEN = "2D4F3C";
  const GOLD = "D9B866";
  const WHITE = "F8F9FA";
  const SLATE = "64748B";

  // Slide 1: Cover
  const slide1 = pres.addSlide();
  slide1.background = { color: DEEP_GREEN };
  slide1.addText("Clinical Dietitian Portfolio", { x: 0, y: 2.5, w: "100%", align: "center", color: GOLD, fontSize: 14, bold: true, charSpacing: 5 });
  slide1.addText("근거 중심의\n임상영양 교육 포트폴리오", { x: 0, y: 3.2, w: "100%", align: "center", color: "FFFFFF", fontSize: 44, bold: true });
  slide1.addShape(pres.ShapeType.rect, { x: 4.5, y: 5.2, w: 1, h: 0.05, fill: { color: GOLD } });
  slide1.addText("10년 차 임상영양사가 전하는 실천적 영양 솔루션", { x: 0, y: 5.8, w: "100%", align: "center", color: "FFFFFF", fontSize: 18, fontFace: "Arial", opacity: 80 });
  slide1.addText("임상영양사 OOO", { x: 0, y: 7.2, w: "100%", align: "center", color: "FFFFFF", fontSize: 16, bold: true });

  // Slide 2: Intro
  const slide2 = pres.addSlide();
  slide2.background = { color: WHITE };
  slide2.addText("INTRODUCTION", { x: 1, y: 1.5, color: DEEP_GREEN, fontSize: 12, bold: true, charSpacing: 3 });
  slide2.addText("\"임상 현장의 깊이를\n교육의 가치로 연결하다\"", { x: 1, y: 2.2, w: 6, color: "333333", fontSize: 36, bold: true });
  slide2.addText("단순 전달이 아닌, ‘환자의 삶을 변화시키는 10년의 실천적 노하우’를 담았습니다.", { x: 1, y: 4.5, w: 5, color: SLATE, fontSize: 18 });
  slide2.addShape(pres.ShapeType.rect, { x: 0, y: 8.5, w: "100%", h: 0.5, fill: { color: DEEP_GREEN } });

  // Slide 3: Core Strengths
  const slide3 = pres.addSlide();
  slide3.addText("Core Strengths", { x: 1, y: 0.8, color: DEEP_GREEN, fontSize: 28, bold: true });
  slide3.addText("전문가로서의 4가지 핵심 역량", { x: 1, y: 1.4, color: SLATE, fontSize: 12 });
  slide3.addShape(pres.ShapeType.rect, { x: 1, y: 1.8, w: 1, h: 0.05, fill: { color: DEEP_GREEN } });

  const strengths = [
    { title: "10년 임상 전문성", desc: "병원 실무 및 데이터 분석 기반의 영양 관리" },
    { title: "전 생애주기 교육", desc: "소아부터 고령층까지 맞춤형 교육 운영" },
    { title: "콘텐츠 제작 역량", desc: "연하장애 가이드북 등 전문 자료 개발" },
    { title: "현장 소통 능력", desc: "캠프 및 패널 토의 다수 참여 경험" },
  ];

  strengths.forEach((s, i) => {
    const xPos = 0.8 + (i * 2.2);
    slide3.addShape(pres.ShapeType.roundRect, { x: xPos, y: 2.5, w: 2, h: 4, fill: { color: "F1F5F9" }, rectRadius: 0.1 });
    slide3.addText(s.title, { x: xPos, y: 3.5, w: 2, align: "center", color: "333333", fontSize: 14, bold: true });
    slide3.addText(s.desc, { x: xPos + 0.2, y: 4.2, w: 1.6, align: "center", color: SLATE, fontSize: 10 });
  });

  // Slide 4: Career Path
  const slide4 = pres.addSlide();
  slide4.background = { color: DEEP_GREEN };
  slide4.addText("Career Path", { x: 1, y: 0.8, color: "FFFFFF", fontSize: 28, bold: true });
  slide4.addShape(pres.ShapeType.rect, { x: 0, y: 4.5, w: "100%", h: 0.02, fill: { color: "FFFFFF", alpha: 20 } });
  
  const career = [
    { year: "2014-", title: "병원 임상영양 서비스" },
    { year: "2018-", title: "당뇨캠프 운영" },
    { year: "2021-", title: "가이드북 제작" },
    { year: "2023-", title: "전문가 패널 활동" },
  ];

  career.forEach((c, i) => {
    const xPos = 0.5 + (i * 2.3);
    slide4.addShape(pres.ShapeType.ellipse, { x: xPos + 1, y: 4.4, w: 0.2, h: 0.2, fill: { color: GOLD } });
    slide4.addText(c.year, { x: xPos, y: 3.8, w: 2.3, align: "center", color: GOLD, fontSize: 18, bold: true });
    slide4.addText(c.title, { x: xPos, y: 4.8, w: 2.3, align: "center", color: "FFFFFF", fontSize: 12, bold: true });
  });

  // Slide 5: Contact
  const slide5 = pres.addSlide();
  slide5.background = { color: DEEP_GREEN };
  slide5.addText("\"전문성과 진심을 담아\n건강한 변화를 함께 만듭니다.\"", { x: 0, y: 3, w: "100%", align: "center", color: "FFFFFF", fontSize: 32, bold: true });
  slide5.addText("example@email.com  |  010-1234-5678  |  blog.naver.com/id", { x: 0, y: 5.5, w: "100%", align: "center", color: GOLD, fontSize: 14, bold: true });

  pres.writeFile({ fileName: "Clinical_Dietitian_Portfolio.pptx" });
};

// --- PPT Slide Components ---

const SlideContainer = ({ children, className, dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) => (
  <div className={cn(
    "aspect-[16/9] w-full max-w-5xl mx-auto shadow-2xl rounded-sm overflow-hidden relative flex flex-col",
    dark ? "bg-deepGreen text-white" : "bg-white text-slate-900",
    className
  )}>
    {children}
  </div>
);

const SlideHeader = ({ title, subtitle, dark = false }: { title: string; subtitle?: string; dark?: boolean }) => (
  <div className="pt-12 px-16 pb-8">
    <h2 className={cn("text-3xl font-bold mb-2", dark ? "text-white" : "text-deepGreen")}>{title}</h2>
    {subtitle && <p className={cn("text-sm opacity-60", dark ? "text-white" : "text-slate-500")}>{subtitle}</p>}
    <div className={cn("h-1 w-16 mt-4", dark ? "bg-gold" : "bg-deepGreen")} />
  </div>
);

const Gold = "#D9B866";

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Cover
    (
      <SlideContainer dark className="justify-center items-center text-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/hospital/1920/1080?blur=2" alt="bg" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 space-y-6 px-20">
          <p className="text-gold font-bold tracking-[0.3em] text-sm uppercase mb-4">Clinical Dietitian Portfolio</p>
          <h1 className="text-6xl font-black leading-tight">근거 중심의<br />임상영양 교육 포트폴리오</h1>
          <div className="h-1 w-24 bg-gold mx-auto my-8" />
          <p className="text-xl font-light opacity-80">10년 차 임상영양사가 전하는 실천적 영양 솔루션</p>
          <div className="pt-12">
            <p className="text-lg font-medium">임상영양사 OOO</p>
          </div>
        </div>
      </SlideContainer>
    ),
    // Slide 2: Intro
    (
      <SlideContainer className="bg-slate-50">
        <div className="flex-1 flex items-center px-20 gap-16">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <p className="text-deepGreen font-bold text-sm tracking-widest">INTRODUCTION</p>
              <h2 className="text-5xl font-bold leading-tight text-slate-900">
                "임상 현장의 깊이를<br />
                <span className="text-deepGreen">교육의 가치</span>로 연결하다"
              </h2>
            </div>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              단순 전달이 아닌, <span className="text-slate-900 font-medium">‘환자의 삶을 변화시키는 10년의 실천적 노하우’</span>를 담았습니다.
            </p>
          </div>
          <div className="w-80 h-80 rounded-full border-8 border-white shadow-xl overflow-hidden shrink-0">
            <img src="https://picsum.photos/seed/expert/800/800" alt="profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="h-4 bg-deepGreen w-full" />
      </SlideContainer>
    ),
    // Slide 3: Core Strengths
    (
      <SlideContainer>
        <SlideHeader title="Core Strengths" subtitle="전문가로서의 4가지 핵심 역량" />
        <div className="flex-1 px-16 pb-16 grid grid-cols-4 gap-6">
          {[
            { title: "10년 임상 전문성", desc: "병원 실무 및 데이터 분석 기반의 영양 관리", icon: Stethoscope },
            { title: "전 생애주기 교육", desc: "소아부터 고령층까지 맞춤형 교육 운영", icon: Users },
            { title: "콘텐츠 제작 역량", desc: "연하장애 가이드북 등 전문 자료 개발", icon: FileText },
            { title: "현장 소통 능력", desc: "캠프 및 패널 토의 다수 참여 경험", icon: Presentation },
          ].map((s, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex flex-col items-center text-center group hover:bg-deepGreen hover:text-white transition-all">
              <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-deepGreen" />
              </div>
              <h4 className="font-bold mb-4 text-lg">{s.title}</h4>
              <p className="text-sm opacity-70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </SlideContainer>
    ),
    // Slide 4: Career Path
    (
      <SlideContainer className="bg-deepGreen text-white">
        <SlideHeader title="Career Path" subtitle="주요 경력 및 활동 타임라인" dark />
        <div className="flex-1 px-16 flex items-center">
          <div className="relative w-full py-12">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2" />
            <div className="flex justify-between relative z-10">
              {[
                { year: "2014-", title: "병원 임상영양 서비스", desc: "환자 영양 상담 및 관리" },
                { year: "2018-", title: "당뇨캠프 운영", desc: "소아/성인 대상 집중 교육" },
                { year: "2021-", title: "가이드북 제작", desc: "연하장애 영양 관리 지침" },
                { year: "2023-", title: "전문가 패널 활동", desc: "식문화/비만/슬로에이징" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center w-48">
                  <div className="w-4 h-4 rounded-full bg-gold mb-6 shadow-[0_0_15px_rgba(217,184,102,0.5)]" />
                  <p className="text-gold font-bold text-xl mb-2">{item.year}</p>
                  <p className="font-bold text-sm mb-2">{item.title}</p>
                  <p className="text-xs opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideContainer>
    ),
    // Slide 5: Lecture Portfolio
    (
      <SlideContainer>
        <SlideHeader title="Lecture Portfolio" subtitle="강의 가능 분야 및 교육 커리큘럼" />
        <div className="flex-1 px-16 pb-16 grid grid-cols-3 gap-8">
          {[
            { cat: "질환 관리", items: ["당뇨, 임신당뇨", "만성질환 식사관리"], icon: HeartPulse, color: "bg-red-50 text-red-700" },
            { cat: "생애주기", items: ["소아·청소년 식습관", "고령층 연하 관리"], icon: GraduationCap, color: "bg-blue-50 text-blue-700" },
            { cat: "특수 분야", items: ["암 예방 교육", "영양 자료 검토/자문"], icon: Search, color: "bg-emerald-50 text-emerald-700" },
          ].map((c, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl p-8 flex flex-col">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", c.color)}>
                <c.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-6 text-slate-900">{c.cat}</h4>
              <ul className="space-y-4 flex-1">
                {c.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-deepGreen shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-widest">Customizable Program</p>
            </div>
          ))}
        </div>
      </SlideContainer>
    ),
    // Slide 6: Case Study 1
    (
      <SlideContainer>
        <SlideHeader title="Case Study 01" subtitle="콘텐츠 제작 사례" />
        <div className="flex-1 px-16 pb-16 flex gap-12">
          <div className="w-1/2 space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-deepGreen">연하장애 환자를 위한 영양관리 가이드북</h3>
              <p className="text-sm text-slate-500">환자·보호자·의료진용 통합 지침서</p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-[10px] font-bold text-slate-400 mb-1">제작 목적</p>
                  <p className="text-xs font-medium">표준화된 영양 관리 지침 제공</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-[10px] font-bold text-slate-400 mb-1">담당 역할</p>
                  <p className="text-xs font-medium">기획, 집필 및 감수 총괄</p>
                </div>
              </div>
              <div className="p-6 border-l-4 border-gold bg-gold/5">
                <p className="text-gold font-bold text-xs mb-2">KEY OUTCOME</p>
                <p className="text-lg font-bold text-slate-800">"전국 50개 병원 배포, 만족도 95%"</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-deepGreen to-transparent" />
            <FileText size={80} className="text-slate-300" />
            <p className="absolute bottom-6 text-[10px] text-slate-400 font-bold">실제 도서/자료 이미지 배치 영역</p>
          </div>
        </div>
      </SlideContainer>
    ),
    // Slide 10: Contact
    (
      <SlideContainer dark className="justify-center items-center text-center">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold" />
        <div className="space-y-12 px-20">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight">
              "전문성과 진심을 담아<br />
              <span className="text-gold">건강한 변화</span>를 함께 만듭니다."
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-12 pt-8">
            <div className="space-y-3">
              <Mail className="w-6 h-6 text-gold mx-auto" />
              <p className="text-sm font-medium">example@email.com</p>
            </div>
            <div className="space-y-3">
              <Phone className="w-6 h-6 text-gold mx-auto" />
              <p className="text-sm font-medium">010-1234-5678</p>
            </div>
            <div className="space-y-3">
              <Globe className="w-6 h-6 text-gold mx-auto" />
              <p className="text-sm font-medium">blog.naver.com/id</p>
            </div>
          </div>
        </div>
      </SlideContainer>
    )
  ];

  return (
    <div className="min-h-screen bg-slate-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">PPT Design Specification</h1>
            <p className="text-slate-500">임상영양사 포트폴리오 슬라이드 디자인 가이드</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={downloadPPT}
              className="px-4 py-2 bg-gold text-deepGreen rounded-lg shadow-sm font-bold hover:bg-opacity-90 flex items-center gap-2"
            >
              <FileText size={18} />
              Download PPT
            </button>
            <button 
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              Prev
            </button>
            <div className="px-4 py-2 bg-deepGreen text-white rounded-lg font-bold">
              {currentSlide + 1} / {slides.length}
            </div>
            <button 
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50"
              disabled={currentSlide === slides.length - 1}
            >
              Next
            </button>
          </div>
        </div>

        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Layout className="text-deepGreen" />
                슬라이드 디자인 상세 가이드
              </h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  본 가이드는 <strong>의료 및 교육 전문가</strong>로서의 신뢰감을 극대화하기 위해 설계되었습니다. 
                  각 슬라이드를 제작할 때 아래의 디자인 원칙을 준수해 주세요.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">1. 여백과 정렬</h4>
                    <p className="text-xs">모든 슬라이드 상하좌우에 최소 1.5cm 이상의 여백을 두어 가독성을 높입니다. 제목은 항상 상단 왼쪽 정렬을 기본으로 합니다.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">2. 컬러 활용</h4>
                    <p className="text-xs">배경은 Off White(#F8F9FA)를 기본으로 하되, 강조 슬라이드(표지, 타임라인, 마무리)는 Deep Green(#2D4F3C)을 배경으로 사용합니다.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">3. 폰트 계층</h4>
                    <p className="text-xs">제목은 32pt 이상(Bold), 본문은 18pt 이상(Regular)을 유지하여 가독성을 확보합니다. 강조 문구는 Gold(#D9B866)를 사용하세요.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm">4. 시각적 증거</h4>
                    <p className="text-xs">단순 텍스트보다는 수치(95%, 10년 등)와 실제 사진/아이콘을 결합하여 경력의 실체를 시각적으로 증명합니다.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-deepGreen p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Palette className="text-gold" />
                Design Assets
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-3">Main Colors</p>
                  <div className="flex gap-2">
                    {['#2D4F3C', '#F8F9FA', '#333333', '#D9B866'].map(c => (
                      <div key={c} className="group relative">
                        <div className="w-10 h-10 rounded-lg border border-white/10" style={{ backgroundColor: c }} />
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-3">Key Icons</p>
                  <div className="grid grid-cols-4 gap-4">
                    {[Stethoscope, BookOpen, GraduationCap, CheckSquare].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Icon size={20} className="text-gold" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <button className="w-full py-3 bg-gold text-deepGreen font-bold rounded-xl hover:bg-opacity-90 transition-all">
                    PPT 테마 설정 가이드 보기
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
