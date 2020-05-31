export interface Country {
  UlkeAdi: string;
  UlkeAdiEn: string;
  UlkeID: string;
}

export interface City {
  sehirAdi: string;
  sehirAdiEn: string;
  sehirID: string;
}

export interface District {
  IlceAdi: string;
  IlceAdiEn: string;
  IlceID: string;
}

export interface TimesData {
  MiladiTarihKisa: string;
  MiladiTarihUzun: string;
  HicriTarihKisa: string;
  HicriTarihUzun: string;
  Imsak: string;
  Gunes: string;
  Ogle: string;
  Ikindi: string;
  Aksam: string;
  Yatsi: string;
  KibleAcisi: string;
  KibleSaati: string;
}

export const THEMES: any = {
  light1: {
    primary: '#1976D2',
    background: '#ffffff',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  light2: {
    primary: '#2196f3',
    secondary: '#f50057',
    background: '#ffffff',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  dark1: {
    primary: '#000000',
    secondary: '#000000',
    background: '#ffffff',
    accent: '#000000',
    error: '#000000',
    info: '#000000',
    success: '#000000',
    warning: '#000000',
  },

}