export type HazardCategory =
  | 'pothole'
  | 'flooding'
  | 'accident'
  | 'construction'
  | 'crime'
  | 'lighting'
  | 'debris'
  | 'traffic'
  | 'other';

export type Severity = 'Low' | 'Medium' | 'High' | 'Critical';
export type ReportStatus = 'Open' | 'Verified' | 'In Progress' | 'Resolved' | 'Rejected';

export interface Report {
  id: string;
  title: string;
  description: string;
  category: HazardCategory;
  severity: Severity;
  status: ReportStatus;
  lat: number;
  lon: number;
  location_name: string;
  reporter_name: string | null;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface StatusHistoryEntry {
  id: string;
  report_id: string;
  status: ReportStatus;
  note: string | null;
  changed_at: string;
}

export interface ComplaintDraft {
  id: string;
  report_id: string;
  recipient: string;
  subject: string;
  body: string;
  approved: boolean;
  created_at: string;
  updated_at: string;
}

export interface AgentRun {
  id: string;
  task: string;
  tool_calls: AgentToolCall[];
  response: string;
  created_at: string;
}

export interface AgentToolCall {
  tool: string;
  args: Record<string, unknown>;
  result: unknown;
  timestamp: string;
}

export interface AgentMessage {
  role: 'user' | 'assistant' | 'tool';
  content: string;
  toolCalls?: AgentToolCall[];
  timestamp: string;
}

export interface WeatherData {
  temperature: number;
  windSpeed: number;
  precipitation: number;
  weatherCode: number;
  isDay: boolean;
  utcOffsetSeconds: number;
  time: string;
}

export interface TravelRisk {
  level: 'Low' | 'Moderate' | 'High' | 'Severe';
  score: number;
  factors: string[];
}

export interface AuthorityEntry {
  name: string;
  jurisdiction: string;
  category: HazardCategory | 'general';
  channel: string;
  contact: string;
  verified: boolean;
}

export interface WeatherForecastDay {
  date: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
  precipitation: number;
  windSpeedMax: number;
}
