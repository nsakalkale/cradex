import {
  Upload,
  DollarSign,
  ShieldCheck,
  Clock,
  Zap,
  Lock,
  Globe,
} from "lucide-react";

export const HOW_IT_WORKS = [
  {
    icon: Upload,
    title: "Upload License Details",
    description:
      "Provide information about your software license including version, purchase date, and proof of ownership.",
  },
  {
    icon: DollarSign,
    title: "Get Instant Valuation",
    description:
      "Our algorithm calculates a fair market price based on current demand and license specifics.",
  },
  {
    icon: ShieldCheck,
    title: "Receive Secure Payment",
    description:
      "Once sold, we guarantee fast, secure payment via your preferred method.",
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: Zap,
    title: "Fast Transactions",
    description: "Get offers in minutes and payments within days, not weeks.",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description:
      "Our marketplace ensures you get top dollar for your licenses.",
  },
  {
    icon: Lock,
    title: "Secure Process",
    description: "Bank-level security protects all your transactions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access to buyers worldwide increases your selling potential.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp",
    content:
      "SoftSell helped us recover over $50,000 in unused software licenses. The process was seamless and their team was incredibly professional.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "IT Director",
    company: "Innovate Inc",
    content:
      "I was skeptical at first, but SoftSell delivered exactly what they promised. We sold 15 licenses in just two weeks with minimal effort on our part.",
    rating: 5,
  },
];

export const LICENSE_TYPES = [
  { value: "microsoft", label: "Microsoft" },
  { value: "adobe", label: "Adobe" },
  { value: "autodesk", label: "Autodesk" },
  { value: "vmware", label: "VMware" },
  { value: "oracle", label: "Oracle" },
  { value: "other", label: "Other" },
];
