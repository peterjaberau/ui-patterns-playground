import { HttpTypes } from '@medusajs/types';
import { t } from '@/i18n/translations/en';

export enum PromotionStatus {
  SCHEDULED = 'SCHEDULED',
  EXPIRED = 'EXPIRED',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DRAFT = 'DRAFT',
}

export type StatusColors = 'grey' | 'orange' | 'green' | 'red' | 'grey';
export type StatusMap = Record<string, [StatusColors, string]>;
export const promotionStatusMap: StatusMap = {
  [PromotionStatus.ACTIVE]: ['green', t('statuses.active')],
  [PromotionStatus.INACTIVE]: ['red', t('statuses.inactive')],
  [PromotionStatus.DRAFT]: ['grey', t('statuses.draft')],
  [PromotionStatus.SCHEDULED]: [
    'orange',
    `${t('promotions.fields.campaign')} ${t('statuses.scheduled').toLowerCase()}`,
  ],
  [PromotionStatus.EXPIRED]: ['red', `${t('promotions.fields.campaign')} ${t('statuses.expired').toLowerCase()}`],
};

export const getPromotionStatus = (promotion: HttpTypes.AdminPromotion) => {
  const date = new Date();
  const campaign = promotion.campaign;

  if (!campaign) {
    return promotionStatusMap[promotion.status!.toUpperCase()];
  }

  if (campaign.starts_at && new Date(campaign.starts_at!) > date) {
    return promotionStatusMap[PromotionStatus.SCHEDULED];
  }

  const campaignBudget = campaign.budget;
  const overBudget = campaignBudget && campaignBudget.used! > campaignBudget.limit!;

  if ((campaign.ends_at && new Date(campaign.ends_at) < date) || overBudget) {
    return promotionStatusMap[PromotionStatus.EXPIRED];
  }

  return promotionStatusMap[promotion.status!.toUpperCase()];
};
