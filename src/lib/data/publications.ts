import { Publication } from '@/types';

export const publicationsData: Publication[] = [
  {
    id: 'pub-1',
    authors: {
      ja: '一色潤, 高田崚介',
      en: 'Megumu Isshiki, Ryosuke Takada'
    },
    title: {
      ja: '3D CAD操作支援のための巻き尺を用いたサイズ感提示デバイスの開発',
      en: 'Development of a Size Sense Presentation Device Using a Tape Measure for 3D CAD Operation Support'
    },
    venue: {
      ja: 'インタラクション2024, 巻, 号, pp. 59 -',
      en: 'INTERACTION 2024, Vol., No., pp. 59 -'
    }
  },
  {
    id: 'pub-2',
    authors: {
      ja: '森山拓海, 小澤正宜, 清水俊彦, Julien Amar, 酒井昌彦, 尾山匡浩, 田原熙昂, 一色潤, 早稲田一嘉',
      en: 'Takumi Moriyama, Masanobu Ozawa, Toshihiko Shimizu, Julien Amar, Masahiko Sakai, Masahiro Oyama, Kiaki Tahara, Megumu Isshiki, Kazuyoshi Waseda'
    },
    title: {
      ja: '植物ロボットによる動作とユーザーの感情想起の関係',
      en: 'Relationship between Plant Robot Movement and User Emotional Response'
    },
    venue: {
      ja: 'ロボティクス・メカトロニクス講演会 2025, pp. 1P1-K07',
      en: 'Robotics and Mechatronics Conference 2025, pp. 1P1-K07'
    }
  }
];