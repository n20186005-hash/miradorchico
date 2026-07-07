type T = { zh: string; en: string; it: string; es: string };

// ── Nav ──
export const nav = {
  overview: { zh: `前言`, en: `Preamble`, it: `Premessa`, es: `Preámbulo` } as T,
  highlights: { zh: `亮点`, en: `Highlights`, it: `Punti salienti`, es: `Destacados` } as T,
  guide: { zh: `游览指南`, en: `Guide`, it: `Guida`, es: `Guía` } as T,
  transport: { zh: `交通`, en: `Transport`, it: `Trasporti`, es: `Transporte` } as T,
  reviews: { zh: `评价`, en: `Reviews`, it: `Recensioni`, es: `Opiniones` } as T,
  encyclopedia: { zh: `百科`, en: `Encyclopedia`, it: `Enciclopedia`, es: `Enciclopedia` } as T,
  ecology: { zh: `生态`, en: `Ecology`, it: `Ecologia`, es: `Ecología` } as T,
  gallery: { zh: `图集`, en: `Gallery`, it: `Galleria`, es: `Galería` } as T,
  faq: { zh: `问答`, en: `FAQ`, it: `Domande`, es: `Preguntas` } as T,
  support: { zh: `支持我们`, en: `Support Us`, it: `Sostienici`, es: `Apóyanos` } as T,
};

export const viewMode = {
  tourist: { zh: `游客模式`, en: `Traveler`, it: `Viaggiatore`, es: `Viajero` } as T,
  science: { zh: `科普模式`, en: `Field Notes`, it: `Note sul campo`, es: `Notas de campo` } as T,
} as const;

// ── Hero ──
export const hero = {
  title: {
    zh: `巴里洛切的<br/><span class="italic text-[color:var(--color-sun)]">Punto Panorámico</span>`,
    en: `Bariloche's<br/><span class="italic text-[color:var(--color-sun)]">Punto Panorámico</span>`,
    it: `Il <span class="italic text-[color:var(--color-sun)]">Punto Panorámico</span><br/>di Bariloche`,
    es: `El <span class="italic text-[color:var(--color-sun)]">Punto Panorámico</span><br/>de Bariloche`,
  } as T,
  subtitle: {
    zh: `Punto Panorámico · 省级公路 RP77“小环线”旁的一处开放式公共观景台 —— 俯瞰纳韦尔瓦皮湖的深蓝湖水、劳劳半岛与特罗纳多雪峰，是安第斯山脉最治愈的一扇窗。`,
    en: `Punto Panorámico · An open public viewpoint beside the provincial RP77 "Circuito Chico" — overlooking the deep blue of Nahuel Huapi Lake, the Llao Llao peninsula and the snow of Cerro Tronador, one of the most soothing windows onto the Andes.`,
    it: `Punto Panorámico · belvedere pubblico aperto accanto alla RP77 del "Circuito Chico" — con vista sul blu profondo del lago Nahuel Huapi, la penisola di Llao Llao e la neve del Cerro Tronador, una delle finestre più serene delle Ande.`,
    es: `Punto Panorámico · Un mirador público y abierto junto a la ruta provincial RP77 del "Circuito Chico" — con vistas al azul profundo del lago Nahuel Huapi, la península de Llao Llao y la nieve del Cerro Tronador, una de las ventanas más serenas de los Andes.`,
  } as T,
  viewMap: { zh: `在 Google 地图上查看位置`, en: `View location on Google Maps`, it: `Vedi la posizione su Google Maps`, es: `Ver la ubicación en Google Maps` } as T,
  statReviews: { zh: `评价`, en: `reviews`, it: `recensioni`, es: `opiniones` } as T,
  statLength: { zh: `评分`, en: `Rating`, it: `Valutazione`, es: `Puntuación` } as T,
  statFalls: { zh: `开放时间`, en: `Hours`, it: `Orari`, es: `Horario` } as T,
  statFlow: { zh: `所在地`, en: `Location`, it: `Località`, es: `Ubicación` } as T,
  chip1: { zh: `免费开放`, en: `Free access`, it: `Accesso libero`, es: `Acceso libre` } as T,
  chip2: { zh: `24 小时开放`, en: `Open 24h`, it: `Aperto 24 h`, es: `Abierto 24 h` } as T,
  chip3: { zh: `小环线景观`, en: `Circuito Chico view`, it: `Vista del Circuito Chico`, es: `Vista del Circuito Chico` } as T,
  tags: {
    zh: [`免费公共观景台`, `小环线 RP77`, `纳韦尔瓦皮湖`, `避开人群`],
    en: [`Free public viewpoint`, `Circuito Chico RP77`, `Nahuel Huapi Lake`, `Avoid crowds`],
    it: [`Belvedere pubblico libero`, `Circuito Chico RP77`, `Lago Nahuel Huapi`, `Evita la folla`],
    es: [`Mirador público libre`, `Circuito Chico RP77`, `Lago Nahuel Huapi`, `Evite multitudes`],
  } as T,
};

// ── Manifesto ──
export const manifesto = {
  sectionNum: { zh: `前言`, en: `Preamble`, it: `Premessa`, es: `Preámbulo` } as T,
  heading: {
    zh: `一扇窗，<br/><em class="text-[color:var(--color-emerald)]">半座山的呼吸</em>`,
    en: `One window.<br/><em class="text-[color:var(--color-emerald)]">Half a mountain's breath.</em>`,
    it: `Una finestra.<br/><em class="text-[color:var(--color-emerald)]">Il respiro della montagna.</em>`,
    es: `Una ventana.<br/><em class="text-[color:var(--color-emerald)]">El aliento de la montagna.</em>`,
  } as T,
  subheading: { zh: `致每一位驶上小环线的旅人`, en: `To every traveller who drives the Circuito Chico`, it: `A ogni viaggiatore che percorre il Circuito Chico`, es: `A todo viajero que recorre el Circuito Chico` } as T,
  p1: {
    zh: `欢迎来到 Punto Panorámico。在阿根廷巴里洛切，这片沿着省级公路 RP77“小环线”铺展的湖湾，并没有门票闸口，也没有围栏——它只是山路拐弯处一处被精心保留的开阔台地。天气晴好时，纳韦尔瓦皮湖在脚下铺成一块深蓝色的绸缎，对岸的劳劳半岛与特罗纳多峰静静伫立。`,
    en: `Welcome to Punto Panorámico. In Bariloche, Argentina, this bay along the provincial RP77 "Circuito Chico" has no ticket gate and no fence — it is simply an open terrace preserved at a bend in the road. On a clear day Nahuel Huapi Lake unfurls below like a sheet of deep-blue silk, with the Llao Llao peninsula and Cerro Tronador standing quietly across the water.`,
    it: `Benvenuti al Punto Panorámico. A Bariloche, in Argentina, questa baia lungo la RP77 del "Circuito Chico" non ha biglietteria né recinzioni: è una terrazza aperta conservata in una curva della strada. In giornata serena, il lago Nahuel Huapi si stende ai piedi come un lenzuolo di blu profondo, con la penisola di Llao Llao e il Cerro Tronador sull'altra sponda.`,
    es: `Bienvenido al Punto Panorámico. En Bariloche, Argentina, esta bahía junto a la ruta provincial RP77 del "Circuito Chico" no tiene boletería ni cerco — es simplemente una terraza abierta que se conserva en una curva del camino. En un día despejado, el lago Nahuel Huapi se extiende a los pies como una sábana de azul profundo, con la península de Llao Llao y el Cerro Tronador erguidos al otro lado del agua.`,
  } as T,
  p2: {
    zh: `这里没有游乐设施，没有喧嚣——只有风、森林与一汪随天光变幻的湖蓝。清晨，湖面常笼着薄雾；正午，阳光把雪峰照得发亮；而黄昏时分，特罗纳多峰会被夕阳染成金红，是整段小环线上最动人的几分钟。`,
    en: `There are no rides, no noise — only wind, forest and a lake-blue that shifts with the light. At dawn the water often wears a thin mist; at noon the sun sets the snow peaks glowing; at dusk Cerro Tronador is gilded red by the setting sun — the most moving few minutes along the whole Circuito Chico.`,
    it: `Non ci sono giostre né rumori — solo vento, bosco e un blu di lago che cambia con la luce. All'alba l'acqua spesso ha una leggera nebbia; a mezzogiorno il sole fa brillare le cime innevate; al tramonto il Cerro Tronador si tinge di rosso dorato: i minuti più toccanti di tutto il Circuito Chico.`,
    es: `No hay juegos ni ruido — solo viento, bosque y un azul de lago que cambia con la luz. Al amanecer el agua suele vestir una neblina tenue; al mediodía el sol hace brillar las cumbres nevadas; al atardecer el Cerro Tronador se tiñe de rojo dorado — los minutos más conmovedores de todo el Circuito Chico.`,
  } as T,
  p3: {
    zh: `作为一家致力于自然教育的非盈利科普团队，我们搭建本网站，不仅为了告诉你如何抵达这处观景台，更想邀请你以“守护者”而非“游客”的身份来到这里。当你站在被安第斯西风打磨了千万年的岩台，你既是巴塔哥尼亚山水的见证者，也是这片风景得以长存的共谋者。`,
    en: `As a non-profit team devoted to nature education, we built this site not only to tell you how to reach the viewpoint, but to invite you to arrive as a guardian rather than a mere visitor. When you stand on the ledge shaped by Andean westerlies for millions of years, you become both a witness to Patagonia's landscape and a co-keeper of its future.`,
    it: `Come team no-profit di educazione naturalistica, abbiamo creato questo sito non solo per spiegarti come arrivare, ma per invitarti a venire come custode e non solo come visitatore. Sulla terrazza modellata dal vento andino da milioni di anni, diventi testimone del paesaggio patagonico e suo co-custode.`,
    es: `Como equipo sin fines de lucro dedicado a la educación natural, creamos este sitio no solo para decirte cómo llegar al mirador, sino para invitarte a venir como guardián y no solo como visitante. Cuando te paras en la terraza modelada por el viento oeste andino durante millones de años, te vuelves testigo del paisaje patagónico y co-custodio de su futuro.`,
  } as T,
  p4: {
    zh: `🌍 <strong>守护国家公园的公众风景。</strong>小环线与这处观景台位于阿根廷著名的纳韦尔瓦皮国家公园（Parque Nacional Nahuel Huapi）保护区内。作为独立的教育项目，本网站的初衷正与此契合：Punto Panorámico 不仅属于每一位旅人，更是这片自然遗产的重要一环。我们呼吁每一位访客以“无痕山林（Leave No Trace）”的方式到访，助力巴塔哥尼亚山水资源的永续。`,
    en: `🌍 <strong>Guardians of a public National Park landscape.</strong> The Circuito Chico and this viewpoint lie within Argentina's renowned Nahuel Huapi National Park. As an independent educational project, this site shares that purpose: Punto Panorámico belongs to every traveller and is a vital part of this natural heritage. We invite every visitor to come by the "Leave No Trace" ethic.`,
    it: `🌍 <strong>Custodi di un paesaggio pubblico del Parco Nazionale.</strong> Il Circuito Chico e questo belvedere sono dentro il celebre Parco Nazionale Nahuel Huapi dell'Argentina. Come progetto educativo indipendente, il sito condivide quello scopo: il Punto Panorámico appartiene a ogni viaggiatore ed è parte vitale di questo patrimonio. Invitiamo ognuno a venire con l'etica del "Non Lasciare Traccia".`,
    es: `🌍 <strong>Custodios de un paisaje público del Parque Nacional.</strong> El Circuito Chico y este mirador se encuentran dentro del célebre Parque Nacional Nahuel Huapi de Argentina. Como proyecto educativo independiente, este sitio comparte ese propósito: el Punto Panorámico pertenece a cada viajero y es parte vital de este patrimonio natural. Invitamos a cada visitante a venir bajo la ética de "No Dejar Rastro".`,
  } as T,
  closing: {
    zh: `带走一张雪峰染金照片，留下山林本来的样子。<br/>让这扇安第斯的窗，为每个黄昏依旧洞开。`,
    en: `Take a photo of the gilded peak. Leave the forest as you found it.<br/>Let this Andean window stay open for every dusk.`,
    it: `Porta via una foto della cima dorata. Lascia il bosco come l'hai trovato.<br/>Che questa finestra andina resti aperta per ogni tramonto.`,
    es: `Lleva una foto de la cumbre dorada. Deja el bosque como lo encontraste.<br/>Que esta ventana andina siga abierta para cada atardecer.`,
  } as T,
  chip1: { zh: `安第斯西风`, en: `Andean westerlies`, it: `Vento occidentale andino`, es: `Viento oeste andino` } as T,
  chip2: { zh: `冰川湖蓝`, en: `Glacial lake blue`, it: `Blu lacustre glaciale`, es: `Azul lacustre glaciar` } as T,
  chip3: { zh: `小环线台地`, en: `Circuito Chico terrace`, it: `Terrazza del Circuito Chico`, es: `Terraza del Circuito Chico` } as T,
  chip4: { zh: `巴里洛切 · 阿根廷`, en: `Bariloche · Argentina`, it: `Bariloche · Argentina`, es: `Bariloche · Argentina` } as T,
};

// ── Highlights ──
export const highlights = {
  sectionNum: { zh: `游览亮点`, en: `Highlights`, it: `Punti salienti`, es: `Destacados` } as T,
  heading: { zh: `三种<em class="text-[color:var(--color-sun)]">体验</em>`, en: `Three ways<br/><em class="text-[color:var(--color-sun)]">to feel it</em>`, it: `Tre modi<br/><em class="text-[color:var(--color-sun)]">di sentirlo</em>`, es: `Tres formas<br/><em class="text-[color:var(--color-sun)]">de sentirlo</em>` } as T,
  items: [
    { icon: '🏞️', num: '01', title: { zh: `纳韦尔瓦皮湖全景`, en: `The Nahuel Huapi panorama`, it: `Panoramica del Nahuel Huapi`, es: `Panorámica del Nahuel Huapi` } as T, desc: { zh: `俯瞰这片由冰川雕琢而成的深邃湖泊，水面呈现不可思议的湛蓝，对岸的劳劳半岛与特罗纳多峰勾勒出经典的巴里洛切天际线。`, en: `Overlook the deep lake carved by glaciers, its water an unbelievable blue, with the Llao Llao peninsula and Cerro Tronador drawing the classic Bariloche skyline across the water.`, it: `Ammira il lago profondo scolpito dai ghiacciai, di un blu incredibile, con la penisola di Llao Llao e il Cerro Tronador che disegnano il classico profilo di Bariloche.`, es: `Contempla el lago profundo esculpido por los glaciares, de un azul increíble, con la península de Llao Llao y el Cerro Tronador dibujando el clásico perfil de Bariloche al otro lado.` } as T, img: '/gallery/punto-panoramico-circuito-chico-1.jpg' },
    { icon: '🏔️', num: '02', title: { zh: `劳劳半岛与特罗纳多峰`, en: `Llao Llao & Cerro Tronador`, it: `Llao Llao e Cerro Tronador`, es: `Llao Llao y Cerro Tronador` } as T, desc: { zh: `远眺建在半山腰的标志性历史建筑劳劳酒店（Llao Llao），以及它背后终年积雪、海拔 3,554 米的特罗纳多峰（Cerro Tronador）。`, en: `Gaze toward the landmark historic Llao Llao hotel set halfway up the hill, and the snow-capped Cerro Tronador (3,554 m) rising behind it.`, it: `Guarda l'iconico hotel di Llao Llao a mezza costa e, dietro, il Cerro Tronador (3.554 m), coperto di neve tutto l'anno.`, es: `Mira el emblemático hotel de Llao Llao a media ladera y, detrás, el Cerro Tronador (3.554 m), cubierto de nieve todo el año.` } as T, img: '/gallery/punto-panoramico-circuito-chico-2.jpg' },
    { icon: '🌲', num: '03', title: { zh: `风与森林的交响`, en: `Wind & the forest`, it: `Il vento e il bosco`, es: `El viento y el bosque` } as T, desc: { zh: `感受安第斯山脉强劲的西风，欣赏漫山遍野的常绿南美柏（Coihue）与秋季变红的落叶榉（Lenga），风过林梢的声音本身就是风景。`, en: `Feel the strong Andean westerlies and watch the hillsides of evergreen Coihue and the deciduous Lenga that turns red in autumn — the sound of wind through the trees is scenery in itself.`, it: `Senti il forte vento occidentale andino e osserva i versanti di coihue sempreverde e la lenga caduca che in autunno diventa rossa — il suono del vento nel bosco è già paesaggio.`, es: `Siente el fuerte viento oeste andino y observa las laderas de coihue siempreverde y la lenga caduca que se pone roja en otoño — el sonido del viento en el bosque es un paisaje en sí mismo.` } as T, img: '/gallery/punto-panoramico-circuito-chico-3.jpg' },
  ],
};

// ── Practical Info ──
export const practical = {
  sectionNum: { zh: `实用游览指南`, en: `Practical Guide`, it: `Guida pratica`, es: `Guía práctica` } as T,
  heading: { zh: `出发前<em class="text-[color:var(--color-emerald)]">必读</em>`, en: `Read this<br/><em class="text-[color:var(--color-emerald)]"> before you go</em>.`, it: `Leggi questo<br/><em class="text-[color:var(--color-emerald)]">prima di partire</em>.`, es: `Lee esto<br/><em class="text-[color:var(--color-emerald)]"> antes de ir</em>.` } as T,
  cards: [
    { icon: '🕒', label: { zh: `开放时间`, en: `Hours`, it: `Orari`, es: `Horario` } as T, value: '24 h', desc: { zh: `全天候开放的公共观景台，无人值守、无门票。日间与黄昏风景最佳；夜间无照明、气温低、风大，不建议逗留。`, en: `An always-open public viewpoint — unattended and free. Daylight and dusk give the best views; at night there is no lighting, it is cold and windy, so lingering is not advised.`, it: `Belvedere pubblico sempre aperto — senza personale né biglietto. Giorno e tramonto danno le migliori viste; di notte non c'è luce, fa freddo e vento: meglio non trattenersi.`, es: `Un mirador público de acceso permanente, sin personal ni entrada. El día y el atardecer dan las mejores vistas; de noche no hay iluminación, hace frío y viento, por lo que no se recomienda demorarse.` } as T },
    { icon: '🎟️', label: { zh: `门票与费用`, en: `Ticket & cost`, it: `Ingresso e costo`, es: `Entrada y costo` } as T, value: { zh: `免费`, en: `Free`, it: `Accesso libero`, es: `Acceso libre` } as T, desc: { zh: `完全免费的公共观景台，无需购票、无需向导，随时可停。请把它当作大家共同的风景来珍惜。`, en: `A completely free public viewpoint — no ticket, no guide required, stop anytime. Please treat it as a landscape we all share.`, it: `Belvedere pubblico del tutto gratuito — nessun biglietto, nessuna guida, fermati quando vuoi. Trattalo come un paesaggio di tutti.`, es: `Un mirador público totalmente gratuito: no requiere entrada ni guía, puede parar cuando quiera. Por favor, trátelo como un paisaje de todos.` } as T },
    { icon: '⏱️', label: { zh: `游览时长`, en: `Duration`, it: `Durata`, es: `Duración` } as T, value: '20–40 min', desc: { zh: `单纯停留拍照约 20–40 分钟；若连同整段小环线（含劳劳、科洛尼亚苏伊萨等）自驾，可轻松安排半日。`, en: `The stop itself is ~20–40 min for photos; pair it with the whole Circuito Chico (Llao Llao, Colonia Suiza and more) by car and you have an easy half-day.`, it: `La sosta è di ~20–40 min per le foto; unita a tutto il Circuito Chico (Llao Llao, Colonia Suiza e altro) in auto, diventa mezza giornata.`, es: `La parada en sí son unos 20–40 min para fotos; sumándola a todo el Circuito Chico (Llao Llao, Colonia Suiza y más) en auto, completa una mañana o tarde.` } as T },
    { icon: '', label: { zh: `到访须知`, en: `Visit notes`, it: `Note di visita`, es: `Notas de visita` } as T, value: '', desc: '', tips: [{ zh: `安第斯西风强劲，观景台无遮挡，请做好<strong>保暖与防风</strong>`, en: `The Andean westerlies are strong and the terrace is exposed — <strong>dress warm and wind-proof</strong>`, it: `Il vento occidentale andino è forte e la terrazza è esposta: <strong>vestiti caldo e anti-vento</strong>`, es: `El viento oeste andino es fuerte y la terraza está expuesta: <strong>abríguese y protéjase del viento</strong>` } as T, { zh: `周边<strong>无任何设施</strong>（无厕所、无饮水、无小卖部），请自备饮水与食物`, en: `There are <strong>no facilities nearby</strong> (no toilet, water or kiosk) — bring your own`, it: `Non ci sono <strong>servizi vicino</strong> (né bagno, né acqua, né chiosco): porta i tuoi`, es: `No hay <strong>servicios cercanos</strong> (ni baño, ni agua, ni kiosco): traiga lo suyo` } as T, { zh: `台地边缘<strong>无护栏</strong>，请与崖边保持距离，看好儿童`, en: `The terrace edge has <strong>no railing</strong> — keep clear of the drop and watch children`, it: `Il bordo della terrazza <strong>non ha ringhiera</strong>: resta lontano dal vuoto e sorveglia i bambini`, es: `El borde de la terraza <strong>no tiene baranda</strong>: manténgase lejos del vacío y vigile a los niños` } as T, { zh: `<strong>无垃圾桶</strong>，请带走所有垃圾，践行“无痕山林”`, en: `<strong>No bins</strong> — carry out all litter and practise Leave No Trace`, it: `<strong>Non ci sono cestini</strong>: porta via i rifiuti e pratica Non Lasciare Traccia`, es: `<strong>No hay tachos</strong>: lleve su basura y practique No Dejar Rastro` } as T, { zh: `路边停车请停在<strong>安全处</strong>，勿阻碍小环线交通`, en: `Park only in a <strong>safe spot</strong> by the road and never block Circuito Chico traffic`, it: `Parcheggia solo in un <strong>posto sicuro</strong> e non bloccare il traffico del Circuito Chico`, es: `Estacione en un <strong>lugar seguro</strong> junto a la ruta y no bloquee el tránsito del Circuito Chico` } as T] },
  ],
};

// ── Transport ──
export const transport = {
  sectionNum: { zh: `交通指南`, en: `Transport`, it: `Trasporti`, es: `Transporte` } as T,
  heading: { zh: `三种方式<br/><em class="text-[color:var(--color-emerald)]">到达观景台</em>`, en: `Three ways<br/><em class="text-[color:var(--color-emerald)]">to arrive</em>`, it: `Tre modi<br/><em class="text-[color:var(--color-emerald)]">di arrivare</em>`, es: `Tres formas<br/><em class="text-[color:var(--color-emerald)]">de llegar</em>` } as T,
  subtitle: { zh: `Punto Panorámico 位于小环线（Circuito Chico / RP77）旁，距巴里洛切市中心约 12 公里。路况极好，全线为铺装柏油路，是巴里洛切最经典的自驾与公路自行车路线。`, en: `Punto Panorámico sits beside the Circuito Chico (RP77), about 12 km from downtown Bariloche. The road is excellent — fully paved — and is Bariloche's classic self-drive and road-cycling route.`, it: `Il Punto Panorámico è accanto al Circuito Chico (RP77), a circa 12 km dal centro di Bariloche. La strada è ottima — tutta asfaltata — ed è il classico percorso in auto e in bici da corsa.`, es: `El Punto Panorámico está junto al Circuito Chico (RP77), a unos 12 km del centro de Bariloche. El camino es excelente, totalmente pavimentado, y es la ruta clásica en auto y en bicicleta de ruta de Bariloche.` } as T,
  items: [
    { icon: '🚗', title: { zh: `自驾 / 摩托车`, en: `By car or motorbike`, it: `In auto o moto`, es: `En auto o moto` } as T, meta: '~12 km · 15 min', details: [{ icon: '🛣️', text: { zh: `沿小环线 RP77 向西南行驶约 12 公里，观景台在山路右侧一处拐弯旁，设有路边停车带。全程铺装柏油，轿车亦可轻松到达。`, en: `Drive ~12 km southwest along the RP77 Circuito Chico; the viewpoint is by a bend on the right, with a roadside pull-off. Fully paved — an ordinary car manages it easily.`, it: `Guida ~12 km a sud-ovest lungo il Circuito Chico (RP77); il belvedere è accanto a una curva a destra, con uno spazio di sosta. Tutto asfaltato: un'auto normale arriva facilmente.`, es: `Conduzca unos 12 km al suroeste por el Circuito Chico (RP77); el mirador queda junto a una curva a la derecha, con un espacio de estacionamiento junto a la ruta. Totalmente pavimentado: un auto común llega sin problema.` } as T }, { icon: '🅿️', text: { zh: `建议上午或黄昏前往以避开午后旅行团；停车请靠边，切勿停在弯道视线盲区。`, en: `Mornings or dusk avoid the afternoon tour groups; park well to the side, never in a blind corner.`, it: `Vai al mattino o al tramonto per evitare i gruppi del pomeriggio; parcheggia bene a lato, mai in un punto cieco.`, es: `Vaya por la mañana o al atardecer para evitar las excursiones de la tarde; estacione al costado, nunca en una curva ciega.` } as T }] },
    { icon: '🚌', title: { zh: `公共交通 · Línea 20`, en: `Public bus · Línea 20`, it: `Trasporto pubblico · Línea 20`, es: `Transporte público · Línea 20` } as T, meta: '每 30–60 分钟一班', details: [{ icon: '🎫', text: { zh: `从巴里洛切市中心乘坐著名的 Línea 20 公交车（开往 Llao Llao / 半岛方向），在 Punto Panorámico 附近站点下车后步行少许即到。票价便宜，对无车背包客非常友好。`, en: `From downtown Bariloche take the famous Línea 20 bus (toward Llao Llao / the peninsula); get off near the Punto Panorámico stop and walk a short way. Cheap and very friendly to car-free travellers.`, it: `Dal centro di Bariloche prendi il famoso autobus Línea 20 (verso Llao Llao / la penisola); scendi vicino alla fermata del Punto Panorámico e cammina un poco. Economico e ottimo per chi viaggia senza auto.`, es: `Desde el centro de Bariloche tome el famoso colectivo Línea 20 (hacia Llao Llao / la península); baje en la parada cercana al Punto Panorámico y camine un poco. Económico y muy amigable para quienes no tienen auto.` } as T }, { icon: '🗺️', text: { zh: `车上请提前告知司机在观景台附近停靠；返程留意末班车时间，避免被困在路边。`, en: `Tell the driver you want the viewpoint stop; check the last return bus so you are not stranded roadside.`, it: `Avvisa l'autista che scendi al belvedere; controlla l'orario dell'ultimo autobus per non rimanere a piedi.`, es: `Aviso al chofer que baja en el mirador; revise el horario del último colectivo para no quedar varado.` } as T }] },
    { icon: '🚲', title: { zh: `骑行`, en: `By bicycle`, it: `In bicicletta`, es: `En bicicleta` } as T, meta: 'Ruta pavimentada · viento', details: [{ icon: '', text: { zh: `小环线是巴里洛切最经典的公路自行车路线，铺装良好、起伏适中；但安第斯西风常形成强逆风，建议预留体力并穿戴防风装备。`, en: `The Circuito Chico is Bariloche's classic road-cycling loop — well paved with gentle rollers; but the Andean westerlies often mean a strong headwind, so save energy and wear wind gear.`, it: `Il Circuito Chico è il classico giro in bici da corsa di Bariloche: ben asfaltato e con lievi ondulazioni; ma il vento occidentale andino è spesso un forte contrario, quindi risparmia energia e indossa abbigliamento anti-vento.`, es: `El Circuito Chico es el clásico recorrido en bicicleta de ruta de Bariloche: bien pavimentado y con lomadas suaves; pero el viento oeste andino suele ser un fuerte viento de frente, así que guarde energía y use ropa cortaviento.` } as T }] },
  ],
};

// ── Climate & Light ──
export const climate = {
  sectionNum: { zh: `气候与光影`, en: `Climate & Light`, it: `Clima e luce`, es: `Clima y Luz` } as T,
  heading: { zh: `此刻，安第斯的<br/><em class="text-[color:var(--color-emerald)]">风与光</em>`, en: `Today's live rhythm<br/><em class="text-[color:var(--color-emerald)]"> of wind & light</em>`, it: `Il ritmo in diretta<br/><em class="text-[color:var(--color-emerald)]">di vento e luce</em>`, es: `El ritmo en vivo<br/><em class="text-[color:var(--color-emerald)]"> del viento y la luz</em>` } as T,
  subtitle: { zh: `巴里洛切以“多变”与“强风”著称。以下数据由公开 API（Open-Meteo）实时获取，供您规划行程与拍摄。`, en: `Bariloche is famous for changeable weather and strong wind. Data below is fetched live from the public Open-Meteo API to help you plan and shoot.`, it: `Bariloche è famosa per clima variabile e vento forte. I dati sotto arrivano in tempo reale dall'API pubblica Open-Meteo per aiutarti a pianificare e fotografare.`, es: `Bariloche es famosa por un clima cambiante y viento fuerte. Los datos se obtienen en vivo de la API pública de Open-Meteo para ayudarle a planificar y fotografiar.` } as T,
  windLabel: { zh: `当前风速`, en: `Current wind`, it: `Vento attuale`, es: `Viento actual` } as T,
  directionLabel: { zh: `风向`, en: `Wind direction`, it: `Direzione del vento`, es: `Dirección del viento` } as T,
  gustLabel: { zh: `阵风`, en: `Gusts`, it: `Raffiche`, es: `Ráfagas` } as T,
  sunsetLabel: { zh: `今日日落`, en: `Today's sunset`, it: `Tramonto oggi`, es: `Puesta de sol hoy` } as T,
  goldenHourLabel: { zh: `黄金时刻`, en: `Golden Hour`, it: `Ora dorata`, es: `Hora Dorada` } as T,
  goldenHourDesc: { zh: `日落前约 60 分钟，安第斯雪峰被夕阳染成金红，是摄影的黄金窗口。`, en: `About 60 minutes before sunset the Andean snow peaks turn gold and red — the golden window for photography.`, it: `Circa 60 minuti prima del tramonto, le cime andine si tingono d'oro e rosso — la finestra dorata per la fotografia.`, es: `Unos 60 minutos antes de la puesta de sol, las cumbres andinas se tiñen de oro y rojo: la ventana dorada para la fotografía.` } as T,
  timelineLabel: { zh: `光线时间轴`, en: `Light timeline`, it: `Linea temporale della luce`, es: `Línea de tiempo de la luz` } as T,
  timelineDesc: { zh: `拖动时间，直观感受“黄金时刻”为何在日落前后最盛。此为示意曲线（以日照角度近似），请以现场观感与官方数据为准。`, en: `Drag the time to feel why the Golden Hour peaks around sunset. This is an illustrative curve (sun-angle approximation), not a measurement.`, it: `Trascina l'ora per percepire perché l'Ora dorata raggiunge il picco vicino al tramonto. Curva illustrativa (approssimazione dell'angolo solare), non una misurazione.`, es: `Arrastre la hora para sentir por qué la Hora Dorada peak cerca del atardecer. Es una curva ilustrativa (aprox. del ángulo solar), no una medición.` } as T,
  timelineTime: { zh: `时间`, en: `Time`, it: `Ora`, es: `Hora` } as T,
  timelineGlow: { zh: `金色强度`, en: `Golden glow`, it: `Intensità dorata`, es: `Intensidad dorada` } as T,
  timelineBest: { zh: `推荐窗口：日落前 60 分钟`, en: `Best window: 60 min before sunset`, it: `Migliore finestra: 60 min prima del tramonto`, es: `Mejor ventana: 60 min antes del atardecer` } as T,
  loading: { zh: `正在获取实时数据…`, en: `Loading live data…`, it: `Caricamento dati in tempo reale…`, es: `Cargando datos en vivo…` } as T,
  error: { zh: `实时数据暂时不可用，请参考上方游览指南。`, en: `Live data unavailable — see the guide above.`, it: `Dati in tempo reale non disponibili — vedi la guida sopra.`, es: `Datos en vivo no disponibles — consulte la guía superior.` } as T,
  source: { zh: `数据来源：Open-Meteo`, en: `Source: Open-Meteo`, it: `Fonte: Open-Meteo`, es: `Fuente: Open-Meteo` } as T,
};

// ── Gallery ──
export const gallery = {
  sectionNum: { zh: `视觉图集`, en: `Gallery`, it: `Galleria`, es: `Galería` } as T,
  heading: { zh: `光、湖、峰、林`, en: `Light. Lake. Peak. Forest.`, it: `Luce. Lago. Cima. Bosco.`, es: `Luz. Lago. Cumbre. Bosque.` } as T,
  viewMorePhotos: { zh: `在 Google 地图上查看更多照片`, en: `View more photos on Google Maps`, it: `Vedi più foto su Google Maps`, es: `Ver más fotos en Google Maps` } as T,
};

// ── Reviews ──
export const reviews = {
  sectionNum: { zh: `游客评价`, en: `Reviews`, it: `Recensioni`, es: `Opiniones` } as T,
  heading: { zh: `4.6<span class="text-[color:var(--color-emerald)]">/5</span> · 来自 2,000 多位旅行者`, en: `4.6<span class="text-[color:var(--color-emerald)]">/5</span> · from 2,000+ travelers`, it: `4.6<span class="text-[color:var(--color-emerald)]">/5</span> · di oltre 2.000 viaggiatori`, es: `4.6<span class="text-[color:var(--color-emerald)]">/5</span> · de más de 2.000 viajeros` } as T,
  viewMoreReviews: { zh: `在 Google 地图上查看更多评价`, en: `View more reviews on Google Maps`, it: `Vedi più recensioni su Google Maps`, es: `Ver más opiniones en Google Maps` } as T,
  items: [
    { stars: '★★★★★', date: '2026-05', title: { zh: `"免费又震撼的全景"`, en: `"Free and stunning"`, it: `"Gratis e mozzafiato"`, es: `"Gratis y espectacular"` } as T, desc: { zh: `没想到一处路边观景台能这么美。免费、随时可停，湖蓝得像假的。黄昏时特罗纳多峰被染成金红，值回整个车程。`, en: `Didn't expect a roadside pull-off to be this beautiful. Free, anytime, and the lake is unbelievably blue. At dusk Tronador turns gold-red — worth the whole drive.`, it: `Non mi aspettavo che una sosta lungo la strada fosse così bella. Gratis, a qualsiasi ora, e il lago è blu incredibile. Al tramonto il Tronador si tinge d'oro e rosso: vale tutto il viaggio.`, es: `No esperaba que un mirador junto a la ruta fuera tan hermoso. Gratis, a cualquier hora, y el lago es increíblemente azul. Al atardecer el Tronador se pone dorado-rojo: vale todo el viaje.` } as T, author: 'Lucía M. · 🇦🇷' },
    { stars: '★★★★★', date: '2026-03', title: { zh: `"骑行小环线的高光"`, en: `"Highlight of the ride"`, it: `"Il momento clou in bici"`, es: `"Lo mejor del paseo en bici"` } as T, desc: { zh: `小环线骑行必停点。铺装路很好骑，但回程西风大到怀疑人生，记得留力气。停在台地看湖，瞬间回血。`, en: `A must-stop on the Circuito Chico ride. The pavement is great, but the westerly headwind on the way back is no joke — save energy. The lake view revives you instantly.`, it: `Tappa imperdibile sul giro del Circuito Chico. L'asfalto è ottimo, ma il vento contrario di ritorno non scherza — risparmia energia. La vista del lago ti rinvigorisce subito.`, es: `Parada obligada en el Circuito Chico en bici. El pavimento es excelente, pero el viento del oeste de vuelta es serio: guarde energía. La vista del lago lo reanima al instante.` } as T, author: 'Tomás R. · 🚴' },
    { stars: '★★★★★', date: '2025-11', title: { zh: `"带爸妈的自驾半日"`, en: `"Easy half-day with parents"`, it: `"Mezza giornata con i miei"`, es: `"Media tarde fácil con mis viejos"` } as T, desc: { zh: `从市区开车 15 分钟就到，全程柏油，爸妈坐轿车也毫无压力。配上 Llao Llao 一起玩，半日正好。`, en: `15 minutes from town, all paved — my parents in a sedan had zero trouble. Pair it with Llao Llao and a half-day is perfect.`, it: `15 minuti dal centro, tutto asfaltato — i miei genitori in auto normale non hanno avuto problemi. Abbinalo a Llao Llao e mezza giornata è perfetta.`, es: `A 15 minutos del centro, todo pavimentado: mis viejos en un auto común no tuvieron problema. Sumando Llao Llao, media tarde perfecta.` } as T, author: 'Wang Y. · 🇨🇳' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2025-09', title: { zh: `"风是真的大"`, en: `"The wind is real"`, it: `"Il vento è reale"`, es: `"El viento es de verdad"` } as T, desc: { zh: `风景满分，但台地完全无遮挡，那天风吹得手机都拿不稳。建议戴帽子、穿防风外套，拍照用双手扶稳。`, en: `Views are perfect, but the terrace is fully exposed — the day I went the wind shook my phone. Wear a hat and a wind shell; hold steady with both hands.`, it: `Le viste sono perfette, ma la terrazza è totalmente esposta: il giorno in cui sono andato il vento muoveva il telefono. Cappello e giacca a vento; reggi con entrambe le mani.`, es: `Las vistas son perfectas, pero la terraza está totalmente expuesta: el día que fui el viento movía el celular. Use gorro y cortaviento; sostenga con ambas manos.` } as T, author: 'James W. · 🇺🇸' },
    { stars: '★★★★★', date: '2025-08', title: { zh: `"背包客友好"`, en: `"Backpacker friendly"`, it: `"Ottimo per zaino in spalla"`, es: `"Amigable para mochileros"` } as T, desc: { zh: `没车也能来！坐 Línea 20 到附近下车走两步就到，车费便宜。司机人很好，提前说一声就行。`, en: `Came without a car! Took Línea 20, got off nearby and walked a bit — cheap fare. The driver was kind; just tell him in advance.`, it: `Senza auto ci sono riuscito! Ho preso la Línea 20, sceso vicino e camminato un poco — economico. L'autista è stato gentile; basta avvisarlo in anticipo.`, es: `¡Vine sin auto! Tomé la Línea 20, bajé cerca y caminé un poco: económico. El chofer fue amable; avísele con anticipación.` } as T, author: 'Sofía P. · 🎒' },
    { stars: '★★★★★', date: '2025-06', title: { zh: `"黄昏的金红时刻"`, en: `"The golden dusk"`, it: `"Il tramonto dorato"`, es: `"El dorado del atardecer"` } as T, desc: { zh: `专门赶在日落前到，整片雪峰被染成金红，湖面也泛起暖光。是我这趟巴里洛切最难忘的十分钟。`, en: `Arrived just before sunset on purpose — the whole snow range turned gold-red and the lake glowed warm. The most unforgettable ten minutes of the trip.`, it: `Arrivato apposta poco prima del tramonto — tutta la catena innevata si è tinta d'oro e rosso e il lago brillava caldo. I dieci minuti più indimenticabili del viaggio.`, es: `Llegué justo antes de la puesta a propósito: toda la cordillera se puso dorada-roja y el lago brilló cálido. Los 10 minutos más inolvidables del viaje.` } as T, author: 'Marina C. · 📷' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2025-04', title: { zh: `"停车别堵路"`, en: `"Don't block the road"`, it: `"Non bloccare la strada"`, es: `"No bloquee la ruta"` } as T, desc: { zh: `观景台在弯道旁，周末车多时停车带会满。请把车停靠边，别停在视线盲区，安全为上。`, en: `The viewpoint is by a bend; on busy weekends the pull-off fills up. Park to the side, never in a blind spot — safety first.`, it: `Il belvedere è accanto a una curva; nei weekend affollati lo spazio si riempie. Parcheggia a lato, mai in punto cieco: prima la sicurezza.`, es: `El mirador queda junto a una curva; los fines de semana el estacionamiento se llena. Estacione al costado, nunca en un punto ciego: primero la seguridad.` } as T, author: 'Nuno P. · 🇧🇷' },
    { stars: '★★★★★', date: '2025-02', title: { zh: `"没有商业味"`, en: `"No commercial feel"`, it: `"Senza aria commerciale"`, es: `"Sin olor a negocio"` } as T, desc: { zh: `没有售票亭、没有小卖部，只有风和湖。这种“纯公共”的观景台反而最让人放松，请一起保持它的干净。`, en: `No booth, no kiosk — just wind and lake. This "purely public" viewpoint is the most relaxing exactly because of that. Let's keep it clean together.`, it: `Nessun chiosco, nessun bigliettaio: solo vento e lago. Questo belvedere "puramente pubblico" rilassa proprio per questo. Custodiamolo pulito insieme.`, es: `Sin boletería ni kiosco: solo viento y lago. Este mirador "público puro" relaja justo por eso. Cuidémoslo limpio entre todos.` } as T, author: 'Aya K. · 🌿' },
  ],
};

// ── Surrounding ──
export const surrounding = {
  sectionNum: { zh: `周边联动`, en: `Nearby`, it: `Dintorni`, es: `Alrededores` } as T,
  heading: { zh: `还可以<em class="text-[color:var(--color-emerald)]">连着玩</em>`, en: `Extend the trip<br/><em class="text-[color:var(--color-emerald)]"> further</em>`, it: `Estendi il viaggio<br/><em class="text-[color:var(--color-emerald)]">ancora oltre</em>`, es: `Extienda el viaje<br/><em class="text-[color:var(--color-emerald)]"> aún más</em>` } as T,
  items: [
    { img: '/gallery/punto-panoramico-circuito-chico-10.jpg', title: '🏨 Llao Llao & 劳劳酒店', desc: { zh: `小环线上的地标。建在半岛半山腰的历史酒店与高尔夫球场，前方正对特罗纳多峰，是巴里洛切最经典的明信片机位。`, en: `The landmark of the Circuito Chico. The historic hillside hotel and golf course face Cerro Tronador — Bariloche's most classic postcard frame.`, it: `Il punto di riferimento del Circuito Chico. L'iconico hotel storico a mezza collina e il campo da golf di fronte al Cerro Tronador: la cornice cartolina più classica di Bariloche.`, es: `El hito del Circuito Chico. El hotel histórico a media ladera y el campo de golf frente al Cerro Tronador: el encuadre postal más clásico de Bariloche.` } as T },
    { img: '/gallery/punto-panoramico-circuito-chico-11.jpg', title: '🎿 Cerro Catedral', desc: { zh: `南美重要的滑雪胜地，冬季雪道闻名；夏季则化身徒步与缆车观景的热门地，可俯瞰纳韦尔瓦皮湖另一面。`, en: `A major South American ski resort, famed for its winter slopes; in summer it becomes a hub for hiking and cable-car views over another face of Nahuel Huapi.`, it: `Importante stazione sciistica sudamericana, famosa per le piste invernali; in estate è un polo per escursioni e viste in funivia su un altro volto del Nahuel Huapi.`, es: `Importante centro de esquí sudamericano, famoso por sus pistas de invierno; en verano es un polo de trekking y vistas en teleférico sobre otra cara del Nahuel Huapi.` } as T },
    { img: '/gallery/punto-panoramico-circuito-chico-12.jpg', title: '🥧 Colonia Suiza', desc: { zh: `小环线旁的瑞士殖民小镇，以奶油蛋糕（kuchen）与炭火烤肉（asado）闻名，是自驾途中的美味补给站。`, en: `A Swiss-colony town beside the Circuito Chico, known for cream cakes (kuchen) and charcoal asado — a tasty refuel on the drive.`, it: `Paese di colonia svizzera accanto al Circuito Chico, noto per le torte (kuchen) e la griglia (asado) — un gustoso rifornimento durante il giro.`, es: `Pueblo de colonia suiza junto al Circuito Chico, famoso por sus tortas (kuchen) y el asado a la parrilla: una recarga sabrosa en el recorrido.` } as T },
    { img: '/gallery/punto-panoramico-circuito-chico-13.jpg', title: '⛵ Puerto Pañuelo & 维多利亚岛', desc: { zh: `小环线尽头的乘船港口，可搭船前往维多利亚岛（Isla Victoria）与琼希洛湖（Lago Espejo），深入森林与湖峡。`, en: `The boat port at the end of the Circuito Chico; ferries run to Isla Victoria and Lago Espejo, deep into forest and lake arms.`, it: `Il porto delle barche alla fine del Circuito Chico; da lì partono traghetti per l'Isola Victoria e il Lago Espejo, addentrandosi nel bosco e nei bracci del lago.`, es: `El puerto de embarcaciones al final del Circuito Chico; desde ahí salen barcos a la Isla Victoria y el Lago Espejo, adentrándose en el bosque y los brazos del lago.` } as T },
    { img: '/gallery/punto-panoramico-circuito-chico-14.jpg', title: '🌊 Bahía López', desc: { zh: `湖湾与短徒步至观景点，湖水极蓝、倒影极佳，是继 Punto Panorámico 之后另一处值得停的小环线明信片点。`, en: `A bay with a short hike to a viewpoint; the water is intensely blue with superb reflections — another postcard stop after Punto Panorámico.`, it: `Una baia con una breve passeggiata a un belvedere; l'acqua è intensamente blu con riflessi eccellenti — un'altra tappa cartolina dopo il Punto Panorámico.`, es: `Una bahía con una corta caminata a un mirador; el agua es intensamente azul y se refleja perfecto: otra parada postal después del Punto Panorámico.` } as T },
  ],
};
