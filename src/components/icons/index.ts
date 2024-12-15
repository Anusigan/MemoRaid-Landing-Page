import { 
  Brain, 
  CircleUserRound, 
  Users, 
  Activity, 
  ArrowRight, 
  Shield, 
  Heart,
  Lightbulb
} from 'lucide-react';

// Export all icons used in the application
export const Icons = {
  Brain,
  Memory: Lightbulb, // Using Lightbulb as a replacement for Memory
  Users,
  Activity,
  ArrowRight,
  Shield,
  Heart,
  CircleUserRound
} as const;