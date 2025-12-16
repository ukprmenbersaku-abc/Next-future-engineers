export interface TeamMember {
  role: string;
  name: string; // Optional context, usually just roles for privacy in generic templates
}

export interface TeamData {
  id: 'A' | 'B';
  name: string;
  slogan: string;
  description: string;
  color: string;
  accentColor: string;
  goals: string[];
  iconName: 'Trophy' | 'Users';
}

export interface TimelineEvent {
  title: string;
  description: string;
  iconName: 'Wrench' | 'GitBranch' | 'Flag';
}