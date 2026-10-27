/**
 * Strict TypeScript Definitions for Portfolio
 */

export type ThemeMode = 'light' | 'dark';

export type SectionId = 'hero' | 'about' | 'projects' | 'skills' | 'experience' | 'contact';

export interface NavRoute {
  readonly id: SectionId;
  readonly label: string;
  readonly href: string;
}

export interface SocialLink {
  readonly platform: 'github' | 'linkedin' | 'email' | 'twitter';
  readonly label: string;
  readonly url: string;
  readonly iconName: string;
}

export interface TechnicalHighlight {
  readonly title: string;
  readonly description: string;
  readonly metric?: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly longDescription: string;
  readonly image: string;
  readonly demoUrl: string;
  readonly githubUrl: string;
  readonly tags: readonly string[];
  readonly highlights: readonly TechnicalHighlight[];
  readonly featured: boolean;
  readonly architecturePoints: readonly string[];
}

export type SkillCategory = 'core' | 'ui' | 'state' | 'tools';

export interface Skill {
  readonly name: string;
  readonly category: SkillCategory;
  readonly level: 'Advanced' | 'Expert' | 'Proficient';
  readonly iconName: string;
  readonly description: string;
  readonly isPrimary?: boolean;
}

export interface Experience {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly current: boolean;
  readonly type: 'work' | 'education' | 'freelance';
  readonly summary: string;
  readonly achievements: readonly string[];
  readonly techStack: readonly string[];
}

export interface MetricStat {
  readonly label: string;
  readonly value: string;
  readonly description: string;
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
