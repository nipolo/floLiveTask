import { AccountSettingsModel } from './account-settings.model';
import { LegalInfoModel } from './legal-info.model';
import { TransactionModel } from './transaction.model';

export interface AccountModel {
  legalInformation: LegalInfoModel;
  transactions: TransactionModel[];
  settings: AccountSettingsModel;
}
