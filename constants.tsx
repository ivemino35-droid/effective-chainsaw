
import React from 'react';
import { Pool, PoolType, PoolStatus, MemberTier, User, TrustScore } from './types';

export const COLORS = {
  primary: '#2D302E', 
  accent: '#8CA082', // Sage (Growth/Life)
  accentSecondary: '#E6D5C3', // Warm Sand
  ubuntuGold: '#D4AF37', // Gold (Honor/Value)
  terracotta: '#C07B5B', // Warm Earth (Community)
  background: '#FDFCFB', 
  darkSurface: '#1A1C1B',
  status: {
    healthy: '#5C7A67',
    warning: '#D4AF37',
    critical: '#B36A5E'
  }
};

export const MOCK_USER: User & { upcomingContributions: number; pendingPayouts: number; ubuntuScoreValue: number } = {
  id: 'u1',
  name: 'Thabo',
  walletBalance: 2300,
  totalSavings: 15750.00,
  upcomingContributions: 3,
  pendingPayouts: 2500.00,
  ubuntuScoreValue: 842,
  trustScore: {
    score: 842,
    rating: 'Exceptional',
    metrics: {
      contributionVelocity: 95,
      communityVouching: 88,
      governanceParticipation: 72,
      altruismFactor: 80
    }
  }
};

export const MOCK_POOLS: Pool[] = [
  {
    id: 'p1',
    name: 'Phakamani Family Circle',
    type: PoolType.MONTHLY,
    contributionAmount: 500,
    nextDueDate: 'Feb 5, 2025',
    rotationPosition: 3,
    totalMembers: 8,
    status: PoolStatus.HEALTHY,
    currentCycle: 4,
    totalPoolValue: 4000,
    members: []
  },
  {
    id: 'p2',
    name: 'Diaspora Savings Circle',
    type: PoolType.MONTHLY,
    contributionAmount: 1500,
    nextDueDate: 'Feb 15, 2025',
    rotationPosition: 1,
    totalMembers: 12,
    status: PoolStatus.WARNING,
    currentCycle: 2,
    totalPoolValue: 18000,
    members: []
  }
];

export const MOCK_MEMBERS = [
  {
    id: 'm1',
    name: 'Sipho Zulu',
    email: 'sipho.zulu@ubuntu.co.za',
    tier: MemberTier.GOLD,
    status: 'Paid',
    penalties: 0,
    total: 12500,
    ubuntuScore: 890,
    trustMetrics: {
      contributionVelocity: 92,
      communityVouching: 85,
      governanceParticipation: 78,
      altruismFactor: 88
    }
  },
  {
    id: 'm2',
    name: 'Nandi Madida',
    email: 'nandi.m@vault.co',
    tier: MemberTier.SILVER,
    status: 'Late',
    penalties: 1,
    total: 8400,
    ubuntuScore: 720,
    trustMetrics: {
      contributionVelocity: 65,
      communityVouching: 75,
      governanceParticipation: 82,
      altruismFactor: 60
    }
  },
  {
    id: 'm3',
    name: 'Lungi Ngidi',
    email: 'lungi.n@cricket.sa',
    tier: MemberTier.BRONZE,
    status: 'Pending',
    penalties: 0,
    total: 3200,
    ubuntuScore: 640,
    trustMetrics: {
      contributionVelocity: 58,
      communityVouching: 62,
      governanceParticipation: 55,
      altruismFactor: 70
    }
  },
  {
    id: 'm4',
    name: 'Zanele Muholi',
    email: 'zanele.art@gallery.co',
    tier: MemberTier.PLATINUM,
    status: 'Paid',
    penalties: 0,
    total: 25000,
    ubuntuScore: 980,
    trustMetrics: {
      contributionVelocity: 99,
      communityVouching: 95,
      governanceParticipation: 98,
      altruismFactor: 92
    }
  }
];

export const MOCK_CONTRIBUTIONS = [
  { id: 'c1', memberId: 'm1', memberName: 'Sipho Zulu', amount: 500, date: 'Jan 05, 2025', status: 'On Time' },
  { id: 'c2', memberId: 'm1', memberName: 'Sipho Zulu', amount: 500, date: 'Dec 05, 2024', status: 'On Time' },
  { id: 'c3', memberId: 'm2', memberName: 'Nandi Madida', amount: 550, date: 'Jan 08, 2025', status: 'Late' },
  { id: 'c4', memberId: 'm2', memberName: 'Nandi Madida', amount: 500, date: 'Dec 05, 2024', status: 'On Time' },
  { id: 'c5', memberId: 'u1', memberName: 'Thabo', amount: 500, date: 'Jan 04, 2025', status: 'On Time' },
  { id: 'c6', memberId: 'm4', memberName: 'Zanele Muholi', amount: 500, date: 'Jan 02, 2025', status: 'Early' },
];
