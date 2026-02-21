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
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string; subtitle?: string; icon?: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      {Icon && <Icon className="w-6 h-6 text-navy-700" />}
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-500 text-lg max-w-2xl">{subtitle}</p>}
    <div className="h-1 w-20 bg-navy-600 mt-4 rounded-full" />
  </div>
);

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow", className)}>
    {children}
  </div>
);

// --- Content Data ---

const COLORS = {
  navy: '#1B2B48',
  deepGreen: '#2D4F3C',
  gray: '#F8F9FA',
  accent: '#E9ECEF'
};

const SLOGANS = [
  {
    title: "임상 현장의 깊이를 교육의 가치로 연결하다",
    tagline: "10년 차 임상영양사가 전하는 근거 중심의 맞춤형 영양 솔루션",
    desc: "단순한 지식 전달을 넘어, 환자의 삶을 변화시키는 실천적 교육을 지향합니다."
  },
  {
    title: "데이터로 분석하고 마음으로 소통하는 영양 전문가",
    tagline: "병원 임상 경험과 다각도 교육 노하우를 결합한 프리미엄 영양 컨설팅",
    desc: "의료진과 환자, 그리고 대중 사이의 언어를 잇는 가교 역할을 수행합니다."
  }
];

const STRENGTHS = [
  {
    title: "10년의 임상 전문성",
    desc: "병원 근무 및 임상영양 서비스 운영을 통해 축적된 실무 데이터와 케이스 분석 능력",
    icon: Stethoscope
  },
  {
    title: "전 생애주기 교육 경험",
    desc: "소아청소년부터 고령층까지, 대상별 눈높이에 맞춘 최적화된 교육 커리큘럼 설계",
    icon: Users
  },
  {
    title: "콘텐츠 기획 및 제작 역량",
    desc: "연하장애 가이드북 제작 등 의료진과 환자 모두를 만족시키는 전문 자료 개발 경험",
    icon: FileText
  },
  {
    title: "현장 중심의 소통 능력",
    desc: "당뇨캠프, 패널 토의 등 다양한 현장에서 검증된 청중과의 높은 공감대 형성",
    icon: Presentation
  }
];

const LECTURE_FIELDS = [
  {
    category: "질환 관리 (Clinical)",
    topics: ["당뇨병 및 임신당뇨 식사요법", "만성질환(고혈압, 이상지질혈증) 관리", "암 예방 및 치료 후 영양 관리"],
    target: "환자, 보호자, 고위험군 성인",
    format: "이론 강의 + 실습 워크숍"
  },
  {
    category: "생애주기 (Life Cycle)",
    topics: ["소아청소년 올바른 식습관 형성", "고령층 영양 불량 예방 및 연하 관리", "임신·수유부 영양 가이드"],
    target: "학생, 학부모, 노인복지관 이용자",
    format: "캠프형 교육, 소그룹 코칭"
  },
  {
    category: "전문가 역량 (Professional)",
    topics: ["임상영양 서비스 운영 전략", "영양 교육 자료 개발 및 검토", "최신 영양 트렌드 분석 (슬로에이징 등)"],
    target: "영양사, 의료진, 관련 학과 학생",
    format: "세미나, 패널 토의, 자문"
  }
];

// --- Main App ---

export default function App() {
  const [activeCover, setActiveCover] = useState(0);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-navy-100 selection:text-navy-900">
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-deepGreen rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">CD</span>
            </div>
            <span className="font-bold tracking-tight text-deepGreen">Clinical Dietitian Portfolio</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#cover" className="hover:text-deepGreen transition-colors">Cover</a>
            <a href="#identity" className="hover:text-deepGreen transition-colors">Identity</a>
            <a href="#lecture" className="hover:text-deepGreen transition-colors">Lectures</a>
            <a href="#design" className="hover:text-deepGreen transition-colors">Design Guide</a>
          </div>
          <button className="bg-deepGreen text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-deepGreen/10">
            Download Guide
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-32">
        
        {/* 1. Cover Design Drafts */}
        <section id="cover" className="scroll-mt-24">
          <SectionHeader 
            title="01. 커버 디자인 시안" 
            subtitle="첫인상을 결정짓는 3가지 무드의 커버 디자인 제안입니다."
            icon={Layout}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Draft 1: Minimalist Professional (Deep Green Accent) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative aspect-[3/4] bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl flex flex-col p-12 group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-110" />
              <div className="mt-auto">
                <p className="text-deepGreen font-bold tracking-widest text-xs mb-4 uppercase">Clinical Dietitian Expert</p>
                <h3 className="text-4xl font-light leading-tight mb-8">
                  근거 중심의<br />
                  <span className="font-bold">영양 교육 포트폴리오</span>
                </h3>
                <div className="h-0.5 w-12 bg-deepGreen mb-8" />
                <p className="text-slate-400 text-sm">임상영양사 OOO</p>
              </div>
              <div className="absolute bottom-8 right-8 opacity-20">
                <Stethoscope size={64} className="text-deepGreen" />
              </div>
            </motion.div>

            {/* Draft 2: Deep Green Trust */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative aspect-[3/4] bg-deepGreen text-white rounded-xl overflow-hidden shadow-xl flex flex-col p-12 group cursor-pointer"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              <div className="relative z-10">
                <div className="w-12 h-1 bg-white/30 mb-6" />
                <h3 className="text-4xl font-bold leading-tight mb-4">
                  NUTRITION<br />STRATEGY
                </h3>
                <p className="text-white/70 text-lg font-light italic">Connecting Clinical Depth to Education</p>
              </div>
              <div className="mt-auto relative z-10">
                <p className="text-sm font-medium mb-1">임상영양사 | 교육 전문가</p>
                <p className="text-2xl font-bold">OOO PORTFOLIO</p>
              </div>
            </motion.div>

            {/* Draft 3: Modern Data-Driven (Deep Green) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative aspect-[3/4] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-xl flex flex-col group cursor-pointer"
            >
              <div className="h-1/2 bg-deepGreen p-12 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-bold leading-none">전문가용<br />포트폴리오</h3>
              </div>
              <div className="h-1/2 p-12 flex flex-col">
                <p className="text-slate-500 text-sm mb-auto">
                  10년의 임상 경험을 바탕으로 한<br />
                  맞춤형 영양 솔루션 및 교육 제안서
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-tighter">Registered Dietitian</p>
                    <p className="font-bold text-deepGreen">KIM YOUNG YANG</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-deepGreen flex items-center justify-center">
                    <ChevronRight className="text-deepGreen w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Slogans & Identity */}
        <section id="identity" className="scroll-mt-24">
          <SectionHeader 
            title="02. 브랜드 아이덴티티" 
            subtitle="나의 전문성을 한 문장으로 정의하는 슬로건과 핵심 가치입니다."
            icon={Target}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {SLOGANS.map((s, i) => (
              <Card key={i} className="border-l-4 border-l-navy-600">
                <span className="text-xs font-bold text-navy-600 uppercase tracking-widest mb-4 block">Slogan Option {i+1}</span>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{s.title}</h3>
                <p className="text-navy-700 font-medium mb-4">{s.tagline}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRENGTHS.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-navy-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-3">{s.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Lecture Fields */}
        <section id="lecture" className="scroll-mt-24">
          <SectionHeader 
            title="03. 강의 및 교육 분야" 
            subtitle="타깃별, 주제별로 체계화된 교육 서비스 라인업입니다."
            icon={GraduationCap}
          />
          
          <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-bottom border-slate-200">
                  <th className="p-6 text-sm font-bold text-navy-900 uppercase tracking-wider">카테고리</th>
                  <th className="p-6 text-sm font-bold text-navy-900 uppercase tracking-wider">주요 주제</th>
                  <th className="p-6 text-sm font-bold text-navy-900 uppercase tracking-wider">대상</th>
                  <th className="p-6 text-sm font-bold text-navy-900 uppercase tracking-wider">교육 형태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {LECTURE_FIELDS.map((field, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 align-top">
                      <span className="inline-block px-3 py-1 bg-navy-50 text-navy-700 text-xs font-bold rounded-full">
                        {field.category}
                      </span>
                    </td>
                    <td className="p-6 align-top">
                      <ul className="space-y-1">
                        {field.topics.map((t, j) => (
                          <li key={j} className="text-sm text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-navy-400 mt-0.5 shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-6 align-top text-sm text-slate-600">{field.target}</td>
                    <td className="p-6 align-top text-sm text-slate-600 font-medium">{field.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Project Template */}
        <section id="template" className="scroll-mt-24">
          <SectionHeader 
            title="04. 프로젝트 사례 템플릿" 
            subtitle="실제 성과를 시각적으로 보여주는 포트폴리오 슬라이드 구성안입니다."
            icon={Layers}
          />
          
          <div className="bg-navy-900 rounded-3xl p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold border border-white/20">Case Study Template</span>
                  <span className="text-white/40 text-xs">Slide 08/15</span>
                </div>
                <h3 className="text-4xl font-bold mb-6 leading-tight">
                  연하장애 환자를 위한<br />
                  영양관리 가이드북 제작
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/50 text-xs uppercase font-bold mb-2 tracking-widest">Background</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      고령화 사회 진입에 따른 연하장애 환자 급증, 의료진과 보호자가 쉽게 참고할 수 있는 표준화된 영양 관리 지침의 필요성 대두
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-white/50 text-xs uppercase font-bold mb-2 tracking-widest">Role</p>
                      <p className="text-white/80 text-sm">콘텐츠 기획, 영양 지침 집필, 감수</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase font-bold mb-2 tracking-widest">Outcome</p>
                      <p className="text-white/80 text-sm">전국 50개 병원 배포, 만족도 95%</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-transparent opacity-50" />
                <div className="text-center p-8 relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-bold mb-2">시각 자료 영역</p>
                  <p className="text-white/40 text-xs">책자 표지, 내지 이미지, 혹은 교육 현장 사진 배치</p>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Design System */}
        <section id="design" className="scroll-mt-24">
          <SectionHeader 
            title="05. 비주얼 디자인 가이드" 
            subtitle="전문성과 신뢰감을 주는 컬러, 타이포그래피, 아이콘 시스템입니다."
            icon={Palette}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Color Palette</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: 'Navy', hex: '#1B2B48', text: 'text-white' },
                  { name: 'Deep Green', hex: '#2D4F3C', text: 'text-white' },
                  { name: 'Slate Gray', hex: '#64748B', text: 'text-white' },
                  { name: 'Soft White', hex: '#F8F9FA', text: 'text-slate-900' },
                ].map((c, i) => (
                  <div key={i} className="space-y-2">
                    <div className={cn("h-24 rounded-xl shadow-sm flex items-end p-3", c.text)} style={{ backgroundColor: c.hex }}>
                      <span className="text-[10px] font-mono opacity-80">{c.hex}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-700">{c.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Typography & Icons</h4>
              <div className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[Award, HeartPulse, Users, Calendar].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-navy-600" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">신뢰감 있는 라인 아이콘 사용 권장</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-navy-900">Pretendard / Noto Sans KR</p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    가독성이 높은 고딕 계열 폰트를 메인으로 사용하며,<br />
                    강조하고 싶은 키워드는 <strong>Bold</strong> 또는 <strong>Navy</strong> 컬러를 활용합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Table of Contents */}
        <section id="toc" className="scroll-mt-24 pb-24">
          <SectionHeader 
            title="06. 포트폴리오 목차 구성" 
            subtitle="목적에 따라 선택 가능한 두 가지 버전의 목차입니다."
            icon={BookOpen}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-white border border-slate-200 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-navy-50 text-navy-700 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">Version A: Simple</div>
              <h4 className="text-xl font-bold mb-8 text-navy-900">핵심 역량 중심 (강의 섭외용)</h4>
              <ul className="space-y-4">
                {['Intro: 슬로건 및 프로필', 'Expertise: 4대 핵심 강점', 'Services: 강의 및 교육 분야', 'Portfolio: 주요 프로젝트 TOP 3', 'Contact: 협업 제안 및 연락처'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-600">
                    <span className="w-6 h-6 rounded-full bg-navy-100 text-navy-700 text-[10px] font-bold flex items-center justify-center shrink-0">{i+1}</span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-white border border-slate-200 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-deepGreen/10 text-deepGreen text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">Version B: Detailed</div>
              <h4 className="text-xl font-bold mb-8 text-navy-900">경력 상세 중심 (프로젝트 참여용)</h4>
              <ul className="space-y-4">
                {['Profile: 상세 경력 및 자격 사항', 'Philosophy: 교육 철학 및 지향점', 'Specialty: 질환별/대상별 전문성', 'Experience: 교육/캠프/패널 상세 사례', 'Content: 제작 책자 및 연구 자료', 'Vision: 향후 협업 방향성'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-600">
                    <span className="w-6 h-6 rounded-full bg-deepGreen/10 text-deepGreen text-[10px] font-bold flex items-center justify-center shrink-0">{i+1}</span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-deepGreen text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">전문가로서의 새로운 도약을 응원합니다.</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            본 가이드는 임상영양사님의 10년 경력과 교육 전문성을 가장 효과적으로 전달하기 위해 설계되었습니다. 
            이 구조를 바탕으로 본인만의 스토리를 채워보세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all">
              Google Slides 템플릿 복사하기
            </button>
            <button className="bg-slate-800 text-white px-8 py-3 rounded-full font-bold border border-slate-700 hover:bg-slate-700 transition-all">
              PDF 가이드 다운로드
            </button>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-800 text-slate-500 text-xs">
            © 2024 Clinical Dietitian Portfolio Strategy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
