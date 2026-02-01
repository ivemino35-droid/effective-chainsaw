
export enum PoolType {
  FAMILY_EMERGENCY_EDUCATION = 'Family Emergency & Education',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  FORTNIGHT = 'fortnightly',
  MONTHLY = 'monthly',
  STOKVEL = 'Stokvel',
  SAVINGS = 'Savings',
  INVESTMENT = 'Investment',
  ROTATING = 'Rotating (ROSCA)'
}

export enum PoolStatus {
  HEALTHY = 'Healthy',
  WARNING = 'Warning',
  CRITICAL = 'Critical'
}

export enum MemberTier {
  BRONZE = 'Bronze',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PLATINUM = 'Platinum'
}


export type TrustDomain = 'family' | 'community' | 'commercial' | 'vouching';

export interface TrustProfileV1 {
  userId: string;
  domain: TrustDomain;
  score01: number;        // 0.0 – 1.0
  confidence01: number;   // 0.0 – 1.0
  lastUpdated: string;
}

export interface TrustSignalV1 {
  signalId: string;
  userId: string;
  poolId: string;
  domain: TrustDomain;
  signalType: string;
  weight: number;
  timestamp: string;
}

export interface TrustScore {
  score: number; // 0 to 1000
  rating: 'Exceptional' | 'Good' | 'Fair' | 'Poor';
  metrics: {
    contributionVelocity: number; // 0-100
    communityVouching: number; // 0-100
    governanceParticipation: number; // 0-100
    altruismFactor: number; // 0-100 (Emergency fund supports)
  };
}

export interface ConstitutionClause {
  id: string;
  title: string;
  content: string;
}

export interface ConstitutionCustomization {
  poolName: string;
  purpose: string;
  poolType: PoolType;
  contributionAmount: string;
  contributionSchedule: string;
  latePaymentPolicy: string;
  disputeResolution: string;
  votingThreshold: 'Simple Majority' | 'Two-Thirds';
  governanceEvents: string;
  outcomeExecution: string;
  remittanceTerms: string;
  popiaConsent: boolean;
  authorizedSignatories: string;
  clauses: ConstitutionClause[];
}

export interface Pool {
  id: string;
  name: string;
  type: PoolType;
  contributionAmount: number;
  nextDueDate: string;
  rotationPosition: number;
  totalMembers: number;
  status: PoolStatus;
  currentCycle: number;
  totalPoolValue: number;
  members: PoolMember[];
}

export interface PoolMember {
  id: string;
  name: string;
  email: string;
  position: number;
  tier: MemberTier;
  status: 'Paid' | 'Late' | 'Pending' | 'Defaulted';
  penalties: number;
  totalContributed: number;
  trustScore?: number;
}

export interface User {
  id: string;
  name: string;
  walletBalance: number;
  totalSavings: number;
  trustScore: TrustScore;
}
