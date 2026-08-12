/** 08 注文住宅「木戸建築設計」完全モノクロ（差し色なし） */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { architecture, texture, portraitBox } from '../_shared/scenes.mjs';
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), 'images');
mkdirSync(OUT, { recursive: true });
const put = (n, s) => writeFileSync(resolve(OUT, n + '.svg'), s, 'utf8');

const PAPER='#FAFAF9', GREY='#D8D8D6', INK='#101010', MID='#8A8A88';

put('hero', architecture({ w:1600,h:1000, sky:'#E6E6E4', ground:GREY,     line:INK, accent:MID, variant:'flat',   label:'外観' }));
put('og',   architecture({ w:1200,h:630,  sky:'#E6E6E4', ground:GREY,     line:INK, accent:MID, variant:'flat',   label:'OGP' }));
put('ext',  architecture({ w:1000,h:750,  sky:'#EDEDEB', ground:'#CFCFCD',line:INK, accent:MID, variant:'garage', label:'正面' }));
put('wood', texture({ w:1000,h:750, base:'#CBC8C2', tint:'#1A1A18', kind:'fabric',   label:'木部' }));
put('conc', texture({ w:1000,h:750, base:'#BEBEBC', tint:'#101010', kind:'concrete', label:'コンクリート' }));
['a-01','a-02'].forEach((n,i)=>put(n, portraitBox({ w:700,h:900, bg:['#E6E6E4',GREY][i], ink:INK, accent:'#6A6A68', label:'実写差し替え', note:'設計士' })));
['o-01','o-02'].forEach((n,i)=>put(n, portraitBox({ w:400,h:400, bg:['#E6E6E4',GREY][i], ink:INK, accent:'#6A6A68', label:'施主', note:'' })));
put('model',portraitBox({ w:1200,h:800, bg:PAPER, ink:INK, accent:'#6A6A68', label:'実写差し替え', note:'モデルハウス' }));
console.log('✓ 08-house 10枚');
