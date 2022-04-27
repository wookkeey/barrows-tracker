import { BarrowsBrother, ObtainedItems } from '@/types/brothers';

export const BARROWS_BROTHERS: Record<BarrowsBrother, string> = {
  ahrims: 'Ahrim the Blighted',
  dharoks: 'Dharok the Wretched',
  guthans: 'Guthan the Infested',
  karils: 'Karil the Tainted',
  torags: 'Torag the Corrupted',
  veracs: 'Verac the Defiled',
};

export const OBTAINED_ITEMS: ObtainedItems = {
  ahrims: ['helm', 'body', 'legs'],
  dharoks: ['body', 'legs'],
  guthans: ['body', 'helm'],
  karils: ['helm', 'weapon'],
  torags: ['body', 'weapon'],
  veracs: ['body', 'legs'],
};
