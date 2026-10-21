export type ScreenType =
  | 'trang-chu'
  | 've-hoc-vien'
  | 'triet-ly-va-bieu-tuong'
  | 'khoa-hoc-thuc-chien'
  | 'phuong-phap-4-buoc'
  | 'doi-ngu-giang-vien'
  | 'tin-tuc-va-thue'
  | 'cong-hoc-vien'
  | 'lien-he';

export interface Course {
  id: string;
  code: string;
  badge: string;
  badgeType: 'hot' | 'highlight' | 'management' | 'strategy';
  category: 'ke-toan-vien' | 'chu-doanh-nghiep' | 'thue-chuyen-sau';
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  duration: string;
  tuition?: number;
  originalTuition?: number;
  tuitionNote?: string;
  nextStartDate: string;
  schedule: string;
  format: 'Offline tại Hà Nội' | 'Online tương tác Zoom' | 'Cả hai hình thức';
  targetAudience: string;
  syllabus: {
    module: string;
    topics: string[];
  }[];
}

export interface Partner {
  id: string;
  name: string;
  industry: string;
  badge: string;
  scale: string;
  partnershipType: string;
  description: string;
  verifiedByAnta: boolean;
  avatarUrl: string;
}

export interface TaxArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  legalReferences: string[];
  readTime: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  experience: string;
  bio: string;
  specialties: string[];
  quote: string;
  avatarUrl: string;
}

export interface StudentCertificate {
  code: string;
  studentName: string;
  courseName: string;
  completionDate: string;
  grade: 'Xuất sắc' | 'Giỏi' | 'Khá';
  status: 'Hợp lệ' | 'Đã cấp';
  credentialId: string;
}

export interface LeadSubmission {
  fullName: string;
  phone: string;
  email: string;
  courseInterest: string;
  notes?: string;
  createdAt: string;
}
