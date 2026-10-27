/**
 * Strict TypeScript Definitions for Portfolio with Bilingual Support
 */

export type ThemeMode = 'light' | 'dark';
export type Language = 'vi' | 'en';

export type SectionId = 'hero' | 'about' | 'projects' | 'skills' | 'experience' | 'contact';

export interface LocalizedString {
  readonly vi: string;
  readonly en: string;
}

export interface NavRoute {
  readonly id: SectionId;
  readonly label: LocalizedString;
  readonly href: string;
}

export interface SocialLink {
  readonly platform: 'github' | 'linkedin' | 'email' | 'phone';
  readonly label: string;
  readonly url: string;
  readonly iconName: string;
}

export interface TechnicalHighlight {
  readonly title: LocalizedString;
  readonly description: LocalizedString;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly subtitle: LocalizedString;
  readonly description: LocalizedString;
  readonly image: string;
  readonly demoUrl: string;
  readonly githubUrl: string;
  readonly tags: readonly string[];
  readonly highlights: readonly TechnicalHighlight[];
}

export type SkillCategory = 'core' | 'ui' | 'state' | 'tools';

export interface Skill {
  readonly name: string;
  readonly category: SkillCategory;
  readonly description: LocalizedString;
}

export interface Experience {
  readonly id: string;
  readonly role: LocalizedString;
  readonly company: string;
  readonly location: LocalizedString;
  readonly period: LocalizedString;
  readonly current: boolean;
  readonly summary: LocalizedString;
  readonly achievements: readonly LocalizedString[];
  readonly techStack: readonly string[];
}

export interface ContactFormData {
  readonly fullName: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
