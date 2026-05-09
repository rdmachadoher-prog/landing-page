export interface NavLink {
  label: string;
  href:  string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  iconName: string;
  title:    string;
  desc:     string;
  tag:      string;
}

export interface Project {
  title:    string;
  category: string;
  year:     string;
  desc:     string;
  href?:    string;
  image?:   string;
}

export interface Testimonial {
  quote:    string;
  author:   string;
  role:     string;
  initials: string;
}

export interface SocialLink {
  label: string;
  href:  string;
}
