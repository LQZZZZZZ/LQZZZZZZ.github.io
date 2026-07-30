import sharp from "sharp";
import { fileURLToPath } from "node:url";

const width = 1400;
const height = 720;
const paper = "#fffdfb";
const ink = "#28242b";
const muted = "#716b73";
const line = "#d9d3d8";
const pink = "#d894ac";
const palePink = "#f8e9ef";
const purple = "#8172a0";
const palePurple = "#eeeaf6";
const blue = "#6d94ae";

function frame(title, subtitle, body) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="${width}" height="${height}" fill="${paper}"/>
      <style>
        text { font-family: "Comic Sans MS", "Comic Sans", cursive; fill: ${ink}; }
        .title { font-size: 38px; font-weight: 700; }
        .subtitle { font-size: 22px; fill: ${muted}; }
        .label { font-size: 22px; }
        .small { font-size: 18px; fill: ${muted}; }
        .tiny { font-size: 16px; fill: ${muted}; }
      </style>
      <text class="title" x="70" y="72">${title}</text>
      <text class="subtitle" x="70" y="108">${subtitle}</text>
      <line x1="70" y1="135" x2="1330" y2="135" stroke="${line}" stroke-width="2"/>
      ${body}
    </svg>`;
}

const figures = [
  {
    name: "rego-method",
    svg: frame(
      "REGO · revised expected improvement",
      "A distribution-aware balance between local exploitation and global exploration",
      `
        <rect x="70" y="180" width="825" height="450" rx="18" fill="#ffffff" stroke="${line}" stroke-width="2"/>
        <line x1="145" y1="555" x2="835" y2="555" stroke="${ink}" stroke-width="3"/>
        <line x1="145" y1="555" x2="145" y2="235" stroke="${ink}" stroke-width="3"/>
        <path d="M155 455 C235 260 330 315 405 475 C485 625 575 255 665 350 C745 440 770 510 825 270"
              fill="none" stroke="${purple}" stroke-width="7"/>
        <path d="M155 470 C255 330 355 350 455 435 C560 525 680 360 825 320"
              fill="none" stroke="${pink}" stroke-width="4" stroke-dasharray="13 11"/>
        <circle cx="225" cy="370" r="12" fill="${blue}"/>
        <circle cx="350" cy="405" r="12" fill="${blue}"/>
        <circle cx="515" cy="460" r="12" fill="${blue}"/>
        <circle cx="730" cy="390" r="12" fill="${blue}"/>
        <circle cx="625" cy="315" r="17" fill="${pink}" stroke="${ink}" stroke-width="3"/>
        <line x1="625" y1="315" x2="625" y2="555" stroke="${pink}" stroke-width="3" stroke-dasharray="8 8"/>
        <text class="small" x="585" y="285">next sample</text>
        <text class="tiny" x="162" y="600">sample distribution</text>
        <rect x="940" y="205" width="390" height="120" rx="14" fill="${palePink}" stroke="${pink}" stroke-width="2"/>
        <text class="label" x="980" y="255">exploit</text>
        <text class="small" x="980" y="290">refine promising minima</text>
        <rect x="940" y="350" width="390" height="120" rx="14" fill="${palePurple}" stroke="${purple}" stroke-width="2"/>
        <text class="label" x="980" y="400">explore</text>
        <text class="small" x="980" y="435">cover sparse regions</text>
        <path d="M1000 545 H1265" stroke="${line}" stroke-width="10" stroke-linecap="round"/>
        <circle cx="1145" cy="545" r="17" fill="${purple}"/>
        <text class="small" x="990" y="595">adaptive balance factor</text>
      `,
    ),
  },
  {
    name: "morris-method",
    svg: frame(
      "Sequential Morris sensitivity analysis",
      "Progressive Latin hypercube slices stop when the sensitivity ranking stabilizes",
      `
        <rect x="70" y="180" width="1260" height="450" rx="18" fill="#ffffff" stroke="${line}" stroke-width="2"/>
        <text class="label" x="110" y="235">progressive samples</text>
        <g transform="translate(110 270)">
          <rect x="0" y="0" width="125" height="125" rx="10" fill="${palePink}" stroke="${pink}" stroke-width="2"/>
          <circle cx="28" cy="82" r="7" fill="${pink}"/><circle cx="64" cy="35" r="7" fill="${pink}"/><circle cx="102" cy="68" r="7" fill="${pink}"/>
          <rect x="165" y="0" width="125" height="125" rx="10" fill="${palePurple}" stroke="${purple}" stroke-width="2"/>
          <circle cx="187" cy="28" r="7" fill="${purple}"/><circle cx="220" cy="95" r="7" fill="${purple}"/><circle cx="264" cy="54" r="7" fill="${purple}"/>
          <rect x="330" y="0" width="125" height="125" rx="10" fill="#edf3f6" stroke="${blue}" stroke-width="2"/>
          <circle cx="352" cy="72" r="7" fill="${blue}"/><circle cx="395" cy="26" r="7" fill="${blue}"/><circle cx="432" cy="102" r="7" fill="${blue}"/>
          <path d="M132 63 H155 M297 63 H320 M462 63 H500" stroke="${ink}" stroke-width="3"/>
          <path d="M493 55 L507 63 L493 71" fill="none" stroke="${ink}" stroke-width="3"/>
        </g>
        <text class="small" x="138" y="430">slice 1</text>
        <text class="small" x="303" y="430">slice 2</text>
        <text class="small" x="468" y="430">slice 3</text>
        <line x1="670" y1="540" x2="1240" y2="540" stroke="${ink}" stroke-width="3"/>
        <line x1="670" y1="540" x2="670" y2="245" stroke="${ink}" stroke-width="3"/>
        <path d="M690 305 C760 420 825 350 885 395 C950 444 1010 410 1080 420 C1140 428 1190 425 1230 426"
              fill="none" stroke="${purple}" stroke-width="7"/>
        <path d="M690 475 C760 350 825 430 885 405 C950 378 1010 413 1080 420 C1140 424 1190 425 1230 426"
              fill="none" stroke="${pink}" stroke-width="6" stroke-dasharray="12 9"/>
        <line x1="1080" y1="245" x2="1080" y2="540" stroke="${pink}" stroke-width="3" stroke-dasharray="8 8"/>
        <rect x="1020" y="205" width="200" height="45" rx="12" fill="${palePink}"/>
        <text class="small" x="1050" y="235">stop criterion</text>
        <text class="tiny" x="705" y="585">sensitivity estimates converge as slices are added</text>
      `,
    ),
  },
  {
    name: "pc-kriging-method",
    svg: frame(
      "Data-driven PC-Kriging",
      "Correlated inputs inform a sparse polynomial trend and a local Kriging correction",
      `
        <rect x="70" y="190" width="350" height="400" rx="18" fill="${palePurple}" stroke="${purple}" stroke-width="2"/>
        <text class="label" x="110" y="240">correlated observations</text>
        <line x1="120" y1="520" x2="370" y2="520" stroke="${ink}" stroke-width="2"/>
        <line x1="120" y1="520" x2="120" y2="285" stroke="${ink}" stroke-width="2"/>
        <g fill="${purple}" opacity="0.86">
          <circle cx="155" cy="475" r="9"/><circle cx="175" cy="448" r="9"/><circle cx="196" cy="432" r="9"/>
          <circle cx="218" cy="405" r="9"/><circle cx="238" cy="386" r="9"/><circle cx="262" cy="360" r="9"/>
          <circle cx="284" cy="350" r="9"/><circle cx="305" cy="322" r="9"/><circle cx="332" cy="310" r="9"/>
          <circle cx="224" cy="440" r="8"/><circle cx="276" cy="395" r="8"/><circle cx="320" cy="360" r="8"/>
        </g>
        <path d="M445 390 H500" stroke="${ink}" stroke-width="4"/><path d="M489 380 L504 390 L489 400" fill="none" stroke="${ink}" stroke-width="4"/>
        <rect x="520" y="190" width="350" height="400" rx="18" fill="${palePink}" stroke="${pink}" stroke-width="2"/>
        <text class="label" x="565" y="240">sparse polynomial trend</text>
        <text x="575" y="345" font-size="40">ŷ<tspan baseline-shift="sub" font-size="24">PC</tspan>(x)</text>
        <text x="575" y="420" font-size="31">1 · x₁ · x₂ · x₁x₂</text>
        <text class="small" x="575" y="495">adaptive basis selection</text>
        <path d="M895 390 H950" stroke="${ink}" stroke-width="4"/><path d="M939 380 L954 390 L939 400" fill="none" stroke="${ink}" stroke-width="4"/>
        <rect x="970" y="190" width="360" height="400" rx="18" fill="#edf3f6" stroke="${blue}" stroke-width="2"/>
        <text class="label" x="1010" y="240">Kriging correction</text>
        <path d="M1015 475 C1070 365 1110 430 1155 330 C1200 245 1250 380 1290 285" fill="none" stroke="${blue}" stroke-width="8"/>
        <path d="M1015 510 C1070 400 1110 465 1155 365 C1200 280 1250 415 1290 320 L1290 250 C1250 345 1200 210 1155 295 C1110 395 1070 330 1015 440 Z" fill="${blue}" opacity="0.14"/>
        <circle cx="1050" cy="430" r="9" fill="${pink}"/><circle cx="1135" cy="365" r="9" fill="${pink}"/><circle cx="1225" cy="330" r="9" fill="${pink}"/>
        <text class="small" x="1020" y="550">prediction + local uncertainty</text>
      `,
    ),
  },
  {
    name: "apce-method",
    svg: frame(
      "Arbitrary polynomial chaos expansion",
      "Raw input moments define an orthogonal basis for efficient global sensitivity analysis",
      `
        <rect x="70" y="190" width="350" height="400" rx="18" fill="${palePink}" stroke="${pink}" stroke-width="2"/>
        <text class="label" x="115" y="240">limited input data</text>
        <g fill="${pink}">
          <rect x="120" y="460" width="34" height="70"/><rect x="166" y="410" width="34" height="120"/>
          <rect x="212" y="320" width="34" height="210"/><rect x="258" y="350" width="34" height="180"/>
          <rect x="304" y="435" width="34" height="95"/>
        </g>
        <text class="small" x="120" y="285">samples → moments</text>
        <path d="M445 390 H500" stroke="${ink}" stroke-width="4"/><path d="M489 380 L504 390 L489 400" fill="none" stroke="${ink}" stroke-width="4"/>
        <rect x="520" y="190" width="350" height="400" rx="18" fill="${palePurple}" stroke="${purple}" stroke-width="2"/>
        <text class="label" x="565" y="240">orthogonal basis</text>
        <text x="575" y="330" font-size="35">φ₀(x) = 1</text>
        <text x="575" y="395" font-size="35">φ₁(x) = x − μ</text>
        <text x="575" y="460" font-size="35">φ₂(x) = x² + …</text>
        <text class="small" x="575" y="525">distribution-free construction</text>
        <path d="M895 390 H950" stroke="${ink}" stroke-width="4"/><path d="M939 380 L954 390 L939 400" fill="none" stroke="${ink}" stroke-width="4"/>
        <rect x="970" y="190" width="360" height="400" rx="18" fill="#edf3f6" stroke="${blue}" stroke-width="2"/>
        <text class="label" x="1010" y="240">global sensitivity</text>
        <line x1="1030" y1="520" x2="1285" y2="520" stroke="${ink}" stroke-width="2"/>
        <rect x="1050" y="320" width="42" height="200" fill="${purple}"/>
        <rect x="1120" y="385" width="42" height="135" fill="${pink}"/>
        <rect x="1190" y="435" width="42" height="85" fill="${blue}"/>
        <rect x="1260" y="475" width="42" height="45" fill="${line}"/>
        <text class="tiny" x="1058" y="550">x₁</text><text class="tiny" x="1128" y="550">x₂</text>
        <text class="tiny" x="1198" y="550">x₃</text><text class="tiny" x="1268" y="550">x₄</text>
        <text class="small" x="1035" y="285">Sobol-type indices</text>
      `,
    ),
  },
];

await Promise.all(
  figures.map(({ name, svg }) =>
    sharp(Buffer.from(svg))
      .png()
      .toFile(fileURLToPath(new URL(`../public/research/${name}.png`, import.meta.url))),
  ),
);
