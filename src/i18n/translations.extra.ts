type T = { zh: string; en: string; it: string; es: string };

// ── Encyclopedia ──
export const encyclopedia = {
  sectionNum: { zh: `深度百科`, en: `Encyclopedia`, it: `Enciclopedia`, es: `Enciclopedia` } as T,
  heading: { zh: `冰川、风与<em class="text-[color:var(--color-emerald)]">一座公园的来由</em>`, en: `Ice, wind &amp;<br/><em class="text-[color:var(--color-emerald)]"> a park's making</em>`, it: `Ghiaccio, vento e<br/><em class="text-[color:var(--color-emerald)]"> l'origine di un parco</em>`, es: `Hielo, viento y<br/><em class="text-[color:var(--color-emerald)]"> el origen de un parque</em>` } as T,
  subtitle: {
    zh: `从被冰川切削出的湖湾，到终年不息的安第斯西风，再到马普切人对水域的敬畏与 20 世纪初国家公园先驱的规划——这片台地背后，藏着巴塔哥尼亚几段关键的自然与人文记忆。`,
    en: `From the lake arms carved by glaciers, to the year-round Andean westerlies, to Mapuche reverence for these waters and the early-20th-century planners of the National Park — behind this terrace lie key natural and human memories of Patagonia.`,
    it: `Dalle insenature del lago scolpite dai ghiacciai, ai venti andini che non cessano mai, al rispetto dei mapuche per queste acque e ai pionieri dei parchi nazionali di inizio '900 — dietro questa terrazza si nascondono ricordi naturali e umani chiave della Patagonia.`,
    es: `Desde los brazos del lago esculpidos por glaciares, hasta el viento oeste andino de todo el año, la reverencia mapuche por estas aguas y los planificadores de Parques Nacionales a principios del siglo XX — detrás de esta terraza están las memorias naturales y humanas de la Patagonia.`,
  } as T,
  items: [
    {
      icon: '🏔️',
      title: { zh: `冰川如何雕出纳韦尔瓦皮湖`, en: `How glaciers carved Nahuel Huapi`, it: `Come i ghiacciai hanno scolpito Nahuel Huapi`, es: `Cómo los glaciares esculpieron Nahuel Huapi` } as T,
      body: {
        zh: `<p>数万年前，巴塔哥尼亚曾被巨大冰盖覆盖。冰川像砂纸一样切削山谷，刨出 U 形谷与今日湖岸一道道深入陆地的"湖峡"（brazos）。冰退之后，融水灌入这些盆地，形成了深邃的纳韦尔瓦皮湖。</p><p><span class="science-only">严格说，纳韦尔瓦皮不是由单条河流冲积而成，而是冰蚀盆地（glacial overdeepening）积水的结果，因此湖水极深、岸线极其破碎，呈现出峡湾般的轮廓。</span></p>`,
        en: `<p>Tens of thousands of years ago, Patagonia lay under a vast ice sheet. Glaciers sandpapered the valleys into U-shapes and cut the "brazos" — fjord-like arms reaching deep into the land. When the ice retreated, meltwater filled these basins and formed the deep Nahuel Huapi Lake.</p><p><span class="science-only">Strictly, Nahuel Huapi was not built by a single river but by water pooling in glacially overdeepened basins, which is why it is extremely deep with a fractured, fjord-like shoreline.</span></p>`,
        it: `<p>Decine di migliaia di anni fa la Patagonia era coperta da una vasta calotta glaciale. I ghiacciai hanno levigato le valli a forma di U e scavato i "brazos", bracci a forma di fiordo che penetrano la terra. Quando il ghiaccio si è ritirato, l'acqua di disgelo ha riempito quelle conche formando il profondo lago Nahuel Huapi.</p><p><span class="science-only">In senso stretto, il Nahuel Huapí non deriva da un solo fiume, ma dall'acqua accumulata in conche scavate dai ghiacciai: ecco perché è molto profondo e ha una costa frastagliata, quasi fiordiana.</span></p>`,
        es: `<p>Hace decenas de miles de años, la Patagonia estuvo cubierta por una vasta capa de hielo. Los glaciares lijaron los valles en forma de U y tallaron los "brazos", entradas fjordianas que penetran la tierra. Al retirarse el hielo, el deshielo llenó esas cuencas y formó el profundo lago Nahuel Huapi.</p><p><span class="science-only">Estrictamente, Nahuel Huapi no se formó por un solo río, sino por agua acumulada en cuencas sobreexcavadas por glaciares, por eso es muy profundo y tiene una costa fracturada, casi fjordiana.</span></p>`,
      } as T,
      img: '/gallery/punto-panoramico-circuito-chico-4.jpg',
    },
    {
      icon: '🌬️',
      title: { zh: `终年不息的安第斯西风`, en: `The Andean westerlies`, it: `I venti occidentali andini`, es: `El viento oeste andino` } as T,
      body: {
        zh: `<p>南半球中纬度盛行自西向东的"西风带"。当这股湿润气流撞上安第斯山脉，被迫抬升、冷却、成云致雨，造就了山脉西坡的丰沛森林；翻过山脊后下沉，又在东侧形成雨影与干爽的巴里洛切气候。</p><p>也正因如此，观景台上你感受到的强风，是整条山脉"呼吸"的一部分。<span class="science-only">偶尔当东风下沉（viento puelche），空气会变得异常干燥温暖，火灾风险也随之升高。</span></p>`,
        en: `<p>In the southern mid-latitudes, the prevailing "westerlies" blow from west to east. When this moist air hits the Andes it is forced up, cools, and rains out — feeding the lush forest on the western slopes; descending the far side it creates the drier, brighter climate of Bariloche in the rain shadow.</p><p>The strong wind you feel on the terrace is part of the whole mountain's "breathing". <span class="science-only">Occasionally an easterly downslope wind (viento puelche) brings unusually dry, warm air — and a higher fire risk.</span></p>`,
        it: `<p>Alle medie latitudini australi i "venti occidentali" dominanti soffiano da ovest a est. Quando questa aria umida incontra le Ande è costretta a salire, si raffredda e piove, alimentando la fitta foresta sui versanti occidentali; scendendo sull'altro versante crea il clima più secco e luminoso di Bariloche, in zona di sottovento.</p><p>Il vento forte che senti sulla terrazza fa parte del "respiro" di tutta la montagna. <span class="science-only">A volte un vento di discesa orientale (viento puelche) porta aria insolitamente secca e calda, con un rischio di incendio più alto.</span></p>`,
        es: `<p>En las latitudes medias del sur, los "vientos del oeste" soplan de oeste a este. Cuando esa humedad choca con los Andes, asciende, se enfría y llueve, alimentando el bosque frondoso de la vertiente occidental; al descender del otro lado crea el clima más seco y luminoso de Bariloche, a sotavento.</p><p>El viento fuerte que siente en la terraza es parte del "aliento" de toda la montaña. <span class="science-only">A veces un viento de descenso del este (viento puelche) trae aire inusualmente seco y cálido, y sube el riesgo de incendio.</span></p>`,
      } as T,
      img: '/gallery/punto-panoramico-circuito-chico-5.jpg',
    },
    {
      icon: '🪶',
      title: { zh: `马普切人眼中的圣水`, en: `The Mapuche and these waters`, it: `I mapuche e queste acque`, es: `Los mapuche y estas aguas` } as T,
      body: {
        zh: `<p>在西班牙语到来之前，马普切人（"大地之民"）便世代栖息于这片湖泊与森林之间。在他们的宇宙观里，湖泊、山脉与泉水并非资源，而是有灵的存在，值得敬畏与节制地使用。</p><p>"纳韦尔瓦皮"（Nahuel Huapí）一词源自马普切语，意为"猛虎之岛"。<span class="science-only">今天，马普切社群仍是巴塔哥尼亚北端重要的文化与生态守护者，许多地名都保留着这份语言的记忆。</span></p>`,
        en: `<p>Long before the Spanish arrived, the Mapuche ("people of the land") lived for generations among these lakes and forests. In their worldview, lakes, mountains and springs were not resources but living presences to be revered and used with restraint.</p><p>"Nahuel Huapí" comes from Mapudungun, meaning "island of the jaguar". <span class="science-only">Today Mapuche communities remain vital cultural and ecological stewards of northern Patagonia, and many place names keep this linguistic memory alive.</span></p>`,
        it: `<p>Molto prima dell'arrivo degli spagnoli, i mapuche ("gente della terra") vissero per generazioni tra questi laghi e boschi. Nella loro visione del mondo, laghi, montagne e sorgenti non erano risorse ma presenze vive da venerare e usare con parsimonia.</p><p>"Nahuel Huapí" deriva dal mapudungun e significa "isola del giaguaro". <span class="science-only">Oggi le comunità mapuche restano custodi culturali ed ecologici fondamentali del nord della Patagonia, e molti toponimi mantengono viva questa memoria linguistica.</span></p>`,
        es: `<p>Mucho antes de la llegada de los españoles, los mapuche ("gente de la tierra") vivieron generaciones entre estos lagos y bosques. En su cosmovisión, los lagos, las montañas y los manantiales no eran recursos sino presencias vivas que merecían respeto y uso mesurado.</p><p>"Nahuel Huapí" viene del mapudungun y significa "isla del yaguar". <span class="science-only">Hoy las comunidades mapuche siguen siendo custodios culturales y ecológicos del norte de la Patagonia, y muchos nombres de lugares conservan esa memoria lingüística.</span></p>`,
      } as T,
      img: '/gallery/punto-panoramico-circuito-chico-6.jpg',
    },
    {
      icon: '🏛️',
      title: { zh: `Ezequiel Bustillo 与"小环线"的诞生`, en: `Ezequiel Bustillo & the Circuito Chico`, it: `Ezequiel Bustillo e il Circuito Chico`, es: `Ezequiel Bustillo y el Circuito Chico` } as T,
      body: {
        zh: `<p>20 世纪初，阿根廷国家公园的先驱 Ezequiel Bustillo 担任国家公园管理局负责人，大力推动以纳韦尔瓦皮为中心的自然保育与旅游基础设施建设。正是在他的规划下，一条串联最佳观景点的环湖公路被开辟出来，这便是今天的"小环线"（Circuito Chico）。</p><p>同一时期，建筑师 Alejandro Bustillo 设计了建在劳劳半岛半山腰的劳劳酒店（Hotel Llao Llao），成为巴里洛切最具标志性的建筑之一。<span class="science-only">小环线的布局本身，就是"以风景作为公共遗产来经营"的早期范例。</span></p>`,
        en: `<p>In the early 20th century, Ezequiel Bustillo — a pioneer of Argentina's National Parks — led the park administration and pushed hard for conservation and tourism infrastructure around Nahuel Huapi. It was under his planning that a loop road linking the best viewpoints was opened: today's Circuito Chico.</p><p>Around the same time, architect Alejandro Bustillo designed the Llao Llao hotel on the peninsula's hillside, now one of Bariloche's most iconic buildings. <span class="science-only">The layout of the Circuito Chico itself is an early example of "managing scenery as public heritage".</span></p>`,
        it: `<p>All'inizio del XX secolo, Ezequiel Bustillo — pioniere dei Parchi Nazionali argentini — diresse l'amministrazione del parco e spinse con forza per la conservazione e le infrastrutture turistiche attorno al Nahuel Huapi. Sotto la sua pianificazione fu aperta una strada ad anello che unisce i migliori miradores: l'attuale Circuito Chico.</p><p>Nello stesso periodo, l'architetto Alejandro Bustillo progettò l'hotel Llao Llao sulla collina della penisola, oggi uno degli edifici più iconici di Bariloche. <span class="science-only">Il tracciato del Circuito Chico è di per sé un esempio precoce di "gestione del paesaggio come patrimonio pubblico".</span></p>`,
        es: `<p>A principios del siglo XX, Ezequiel Bustillo —pionero de los Parques Nacionales de Argentina— dirigió la administración del parque e impulsó con fuerza la conservación y la infraestructura turística en torno a Nahuel Huapi. Bajo su planificación se abrió un camino en anillo que une los mejores miradores: el actual Circuito Chico.</p><p>En la misma época, el arquitecto Alejandro Bustillo diseñó el hotel Llao Llao en la ladera de la península, hoy uno de los edificios más emblemáticos de Bariloche. <span class="science-only">El trazado del Circuito Chico es en sí un ejemplo temprano de "gestionar el paisaje como patrimonio público".</span></p>`,
      } as T,
      img: '/gallery/punto-panoramico-circuito-chico-7.jpg',
    },
    {
      icon: '❄️',
      title: { zh: `特罗纳多峰：巴塔哥尼亚的活冰川`, en: `Cerro Tronador: Patagonia's living ice`, it: `Cerro Tronador: il ghiaccio vivo`, es: `Cerro Tronador: el hielo vivo` } as T,
      body: {
        zh: `<p>海拔 3,554 米的特罗纳多峰（Cerro Tronador）坐落在阿根廷与智利边境，是巴里洛切附近最高的雪峰之一。其名"Tronador"意为"雷鸣者"，来自冰舌崩裂、坠入山谷时如雷的轰鸣。</p><p>峰体上悬挂着数条冰川（如 Castaño Overa），是少数从观景台肉眼可见的活冰川。<span class="science-only">在全球变暖背景下，这些冰川正明显退缩，也成为气候变化最直观的"天然标尺"。</span></p>`,
        en: `<p>Cerro Tronador (3,554 m), on the Argentina–Chile border, is among the highest snow peaks near Bariloche. Its name means "the Thunderer", from the cannon-like roar of ice tongues cracking and falling into the valley.</p><p>Several glaciers hang from its flanks (such as Castaño Overa) and are among the few living glaciers visible to the naked eye from the viewpoint. <span class="science-only">Under global warming these glaciers are clearly retreating, making them a vivid natural yardstick of climate change.</span></p>`,
        it: `<p>Il Cerro Tronador (3.554 m), al confine tra Argentina e Cile, è tra le cime innevate più alte vicino a Bariloche. Il suo nome significa "il tuonante", dal rombo simile a un cannone dei linguaggi di ghiaccio che si scheggiano e cadono nella valle.</p><p>Diversi ghiacciai pendono dai suoi fianchi (come il Castaño Overa) ed è uno dei pochi ghiacciai vivi visibili a occhio nudo dal mirador. <span class="science-only">Con il riscaldamento globale questi ghiacciai si ritirano chiaramente, diventando una vivida misura naturale del cambiamento climatico.</span></p>`,
        es: `<p>El Cerro Tronador (3.554 m), en la frontera Argentina-Chile, es una de las cumbres nevadas más altas cerca de Bariloche. Su nombre significa "el que truena", por el estruendo de las lenguas de hielo que se quiebran y caen al valle.</p><p>Varios glaciares cuelgan de sus laderas (como el Castaño Overa) y son de los pocos glaciares vivos visibles a simple vista desde el mirador. <span class="science-only">Con el calentamiento global, estos glaciares retroceden claramente, siendo una medida natural del cambio climático.</span></p>`,
      } as T,
      img: '/gallery/punto-panoramico-circuito-chico-8.jpg',
    },
    {
      icon: '🌲',
      title: { zh: `常绿的 Coihue 与香桃木 Arrayán`, en: `Evergreen Coihue & myrtle Arrayán`, it: `Il coihue sempreverde e l'arrayán`, es: `El coihue siempreverde y el arrayán` } as T,
      body: {
        zh: `<p>观景台四周属于"安第斯-巴塔哥尼亚森林"。常绿的山毛榉 Coihue（Nothofagus dombeyi）构成浓密林冠；而秋季叶片转为火红的落叶榉 Lenga，则是巴里洛切秋色的主角。</p><p>更特别的是香桃木 Arrayán（Luma apiculata）：它树干泛着橙红光泽，集中在附近的洛斯阿赖内斯国家保护区（Los Arrayanes）。<span class="science-only">这些树种对湿度与海拔极其敏感，是判断当地微气候的"活指标"。</span></p>`,
        en: `<p>The forest around the viewpoint is the "Andean-Patagonian forest". The evergreen southern beech Coihue (Nothofagus dombeyi) forms a dense canopy, while the deciduous Lenga, which turns flame-red in autumn, stars in Bariloche's fall colour.</p><p>Most special is the myrtle Arrayán (Luma apiculata): its trunk glows orange-red and it concentrates in the nearby Los Arrayanes National Park. <span class="science-only">These species are extremely sensitive to humidity and altitude, making them living indicators of the local microclimate.</span></p>`,
        it: `<p>Il bosco attorno al mirador è il "bosco andino-patagonico". Il faggio australe sempreverde coihue (Nothofagus dombeyi) forma una fitta chioma, mentre la lenga caduca, che in autunno diventa rossa fuoco, è la protagonista del colore autunnale di Bariloche.</p><p>Più speciale è il mirto arrayán (Luma apiculata): il suo tronco sfavilla di arancione-rosso e si concentra nel vicino Parco Nazionale Los Arrayanes. <span class="science-only">Queste specie sono estremamente sensibili a umidità e altitudine, diventando indicatori vivi del microclima locale.</span></p>`,
        es: `<p>El bosque en torno al mirador es el "bosque andino-patagónico". El coihue siempreverde (Nothofagus dombeyi) forma un dosel denso, mientras la lenga caduca, que se pone roja fuego en otoño, protagoniza el color otoñal de Bariloche.</p><p>Más especial aún es el arrayán (Luma apiculata): su tronco tiene reflejos naranja-rojizos y se concentra en el cercano Parque Nacional Los Arrayanes. <span class="science-only">Estas especies son muy sensibles a la humedad y la altura, por lo que son indicadores vivos del microclima local.</span></p>`,
      } as T,
      img: '/gallery/punto-panoramico-circuito-chico-9.jpg',
    },
  ],
};

// ── Ecology ──
export const ecology = {
  sectionNum: { zh: `生态名录`, en: `Ecology`, it: `Elenco ecologico`, es: `Ecología` } as T,
  heading: { zh: `山野间的<em class="text-[color:var(--color-emerald)]">生命脉动</em>`, en: `The pulse of life<br/><em class="text-[color:var(--color-emerald)]"> in the wild</em>`, it: `Il pulsare<br/><em class="text-[color:var(--color-emerald)]"> della vita selvatica</em>`, es: `El pulso de la vida<br/><em class="text-[color:var(--color-emerald)]"> en el monte</em>` } as T,
  intro: {
    zh: `巴里洛切虽是旅游名城，却坐落在安第斯-巴塔哥尼亚森林与纳韦尔瓦皮湖之间。从崖边的常绿 Coihue，到天空盘旋的安第斯神鹫，再到林线下濒危的马驼鹿（Huemul），这片风景是高海拔生命交织的网络。请放慢脚步，你与这些山民的相遇，往往只在一阵风之间。`,
    en: `Though a famous resort town, Bariloche sits between the Andean-Patagonian forest and Nahuel Huapi Lake. From the evergreen Coihue at the cliff edge to the Andean condor wheeling overhead and the endangered huemul below the treeline, this landscape is a web of high-altitude life. Slow down — your meeting with these mountain dwellers often lasts but a single gust of wind.`,
    it: `Pur essendo una famosa città turistica, Bariloche sorge tra il bosco andino-patagonico e il lago Nahuel Huapi. Dal coihue sempreverde sul bordo della scarpata al condor andino che volteggia in cielo e all'huemul minacciato sotto il limite del bosco, questo paesaggio è una rete di vita ad alta quota. Vai piano: l'incontro con questi abitanti della montagna dura spesso solo una folata di vento.`,
    es: `Aunque es una ciudad turística famosa, Bariloche se encuentra entre el bosque andino-patagónico y el lago Nahuel Huapi. Desde el coihue siempreverde en el borde del acantilado hasta el cóndor andino que gira en el cielo y el huemul amenazado bajo la línea de árboles, este paisaje es una red de vida de altura. Vaya despacio: su encuentro con estos habitantes del monte a menudo dura solo una ráfaga de viento.`,
  } as T,
  iucnVU: { zh: `易危 VU`, en: `Vulnerable VU`, it: `Vulnerabile VU`, es: `Vulnerable VU` } as T,
  iucnNT: { zh: `近危 NT`, en: `Near Threatened NT`, it: `Quasi minacciato NT`, es: `Casi Amenazado NT` } as T,
  iucnLC: { zh: `无危 LC`, en: `Least Concern LC`, it: `Rischio minimo LC`, es: `Preocupación Menor LC` } as T,
  iucnEN: { zh: `极危 EN`, en: `Endangered EN`, it: `In pericolo EN`, es: `En Peligro EN` } as T,
  secUmbrella: { zh: `旗舰与伞护物种`, en: `Flagship & Umbrella Species`, it: `Specie bandiera e ombrello`, es: `Especies bandera y paraguas` } as T,
  secCommensal: { zh: `常见可见物种`, en: `Commensal & Observable Species`, it: `Specie commensali e osservabili`, es: `Especies observables` } as T,
  secFlora: { zh: `山地植物群`, en: `Montane Flora`, it: `Flora montana`, es: `Flora de montaña` } as T,
  species: [
    {
      name: { zh: `安第斯神鹫`, en: `Andean Condor`, it: `Condor andino`, es: `Cóndor Andino` } as T,
      latin: 'Vultur gryphus',
      niche: { zh: `高空翱翔者`, en: `High-altitude soarer`, it: `Planatore d'alta quota`, es: `Planeador de altura` } as T,
      desc: {
        zh: `翼展可达 3 米以上的巨型猛禽，常乘安第斯西风在山谷间滑翔。它是安第斯山脉的标志，也是多个原住文化中的神圣之鸟。`,
        en: `A giant raptor with a wingspan over 3 m, often gliding on the Andean westerlies between valleys. An icon of the Andes and a sacred bird in several Indigenous cultures.`,
        it: `Rapace gigante con un'apertura alare di oltre 3 m, spesso plana sui venti andini tra le valli. Icona delle Ande e uccello sacro in diverse culture indigene.`,
        es: `Una rapaz gigante de más de 3 m de envergadura, que a menudo planea sobre los vientos andinos entre los valles. Ícono de los Andes y ave sagrada en varias culturas originarias.`,
      } as T,
      iucn: 'NT',
      icon: '🦅',
    },
    {
      name: { zh: `山间赤狐（Zorro Colorado）`, en: `Culpeo Fox`, it: `Volpe culpeo`, es: `Zorro Colorado` } as T,
      latin: 'Lycalopex culpaeus',
      niche: { zh: `机会主义猎手`, en: `Opportunistic hunter`, it: `Cacciatore opportunistico`, es: `Cazador oportunista` } as T,
      desc: {
        zh: `巴塔哥尼亚常见的野生犬科，红棕色的皮毛在路边格外显眼。它们机警而好奇，但请切勿投喂——人类食物会损害其健康并改变习性。`,
        en: `Patagonia's common wild canid, its red-brown coat eye-catching by the roadside. Wary and curious — but never feed them; human food harms their health and changes their behaviour.`,
        it: `Comune canide selvatico della Patagonia, dal pelo rossiccio ben visibile lungo la strada. Cauto e curioso — ma non dategli cibo: il cibo umano danneggia la sua salute e ne cambia il comportamento.`,
        es: `El cánido silvestre común de la Patagonia, de pelaje rojizo que destaca junto a la ruta. Recela y curiosea, pero nunca lo alimente: la comida humana daña su salud y cambia su comportamiento.`,
      } as T,
      iucn: 'LC',
      icon: '🦊',
    },
    {
      name: { zh: `马驼鹿（Huemul）`, en: `Huemul Deer`, it: `Huemul`, es: `Huemul` } as T,
      latin: 'Hippocamelus bisulcus',
      niche: { zh: `林线下的隐士`, en: `Treeline hermit`, it: `Eremita del limite del bosco`, es: `Ermitaño del límite del bosque` } as T,
      desc: {
        zh: `安第斯南端的濒危鹿种，也是阿根廷的国家象征之一，多见于纳韦尔瓦皮公园深处的林线一带。极难遇见，是这片山林健康的"伞护物种"。`,
        en: `An endangered deer of the far south Andes and a national symbol of Argentina, found mainly along the treeline deep in Nahuel Huapi Park. Seldom seen, it is an "umbrella species" for the health of these forests.`,
        it: `Cervo minacciato dell'estremo sud andino e simbolo nazionale dell'Argentina, vive soprattutto lungo il limite del bosco nelle profondità del parco Nahuel Huapi. Rarissimo da avvistare, è una "specie ombrello" per la salute di questi boschi.`,
        es: `Un ciervo amenazado del extremo sur andino y símbolo nacional de Argentina, que vive sobre todo en el límite del bosque en lo profundo del parque Nahuel Huapi. Muy difícil de ver, es una "especie paraguas" para la salud de estos bosques.`,
      } as T,
      iucn: 'EN',
      icon: '🦌',
    },
    {
      name: { zh: `南美柏（Coihue）`, en: `Coihue`, it: `Coihue`, es: `Coihue` } as T,
      latin: 'Nothofagus dombeyi',
      niche: { zh: `森林骨架`, en: `Forest canopy`, it: `Chioma del bosco`, es: `Dosel del bosque` } as T,
      desc: {
        zh: `常绿的南半球山毛榉，构成安第斯-巴塔哥尼亚森林浓密的林冠。耐阴、喜湿，是无数鸟类与昆虫的家园。`,
        en: `An evergreen southern beech forming the dense canopy of the Andean-Patagonian forest. Shade- and moisture-loving, it shelters countless birds and insects.`,
        it: `Faggio australe sempreverde che forma la fitta chioma del bosco andino-patagonico. Ama ombra e umidità e offre riparo a innumerevoli uccelli e insetti.`,
        es: `Una haya austral siempreverde que forma el dosel denso del bosque andino-patagónico. Ama la sombra y la humedad, y alberga a innumerables aves e insectos.`,
      } as T,
      iucn: 'LC',
      icon: '🌳',
    },
    {
      name: { zh: `香桃木（Arrayán）`, en: `Arrayán myrtle`, it: `Arrayán`, es: `Arrayán` } as T,
      latin: 'Luma apiculata',
      niche: { zh: `湖岸灌木`, en: `Shoreline shrub`, it: `Arbusto ripariale`, es: `Arbusto de orilla` } as T,
      desc: {
        zh: `树干泛着橙红光泽的桃金娘科灌木，集中在附近的洛斯阿赖内斯国家保护区。其光滑的"红皮"是巴里洛切森林里最上镜的植物之一。`,
        en: `A myrtle with an orange-red glowing trunk, concentrated in the nearby Los Arrayanes National Park. Its smooth "red bark" is among the most photogenic plants of Bariloche's forest.`,
        it: `Mirto dal tronco sfavillante arancione-rosso, concentrato nel vicino Parco Nazionale Los Arrayanes. La sua "corteccia rossa" liscia è tra le piante più fotogeniche del bosco di Bariloche.`,
        es: `Una mirtácea de tronco naranja-rojizo, concentrada en el cercano Parque Nacional Los Arrayanes. Su "corteza roja" lisa es una de las plantas más fotogénicas del bosque de Bariloche.`,
      } as T,
      iucn: 'LC',
      icon: '🌿',
    },
    {
      name: { zh: `落叶榉（Lenga）`, en: `Lenga`, it: `Lenga`, es: `Lenga` } as T,
      latin: 'Nothofagus pumilio',
      niche: { zh: `秋日红叶林`, en: `Autumn redwood`, it: `Bosco rosso d'autunno`, es: `Bosque rojo de otoño` } as T,
      desc: {
        zh: `落叶的山毛榉，秋季叶片转为火红，是巴里洛切秋色的主角。它更耐贫瘠与风，常分布在海拔更高的林线之上。`,
        en: `A deciduous southern beech that turns flame-red in autumn — the star of Bariloche's fall colour. Tough against poor soil and wind, it often grows above the treeline.`,
        it: `Faggio caduco che in autunno diventa rosso fuoco, protagonista del colore autunnale di Bariloche. Resiste a suoli poveri e al vento e cresce spesso oltre il limite del bosco.`,
        es: `Una haya caduca que se pone roja fuego en otoño: la protagonista del color otoñal de Bariloche. Resiste suelos pobres y viento, y suele crecer por encima del límite del bosque.`,
      } as T,
      iucn: 'LC',
      icon: '🍂',
    },
  ],
};

// ── FAQ ──
export const faq = {
  sectionNum: { zh: `独立访客指南`, en: `Independent Visitor Guide`, it: `Guida indipendente del visitante`, es: `Guía de visita independiente` } as T,
  heading: { zh: `访客指南与<em class="text-[color:var(--color-emerald)]">常见问题</em>`, en: `Visitor Guide &<br/><em class="text-[color:var(--color-emerald)]"> FAQ</em>`, it: `Guida del visitante e<br/><em class="text-[color:var(--color-emerald)]"> domande frequenti</em>`, es: `Guía del visitante &<br/><em class="text-[color:var(--color-emerald)]"> preguntas</em>` } as T,
  disclaimer: {
    zh: `以下信息由 miradorchico 独立科普团队根据公开资料整理，仅供访客参考。出行前请通过阿根廷官方旅游与国家公园渠道核实最新政策。`,
    en: `The following information has been compiled by the independent miradorchico editorial team from publicly available sources and is provided for visitor reference only. Please verify the latest policies through official Argentine tourism and National Park channels before your visit.`,
    it: `Le seguenti informazioni sono state raccolte dal team editoriale indipendente di miradorchico da fonti pubbliche e sono fornite solo come riferimento per i visitatori. Verificate le politiche più recenti tramite i canali ufficiali del turismo argentino e dei Parchi Nazionali prima della visita.`,
    es: `La siguiente información fue compilada por el equipo editorial independiente de miradorchico a partir de fuentes públicas y se proporciona solo como referencia. Verifique las políticas más recientes a través de los canales oficiales de turismo y Parques Nacionales de Argentina antes de su visita.`,
  } as T,
  items: [
    {
      q: { zh: `需要门票吗？开放时间是？`, en: `Is there an entrance fee? What are the hours?`, it: `C'è un biglietto d'ingresso? Quali sono gli orari?`, es: `¿Se paga entrada? ¿Cuál es el horario?` } as T,
      a: {
        zh: `Punto Panorámico 是完全免费的公共观景台，24 小时开放、无人值守。日间与黄昏风景最佳；夜间无照明、气温低、风大，不建议逗留。`,
        en: `Punto Panorámico is a completely free public viewpoint, open 24 hours and unattended. Daylight and dusk give the best views; at night there is no lighting, it is cold and windy, so lingering is not advised.`,
        it: `Il Punto Panorámico è un mirador pubblico del tutto gratuito, aperto 24 ore e senza personale. Giorno e tramonto danno le migliori viste; di notte non c'è luce, fa freddo e vento, perciò non conviene trattenersi.`,
        es: `El Punto Panorámico es un mirador público totalmente gratuito, abierto las 24 horas y sin personal. El día y el atardecer dan las mejores vistas; de noche no hay iluminación, hace frío y viento, por lo que no se recomienda demorarse.`,
      } as T,
    },
    {
      q: { zh: `如何前往 Punto Panorámico？`, en: `How do I get to Punto Panorámico?`, it: `Come arrivo al Punto Panorámico?`, es: `¿Cómo llego al Punto Panorámico?` } as T,
      a: {
        zh: `从巴里洛切市中心前往，最方便的方式是沿小环线 RP77 自驾、打车 / remis、骑行，或乘坐开往 Llao Llao 方向的公交并请司机在观景台附近停靠、参加小环线半日游；若从 Teniente Luis Candelaria（BRC）机场出发，通常需先进入市区，再换乘公交、参加小环线半日游，或直接租车 / taxi / remis 前往。`,
        en: `From downtown Bariloche, the easiest options are to drive, take a taxi/remis, cycle the paved RP77 Circuito Chico, or ride a bus toward Llao Llao and ask the driver to stop near the viewpoint (or join a Circuito Chico half-day tour); from Teniente Luis Candelaria Airport (BRC), most travellers first reach town and then transfer to a bus, join a Circuito Chico tour, or continue directly by rental car or taxi/remis.`,
        it: `Dal centro di Bariloche, le opzioni più semplici sono l'auto, il taxi/remis, la bicicletta lungo la RP77 asfaltata oppure l'autobus verso Llao Llao chiedendo all'autista di fermarsi vicino al belvedere (o un tour di mezza giornata del Circuito Chico); dall'aeroporto Teniente Luis Candelaria (BRC), di solito si raggiunge prima la città e poi si cambia sull'autobus, si partecipa a un tour del Circuito Chico oppure si prosegue direttamente con auto a noleggio o taxi/remis.`,
        es: `Desde el centro de Bariloche, las opciones más sencillas son ir en auto, taxi/remis, bicicleta por la RP77 pavimentada, o tomar un colectivo hacia Llao Llao y pedirle al chofer que pare cerca del mirador (o sumarse a un tour de medio día por el Circuito Chico); desde el aeropuerto Teniente Luis Candelaria (BRC), la mayoría primero llega al centro y luego combina con el colectivo, se une a un tour del Circuito Chico o sigue directamente en auto de alquiler o taxi/remis.`,
      } as T,
    },
    {
      q: { zh: `什么时候是最佳到访时间？`, en: `When is the best time to visit?`, it: `Qual è il momento migliore per visitare?`, es: `¿Cuál es el mejor momento para visitar?` } as T,
      a: {
        zh: `<strong>看湖与雪峰：</strong>白天晴朗时湖蓝与雪峰最清晰。<br/><br/><strong>看黄金时刻：</strong>日落前约 60 分钟，特罗纳多峰被夕阳染成金红，是摄影的黄金窗口。`,
        en: `<strong>Lake & peaks:</strong> on a clear day the blue lake and snow peaks are sharpest.<br/><br/><strong>Golden Hour:</strong> about 60 minutes before sunset Cerro Tronador glows gold-red — the golden window for photography.`,
        it: `<strong>Lago e cime:</strong> in giornata serena il lago blu e le cime innevate sono più nitidi.<br/><br/><strong>Ora dorata:</strong> circa 60 minuti prima del tramonto il Cerro Tronador splende d'oro e rosso — la finestra dorata per la fotografia.`,
        es: `<strong>Lago y cumbres:</strong> en un día despejado, el lago azul y las cumbres nevadas se ven nítidos.<br/><br/><strong>Hora Dorada:</strong> unos 60 minutos antes de la puesta, el Cerro Tronador se tiñe de oro y rojo: la ventana dorada para fotografiar.`,
      } as T,
    },
    {
      q: { zh: `参观安全吗？`, en: `Is it safe to visit?`, it: `È sicuro visitarlo?`, es: `¿Es seguro visitar?` } as T,
      a: {
        zh: `台地边缘<strong>开阔临崖</strong>，请与边缘保持安全距离、看管好儿童；安第斯西风强劲，注意防风保暖；台地上没有任何设施，请自备饮水与食物，并带走所有垃圾。`,
        en: `The terrace edge is <strong>open to a drop</strong> — keep a safe distance from the edge and watch children; the Andean westerlies are strong, so dress for wind and cold; the terrace itself has no facilities, so bring water and food and carry out all litter.`,
        it: `Il bordo della terrazza è <strong>aperto sul vuoto</strong>: mantieni una distanza di sicurezza dal bordo e sorveglia i bambini; il vento occidentale andino è forte, vestiti per il vento e il freddo; la terrazza non ha servizi, porta acqua e cibo e porta via i rifiuti.`,
        es: `El borde de la terraza <strong>está abierto al vacío</strong>: mantenga una distancia de seguridad del borde y vigile a los niños; el viento oeste andino es fuerte, así que abríguese; la terraza no tiene servicios, traiga agua y comida y lleve su basura.`,
      } as T,
    },
    {
      q: { zh: `Punto Panorámico - Circuito Chico 具体在哪里？`, en: `Where exactly is Punto Panorámico - Circuito Chico located?`, it: `Dove si trova esattamente il Punto Panorámico - Circuito Chico?`, es: `¿Dónde está exactamente Punto Panorámico - Circuito Chico?` } as T,
      a: {
        zh: `它位于阿根廷内格罗河省圣卡洛斯-德巴里洛切的小环线（Cto. Chico / RP77）旁，Plus Code 为 <strong>WFHH+74</strong>，坐标约 -41.0827, -71.5465，就在俯瞰纳韦尔瓦皮湖的山路弯道处。`,
        en: `It is located in San Carlos de Bariloche, Río Negro, Argentina, beside the Circuito Chico (Cto. Chico / RP77). Its Plus Code is <strong>WFHH+74</strong> and its coordinates are about -41.0827, -71.5465, at a bend in the road overlooking Nahuel Huapi Lake.`,
        it: `Si trova a San Carlos de Bariloche, Río Negro, Argentina, accanto al Circuito Chico (Cto. Chico / RP77). Il Plus Code è <strong>WFHH+74</strong> e le coordinate sono circa -41.0827, -71.5465, in una curva che domina il lago Nahuel Huapi.`,
        es: `Está en San Carlos de Bariloche, Río Negro, Argentina, junto al Circuito Chico (Cto. Chico / RP77). Su Plus Code es <strong>WFHH+74</strong> y sus coordenadas son aprox. -41.0827, -71.5465, en una curva que domina el lago Nahuel Huapi.`,
      } as T,
    },
    {
      q: { zh: `有停车场吗？`, en: `Is there parking?`, it: `C'è un parcheggio?`, es: `¿Hay estacionamiento?` } as T,
      a: {
        zh: `观景台旁设有路边停车带，请靠边安全停放，<strong>不要停在弯道视线盲区</strong>，也不要阻塞小环线交通。旺季与周末车位较紧张，建议上午或黄昏前往。`,
        en: `There is a roadside pull-off beside the viewpoint. Park well to the side, <strong>never in a blind corner</strong>, and do not block Circuito Chico traffic. Spaces fill up on weekends and in high season, so mornings or dusk are best.`,
        it: `C'è uno spazio di sosta lungo la strada accanto al belvedere. Parcheggia bene a lato, <strong>mai in un punto cieco</strong>, e non bloccare il traffico del Circuito Chico. Nei weekend e in alta stagione si riempie: meglio al mattino o al tramonto.`,
        es: `Hay un espacio de estacionamiento junto a la ruta, al lado del mirador. Estacione bien al costado, <strong>nunca en una curva ciega</strong>, y no bloquee el tránsito del Circuito Chico. Se llena los fines de semana y en temporada alta: mejor por la mañana o al atardecer.`,
      } as T,
    },
    {
      q: { zh: `从观景台能看到什么？`, en: `What can I see from the viewpoint?`, it: `Cosa si vede dal belvedere?`, es: `¿Qué se ve desde el mirador?` } as T,
      a: {
        zh: `正对莫雷诺湖（Lago Moreno）与劳劳半岛（Península Llao Llao）的开阔水面，侧旁可见纳韦尔瓦皮湖（Lago Nahuel Huapi），远处是海拔 3,554 米的特罗纳多峰（Cerro Tronador）与劳劳酒店。晴朗黄昏时雪峰会被夕阳染成金红。`,
        en: `You face the open water of Lago Moreno and the Llao Llao peninsula, with Lago Nahuel Huapi beside it and snow-capped Cerro Tronador (3,554 m) rising beyond, along with the historic Llao Llao hotel. On a clear dusk the peak turns gold-red.`,
        it: `Sei di fronte alle acque aperte del lago Moreno e della penisola di Llao Llao, con il lago Nahuel Huapi accanto e il Cerro Tronador (3.554 m) più in là, insieme all'storico hotel di Llao Llao. In un tramonto sereno la cima si tinge d'oro e rosso.`,
        es: `Tienes enfrente las aguas abiertas del lago Moreno y la península de Llao Llao, con el lago Nahuel Huapi al lado y el Cerro Tronador (3.554 m) al fondo, junto al histórico hotel de Llao Llao. En un atardecer despejado la cumbre se tiñe de oro y rojo.`,
      } as T,
    },
    {
      q: { zh: `附近有厕所或商店吗？`, en: `Are there restrooms or shops nearby?`, it: `Ci sono bagni o negozi vicino?`, es: `¿Hay baños o comercios cerca?` } as T,
      a: {
        zh: `公共观景台本身<strong>没有服务设施</strong>（没有饮水点、没有小卖部）。不过就在旁边有一家独立经营的 <strong>Restaurant Punto Panorámico</strong>（阿根廷菜、烤肉与披萨），可以坐下来吃饭；若想有更多选择，可沿小环线前往 Colonia Suiza 或 Llao Llao 一带。请自备饮水并带走所有垃圾。`,
        en: `The public terrace itself has <strong>no facilities</strong> (no water point, no kiosk). Right beside it, however, the <strong>Restaurant Punto Panorámico</strong> is a separate private business where you can sit down to eat (Argentine grill and pizza); for more choice, continue along the Circuito Chico towards Colonia Suiza or Llao Llao. Bring your own water and carry out all litter.`,
        it: `La terrazza pubblica <strong>non ha servizi</strong> (né acqua, né chiosco). Proprio accanto, però, il <strong>Restaurant Punto Panorámico</strong> è una attività privata dove ci si può sedere a mangiare (cucina argentina alla griglia e pizza); per più scelta, prosegui lungo il Circuito Chico verso Colonia Suiza o Llao Llao. Porta acqua e porta via i rifiuti.`,
        es: `La terraza pública <strong>no tiene servicios</strong> (ni agua, ni kiosco). Justo al lado, en cambio, el <strong>Restaurant Punto Panorámico</strong> es un local privado donde se puede comer (parrilla argentina y pizzas); para más opciones, siga por el Circuito Chico hacia Colonia Suiza o Llao Llao. Traiga agua y lleve su basura.`,
      } as T,
    },
    {
      q: { zh: `观景台可以吃饭吗？`, en: `Can you eat at Punto Panorámico?`, it: `Si può mangiare al Punto Panorámico?`, es: `¿Se puede comer en el Punto Panorámico?` } as T,
      a: {
        zh: `可以。免费公共观景台本身不卖食物，但紧挨着的 <strong>Restaurant Punto Panorámico</strong> 是独立经营的餐厅，主打阿根廷烤肉与披萨，部分餐桌正对湖景。旺季与周末建议提前或错峰前往；若想有更多选择，可沿小环线到 Colonia Suiza 或 Llao Llao 一带。`,
        en: `Yes. The free public terrace sells no food, but the <strong>Restaurant Punto Panorámico</strong> right beside it is a separate business serving Argentine grill and pizza, with some tables facing the lake. In high season and at weekends, arrive early or off-peak; for more choice, head along the Circuito Chico to Colonia Suiza or Llao Llao.`,
        it: `Sì. La terrazza pubblica gratuita non vende cibo, ma il <strong>Restaurant Punto Panorámico</strong> proprio accanto è una attività separata che serve cucina argentina alla griglia e pizza, con alcuni tavoli affacciati sul lago. In alta stagione e nei weekend conviene arrivare presto o fuori orario; per più scelta, prosegui lungo il Circuito Chico verso Colonia Suiza o Llao Llao.`,
        es: `Sí. La terraza pública gratuita no vende comida, pero el <strong>Restaurant Punto Panorámico</strong> que está justo al lado es un local aparte que sirve parrilla argentina y pizzas, con algunas mesas frente al lago. En temporada alta y fines de semana conviene llegar temprano o fuera de hora; para más opciones, siga por el Circuito Chico hacia Colonia Suiza o Llao Llao.`,
      } as T,
    },
  ],
};

// ── Leave No Trace ──
export const leaveNoTrace = {
  sectionNum: { zh: `游览公约`, en: `Visitor Code`, it: `Codice del visitante`, es: `Código del visitante` } as T,
  heading: { zh: `无痕山林<br/><em class="text-[color:var(--color-emerald)]">公约</em>`, en: `Leave No Trace<br/><em class="text-[color:var(--color-emerald)]"> Code</em>`, it: `Non lasciare traccia<br/><em class="text-[color:var(--color-emerald)]"> codice</em>`, es: `No Dejar Rastro<br/><em class="text-[color:var(--color-emerald)]"> Código</em>` } as T,
  subtitle: {
    zh: `作为纳韦尔瓦皮国家公园内的公共空间，Punto Panorámico 属于每一位旅人与下代访客。请在到访前阅读并承诺遵守以下准则，让这片安第斯风景长久清澈。`,
    en: `As a public space inside Nahuel Huapi National Park, Punto Panorámico belongs to every traveller and to the visitors who come after. Please read and commit to the code below so this Andean landscape stays clear for all.`,
    it: `Come spazio pubblico all'interno del Parco Nazionale Nahuel Huapi, il Punto Panorámico appartiene a ogni viaggiatore e a chi verrà dopo. Leggi e impegnati a rispettare il codice qui sotto, perché questo paesaggio andino resti limpido per tutti.`,
    es: `Como espacio público dentro del Parque Nacional Nahuel Huapi, el Punto Panorámico pertenece a cada viajero y a quienes vengan después. Lea y comprométase con el código siguiente para que este paisaje andino siga claro para todos.`,
  } as T,
  rules: [
    {
      icon: '🚯',
      title: { zh: `不留垃圾`, en: `Pack It In, Pack It Out`, it: `Porta via ciò che porti`, es: `Lleva lo que traes` } as T,
      desc: {
        zh: `观景台周边没有任何垃圾桶。所有废弃物（包括果皮、纸巾、水瓶）请自行带走。被风吹入湖中的塑料会伤害水鸟与湖岸生态。`,
        en: `There are no bins at the viewpoint. Carry out all waste (peels, tissues, bottles). Plastic blown into the lake harms waterbirds and the shoreline ecosystem.`,
        it: `Al mirador non ci sono cestini. Porta via tutti i rifiuti (buccie, fazzoletti, bottiglie). La plastica soffiata nel lago danneggia uccelli acquatici e riva.`,
        es: `No hay tachos en el mirador. Lleve todo (cáscaras, pañuelos, botellas). El plástico que el viento lleva al lago daña a las aves y la costa.`,
      } as T,
    },
    {
      icon: '🔥',
      title: { zh: `严禁烟火`, en: `No Fire, No Smoking`, it: `Niente fuoco, niente fumo`, es: `Prohibido fuego y fumar` } as T,
      desc: {
        zh: `巴塔哥尼亚夏季极易发生森林大火。观景台周边绝对禁止吸烟、生火或使用明火；哪怕一个烟头也可能引燃整片山林。`,
        en: `Patagonian summers are extremely fire-prone. Absolutely no smoking, fires or open flames around the viewpoint — even a single cigarette end can ignite the whole forest.`,
        it: `Le estati patagoniche sono molto soggette agli incendi. Vietato fumare, accendere fuochi o fiamme libere vicino al mirador: anche un solo mozzicone può incendiare tutto il bosco.`,
        es: `Los veranos patagónicos son muy propensos a incendios. Está totalmente prohibido fumar, hacer fuego o usar llama abierta cerca del mirador: una sola colilla puede incendiar todo el bosque.`,
      } as T,
    },
    {
      icon: '🦊',
      title: { zh: `不投喂野生动物`, en: `No Feeding Wildlife`, it: `Non dare cibo alla fauna`, es: `No alimente la fauna` } as T,
      desc: {
        zh: `路边的赤狐（Zorro Colorado）与鸟类看似亲近，但投喂会改变其行为并带来健康风险。请只远观，把食物收好。`,
        en: `The roadside foxes and birds look friendly, but feeding changes their behaviour and risks their health. Observe from afar and keep food stowed.`,
        it: `Le volpi e gli uccelli lungo la strada sembrano amichevoli, ma nutrirli ne cambia il comportamento e ne mette a rischio la salute. Osservali da lontano e tieni il cibo al sicuro.`,
        es: `Los zorros y aves junto a la ruta parecen amigables, pero alimentarlos cambia su comportamiento y pone en riesgo su salud. Obsérvelos de lejos y guarde la comida.`,
      } as T,
    },
    {
      icon: '👣',
      title: { zh: `不离开台地与步道`, en: `Stay on the Terrace`, it: `Resta sulla terrazza`, es: `Quédese en la terraza` } as T,
      desc: {
        zh: `台地边缘开阔临崖且临近私家林地。请勿翻越或进入未开放区域，以免破坏植被或引发险情。`,
        en: `The terrace edge is open to a drop and borders private woodland. Do not climb over or enter closed areas, to avoid damaging vegetation or risking accidents.`,
        it: `Il bordo della terrazza è aperto sul vuoto e confina con bosco privato. Non oltrepassare né entrare in zone chiuse, per non danneggiare la vegetazione né rischiare incidenti.`,
        es: `El borde de la terraza está abierto al vacío y linda con bosque privado. No cruce ni ingrese a zonas cerradas, para no dañar la vegetación ni arriesgarse.`,
      } as T,
    },
    {
      icon: '🤫',
      title: { zh: `保持安静，尊重黄昏`, en: `Keep Quiet, Respect Dusk`, it: `Silenzio, rispetta il tramonto`, es: `Silencio, respete el atardecer` } as T,
      desc: {
        zh: `黄昏是摄影与静享的时刻。请收起外放音响，将交谈降到最低，让每个人都能听见风穿过森林的声音。`,
        en: `Dusk is for photography and quiet enjoyment. Put away speakers, lower your voice, and let everyone hear the wind move through the forest.`,
        it: `Il tramonto è per fotografare e godersi in quiete. Metti via gli altoparlanti, abbassa la voce e lascia che tutti sentano il vento nel bosco.`,
        es: `El atardecer es para fotografiar y disfrutar en silencio. Guarde los parlantes, baje la voz y deje que todos oigan el viento en el bosque.`,
      } as T,
    },
    {
      icon: '🧥',
      title: { zh: `防风保暖，注意安全`, en: `Dress for Wind & Cold`, it: `Vestiti per vento e freddo`, es: `Al abrigo del viento y frío` } as T,
      desc: {
        zh: `安第斯西风强劲、气温多变，即使在夏季也可能骤冷。请穿戴防风保暖衣物，与崖边保持距离，照顾好同行的老人与儿童。`,
        en: `The Andean westerlies are strong and temperatures swing — even in summer it can turn cold fast. Wear wind-proof warm clothing, keep clear of the edge, and look after older companions and children.`,
        it: `Il vento occidentale andino è forte e la temperatura cambia: anche in estate può raffreddarsi in fretta. Indossa abiti caldi e anti-vento, resta lontano dal bordo e cura anziani e bambini.`,
        es: `El viento oeste andino es fuerte y la temperatura cambia: incluso en verano puede enfriar rápido. Use ropa cortaviento y abrigada, manténgase lejos del borde y cuide a mayores y niños.`,
      } as T,
    },
  ],
  closing: {
    zh: `只带走照片，只留下脚印。<br/>让安第斯，始终保持野性。`,
    en: `Take only photos, leave only footprints.<br/>Keep the Andes wild.`,
    it: `Porta via solo foto, lascia solo impronte.<br/>Che gli Andes restino selvaggi.`,
    es: `Lleva solo fotos, deja solo huellas.<br/>Que los Andes sigan salvajes.`,
  } as T,
};

// ── Public Sources ──
export const partners = {
  heading: {
    zh: `公共信息核验来源`,
    en: `Public Information Sources`,
    it: `Fonti pubbliche di verifica`,
    es: `Fuentes publicas de verificacion`,
  } as T,
  items: [
    {
      name: { zh: `Circuito Chico 官方路线信息页`, en: `Circuito Chico official route page`, it: `Pagina ufficiale del percorso Circuito Chico`, es: `Pagina oficial de la ruta Circuito Chico` } as T,
      url: 'https://barilocheturismo.gob.ar/es/circuito-chico',
      abbr: 'BT',
      note: { zh: `路线与公共交通核验`, en: `Route and transit verification`, it: `Verifica di percorso e trasporto pubblico`, es: `Verificacion de ruta y transporte publico` } as T,
      attr: { zh: `用于核验小环线的路线、距离与公共交通信息；仅作为公共信息来源，不构成任何商业推荐。`, en: `Used to verify route, distance and public-transit information for Circuito Chico; provided as a public source only, not as a commercial endorsement.`, it: `Usata per verificare percorso, distanze e trasporto pubblico del Circuito Chico; fornita solo come fonte pubblica, non come raccomandazione commerciale.`, es: `Se usa para verificar ruta, distancias y transporte publico del Circuito Chico; se ofrece solo como fuente publica, no como recomendacion comercial.` } as T,
    },
    {
      name: { zh: `纳韦尔瓦皮国家公园（Parque Nacional Nahuel Huapi）`, en: `Nahuel Huapi National Park`, it: `Parco Nazionale Nahuel Huapi`, es: `Parque Nacional Nahuel Huapi` } as T,
      url: 'https://www.argentina.gob.ar/parquesnacionales/nahuelhuapi',
      abbr: 'PNH',
      note: { zh: `生态与安全公告`, en: `Ecology and safety notices`, it: `Avvisi ecologici e di sicurezza`, es: `Avisos de ecologia y seguridad` } as T,
      attr: { zh: `用于核验国家公园范围、生态保护要求与安全注意事项；为公共机构信息，不构成推荐。`, en: `Used to verify park boundaries, ecological protection rules and safety notices; this is public-agency information, not a recommendation.`, it: `Usata per verificare confini del parco, regole ecologiche e avvisi di sicurezza; si tratta di informazione pubblica, non di una raccomandazione.`, es: `Se usa para verificar limites del parque, normas ecologicas y avisos de seguridad; es informacion publica, no una recomendacion.` } as T,
    },
    {
      name: { zh: `圣卡洛斯-德巴里洛切市政府官网（Municipalidad）`, en: `Municipality of San Carlos de Bariloche`, it: `Comune di San Carlos de Bariloche`, es: `Municipalidad de San Carlos de Bariloche` } as T,
      url: 'https://www.bariloche.gov.ar/',
      abbr: 'MUNI',
      note: { zh: `市政与路况公告`, en: `Municipal and road notices`, it: `Avvisi comunali e viabilita`, es: `Avisos municipales y viales` } as T,
      attr: { zh: `用于核验当地市政公告、公共设施维护与路况信息；仅供公共信息查阅。`, en: `Used to verify municipal notices, public-facility maintenance and road conditions; provided only for public reference.`, it: `Usata per verificare avvisi comunali, manutenzione delle strutture pubbliche e condizioni stradali; fornita solo come riferimento pubblico.`, es: `Se usa para verificar avisos municipales, mantenimiento de instalaciones publicas y estado de rutas; se ofrece solo como referencia publica.` } as T,
    },
  ],
};

// ── Footer ──
export const footer = {
  cta: { zh: `今天，去<br/><em class="text-[color:var(--color-sun)]">遇见安第斯的光</em>。`, en: `Today, go<br/><em class="text-[color:var(--color-sun)]">meet the Andean light</em>.`, it: `Oggi, vai<br/><em class="text-[color:var(--color-sun)]">a incontrare la luce andina</em>.`, es: `Hoy, ve<br/><em class="text-[color:var(--color-sun)]">a encontrar la luz andina</em>.` } as T,
  address: { zh: `Punto Panorámico · 小环线 RP77 · 圣卡洛斯-德巴里洛切，阿根廷`, en: `Punto Panorámico · Circuito Chico RP77 · San Carlos de Bariloche, Argentina`, it: `Punto Panorámico · Circuito Chico RP77 · San Carlos de Bariloche, Argentina`, es: `Punto Panorámico · Circuito Chico RP77 · San Carlos de Bariloche, Argentina` } as T,
  copyright: { zh: `© 2026 miradorchico · 保留所有权利。`, en: `© 2026 miradorchico. All rights reserved.`, it: `© 2026 miradorchico. Tutti i diritti riservati.`, es: `© 2026 miradorchico. Todos los derechos reservados.` } as T,
  disclaimer: { zh: `本网站是一个独立的第三方自然教育项目，与任何政府机构、景点运营方或商业机构均无关联。`, en: `This website is an independent third-party nature-education project. We are not affiliated with any government agency, attraction operator or commercial entity.`, it: `Questo sito è un progetto indipendente di educazione naturalistica di terze parti. Non è affiliato a nessun ente governativo, gestore di attrazioni o entità commerciale.`, es: `Este sitio es un proyecto independiente de educación natural de terceros. No estamos afiliados a ningún organismo gubernamental, operador de atracciones o entidad comercial.` } as T,
  sourcesNote: { zh: `下列外部链接仅用于公共信息核验，不构成景点、服务或机构的商业推荐。`, en: `The external links below are provided only for public-information verification and do not constitute commercial recommendations of any attraction, service or institution.`, it: `I link esterni qui sotto sono forniti solo per la verifica di informazioni pubbliche e non costituiscono raccomandazioni commerciali di attrazioni, servizi o istituzioni.`, es: `Los enlaces externos de abajo se ofrecen solo para verificar informacion publica y no constituyen recomendaciones comerciales de ningun atractivo, servicio o institucion.` } as T,
  privacy: { zh: `隐私政策`, en: `Privacy Policy`, it: `Informativa sulla privacy`, es: `Política de Privacidad` } as T,
  terms: { zh: `服务条款`, en: `Terms of Service`, it: `Termini di servizio`, es: `Términos del Servicio` } as T,
  cookies: { zh: `Cookie 设置`, en: `Cookie Settings`, it: `Impostazioni cookie`, es: `Configuración de Cookies` } as T,
  leaveNoTrace: { zh: `游览公约`, en: `Visitor Code`, it: `Codice del visitante`, es: `Código del visitante` } as T,
  officialNameLabel: { zh: `官方名称`, en: `Official name`, it: `Nome ufficiale`, es: `Nombre oficial` } as T,
  napNote: { zh: `名称与地址与 Google 地图地点条目保持一致（NAP 一致性）。`, en: `Name and address are kept consistent with the Google Maps place listing (NAP consistency).`, it: `Nome e indirizzo sono mantenuti coerenti con la scheda del luogo su Google Maps (coerenza NAP).`, es: `El nombre y la dirección se mantienen coherentes con la ficha del lugar en Google Maps (consistencia NAP).` } as T,
};

// ── Privacy Policy Page ──
export const privacy = {
  title: { zh: `隐私政策 — miradorchico`, en: `Privacy Policy — miradorchico`, it: `Informativa sulla privacy — miradorchico`, es: `Política de Privacidad — miradorchico` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, it: `Ultimo aggiornamento: luglio 2026`, es: `Última actualización: Julio de 2026` } as T,
  h1: { zh: `隐私政策`, en: `Privacy Policy`, it: `Informativa sulla privacy`, es: `Política de Privacidad` } as T,
  h2_collect: { zh: `我们收集的信息`, en: `Information We Collect`, it: `Informazioni che raccogliamo`, es: `Información que recopilamos` } as T,
  p_collect: {
    zh: `我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：浏览数据（IP 地址、浏览器类型、访问页面）、Cookie 和类似技术、您通过联系表格或电子邮件自愿提供的任何信息。`,
    en: `We collect only the minimum data necessary to provide our services. This may include: browsing data (IP address, browser type, pages visited), cookies and similar technologies, and any information you voluntarily provide through contact forms or email.`,
    it: `Raccogliamo solo i dati minimi necessari a fornire i nostri servizi. Possono includere: dati di navigazione (indirizzo IP, tipo di browser, pagine visitate), cookie e tecnologie simili, e qualsiasi informazione fornita volontariamente tramite moduli di contatto o email.`,
    es: `Recopilamos solo los datos mínimos necesarios para brindar nuestros servicios. Esto puede incluir: datos de navegación (dirección IP, tipo de navegador, páginas visitadas), cookies y tecnologías similares, e información que usted proporcione voluntariamente por formularios o correo.`,
  } as T,
  h2_use: { zh: `我们如何使用您的信息`, en: `How We Use Your Information`, it: `Come usiamo le tue informazioni`, es: `Cómo usamos su información` } as T,
  p_use: {
    zh: `我们使用收集到的信息用于：改善网站内容和用户体验、分析流量和使用模式、回应请求、遵守我们的法律义务。`,
    en: `We use the collected information to: improve website content and user experience, analyze traffic and usage patterns, respond to inquiries, and comply with our legal obligations.`,
    it: `Usiamo le informazioni raccolte per: migliorare i contenuti del sito e l'esperienza utente, analizzare il traffico e i modelli d'uso, rispondere alle richieste e rispettare i nostri obblighi legali.`,
    es: `Usamos la información recopilada para: mejorar el contenido y la experiencia del sitio, analizar el tráfico y los patrones de uso, responder consultas y cumplir obligaciones legales.`,
  } as T,
  h2_third: { zh: `第三方服务`, en: `Third-Party Services`, it: `Servizi di terze parti`, es: `Servicios de terceros` } as T,
  p_third: {
    zh: `我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）和谷歌分析 GA4（用于流量分析）。站内所展示图片的版权归原摄影者所有。这些服务均有各自的隐私政策。`,
    en: `Our website may use third-party services, such as Google Maps (for embedded maps and location data) and Google Analytics 4 (for traffic analysis). The copyright of the images displayed on this site belongs to their original photographers. These services have their own privacy policies.`,
    it: `Il nostro sito può usare servizi di terze parti, come Google Maps (per mappe incorporate e dati di posizione) e Google Analytics 4 (per l'analisi del traffico). Il copyright delle immagini mostrate appartiene ai rispettivi fotografi originali. Questi servizi hanno le proprie politiche sulla privacy.`,
    es: `Nuestro sitio puede usar servicios de terceros, como Google Maps (para mapas y datos de ubicación) y Google Analytics 4 (para análisis de tráfico). Los derechos de autor de las imágenes mostradas pertenecen a sus fotógrafos originales. Estos servicios tienen sus propias políticas de privacidad.`,
  } as T,
  h2_rights: { zh: `您的权利`, en: `Your Rights`, it: `I tuoi diritti`, es: `Sus derechos` } as T,
  p_rights: {
    zh: `根据《通用数据保护条例》(GDPR) 及相关法规，您享有以下权利：访问您的个人数据、要求更正或删除、反对处理、向监管机构提出投诉。`,
    en: `Under the General Data Protection Regulation (GDPR) and related regulations, you have the following rights: access your personal data, request correction or deletion, object to processing, and lodge a complaint with a supervisory authority.`,
    it: `Ai sensi del Regolamento generale sulla protezione dei dati (GDPR) e di normative affini, hai i seguenti diritti: accedere ai tuoi dati personali, richiederne correzione o cancellazione, opporti al trattamento e presentare reclamo a un'autorità di controllo.`,
    es: `Según el Reglamento General de Protección de Datos (GDPR) y normas afines, usted tiene los siguientes derechos: acceder a sus datos personales, solicitar corrección o eliminación, oponerse al tratamiento y presentar una queja ante una autoridad de control.`,
  } as T,
};

// ── Terms of Service Page ──
export const terms = {
  title: { zh: `服务条款 — miradorchico`, en: `Terms of Service — miradorchico`, it: `Termini di servizio — miradorchico`, es: `Términos del Servicio — miradorchico` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, it: `Ultimo aggiornamento: luglio 2026`, es: `Última actualización: Julio de 2026` } as T,
  h1: { zh: `服务条款`, en: `Terms of Service`, it: `Termini di servizio`, es: `Términos del Servicio` } as T,
  h2_acceptance: { zh: `接受条款`, en: `Acceptance of Terms`, it: `Accettazione dei termini`, es: `Aceptación de términos` } as T,
  p_acceptance: {
    zh: `访问和使用 miradorchico，即表示您同意受这些服务条款的约束。`,
    en: `By accessing and using miradorchico, you agree to be bound by these Terms of Service.`,
    it: `Accedendo e utilizzando miradorchico, accetti di essere vincolato da questi Termini di servizio.`,
    es: `Al acceder y usar miradorchico, usted acepta quedar sujeto a estos Términos del Servicio.`,
  } as T,
  h2_content: { zh: `内容使用`, en: `Content Usage`, it: `Utilizzo dei contenuti`, es: `Uso del contenido` } as T,
  p_content: {
    zh: `本网站所有内容仅供参考。我们是一家独立的第三方自然教育网站，与任何旅游景点、政府机构或商业运营商均无关联。`,
    en: `All content on this website is for informational purposes only. We are an independent third-party nature-education website and are not affiliated with any tourist attractions, government agencies, or commercial operators.`,
    it: `Tutto il contenuto di questo sito ha solo scopo informativo. Siamo un sito indipendente di educazione naturalistica di terze parti e non siamo affiliati a nessuna attrazione turistica, ente governativo o operatore commerciale.`,
    es: `Todo el contenido de este sitio es solo informativo. Somos un sitio independiente de educación natural de terceros y no estamos afiliados a ninguna atracción turística, organismo gubernamental u operador comercial.`,
  } as T,
  h2_accuracy: { zh: `信息的准确性`, en: `Accuracy of Information`, it: `Accuratezza delle informazioni`, es: `Exactitud de la información` } as T,
  p_accuracy: {
    zh: `我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。`,
    en: `We strive to provide accurate and timely information, but we cannot guarantee the completeness or accuracy of the information. Schedules, conditions, and services are subject to change without notice. Please always verify important information through official channels before traveling.`,
    it: `Ci impegniamo a fornire informazioni accurate e tempestive, ma non possiamo garantirne completezza o esattezza. Orari, condizioni e servizi possono cambiare senza preavviso. Verifica sempre le informazioni importanti tramite i canali ufficiali prima di viaggiare.`,
    es: `Nos esforzamos por brindar información precisa y oportuna, pero no podemos garantizar su integridad o exactitud. Horarios, condiciones y servicios pueden cambiar sin aviso. Verifique siempre la información importante por canales oficiales antes de viajar.`,
  } as T,
  h2_ip: { zh: `知识产权`, en: `Intellectual Property`, it: `Proprietà intellettuale`, es: `Propiedad intelectual` } as T,
  p_ip: {
    zh: `本网站的设计与原创文字内容受版权保护。站内所展示的所有图片产权及版权均归原摄影者所有，仅用于介绍与说明 Punto Panorámico - Circuito Chico 这一公共景点，不用于商业用途。Google 地图数据的使用符合 Google 的服务条款。`,
    en: `The website design and original written content are protected by copyright. The property rights and copyright of all images displayed on this site belong to their original photographers; they are used solely to describe and illustrate the public attraction Punto Panorámico - Circuito Chico and not for commercial purposes. Google Maps data is used in accordance with Google's Terms of Service.`,
    it: `Il design del sito e i contenuti testuali originali sono protetti da copyright. I diritti di proprietà e il copyright di tutte le immagini mostrate appartengono ai rispettivi fotografi originali; sono usate solo per descrivere e illustrare l'attrazione pubblica Punto Panorámico - Circuito Chico e non per scopi commerciali. I dati di Google Maps sono usati secondo i Termini di servizio di Google.`,
    es: `El diseño del sitio y el contenido textual original están protegidos por derechos de autor. Los derechos de propiedad y los derechos de autor de todas las imágenes mostradas pertenecen a sus fotógrafos originales; se usan solo para describir e ilustrar la atracción pública Punto Panorámico - Circuito Chico y no con fines comerciales. Los datos de Google Maps se usan según los Términos del Servicio de Google.`,
  } as T,
  h2_liability: { zh: `责任限制`, en: `Limitation of Liability`, it: `Limitazione di responsabilità`, es: `Limitación de responsabilidad` } as T,
  p_liability: {
    zh: `本网站按"现状"提供，不作任何担保。对于因使用本网站信息而造成的任何损失，包括但不限于基于本网站内容做出的旅行决定，我们概不负责。`,
    en: `This website is provided "as is" without any warranties. We are not responsible for any losses resulting from the use of information on this website, including but not limited to travel decisions made based on the content of this website.`,
    it: `Questo sito è fornito "così com'è" senza alcuna garanzia. Non siamo responsabili per eventuali perdite derivanti dall'uso delle informazioni sul sito, inclusi, a titolo esemplificativo, i viaggi decisi in base ai suoi contenuti.`,
    es: `Este sitio se proporciona "tal cual", sin garantías. No nos responsabilizamos por pérdidas derivadas del uso de la información del sitio, incluidas las decisiones de viaje basadas en su contenido.`,
  } as T,
  backLink: { zh: `← 返回首页`, en: `← Back to home`, it: `← Torna alla home`, es: `← Volver al inicio` } as T,
};

// ── Cookie Settings Page ──
export const cookies = {
  title: { zh: `Cookie 设置 — miradorchico`, en: `Cookie Settings — miradorchico`, it: `Impostazioni cookie — miradorchico`, es: `Configuración de Cookies — miradorchico` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, it: `Ultimo aggiornamento: luglio 2026`, es: `Última actualización: Julio de 2026` } as T,
  h1: { zh: `Cookie 设置`, en: `Cookie Settings`, it: `Impostazioni cookie`, es: `Configuración de Cookies` } as T,
  intro: {
    zh: `我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。`,
    en: `We use cookies to improve your browsing experience. You can manage your preferences below.`,
    it: `Usiamo i cookie per migliorare la tua esperienza di navigazione. Puoi gestire le tue preferenze qui sotto.`,
    es: `Usamos cookies para mejorar su experiencia de navegación. Puede gestionar sus preferencias abajo.`,
  } as T,

  cat_necessary: { zh: `必要 Cookie`, en: `Necessary Cookies`, it: `Cookie necessari`, es: `Cookies necesarias` } as T,
  cat_necessary_desc: { zh: `这些 Cookie 对于网站正常运行至关重要，无法禁用。`, en: `These cookies are essential for the website to function properly and cannot be disabled.`, it: `Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere disattivati.`, es: `Estas cookies son esenciales para el funcionamiento del sitio y no se pueden desactivar.` } as T,
  alwaysActive: { zh: `始终保持活跃`, en: `Always active`, it: `Sempre attivi`, es: `Siempre activas` } as T,

  cat_analytics: { zh: `分析型 Cookie`, en: `Analytics Cookies`, it: `Cookie analitici`, es: `Cookies analíticas` } as T,
  cat_analytics_desc: { zh: `它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。`, en: `They help us understand how visitors interact with our website by collecting anonymous usage data.`, it: `Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo dati d'uso anonimi.`, es: `Nos ayudan a entender cómo los visitantes interactúan con el sitio recopilando datos de uso anónimos.` } as T,
  ga_label: 'Google Analytics',
  ga_desc: { zh: `它会收集访客如何使用我们网站的匿名信息。`, en: `Collects anonymous information about how visitors use our website.`, it: `Raccoglie informazioni anonime su come i visitatori usano il nostro sito.`, es: `Recopila información anónima sobre cómo los visitantes usan el sitio.` } as T,
  activated: { zh: `激活`, en: `Active`, it: `Attivo`, es: `Activa` } as T,

  cat_preference: { zh: `偏好 Cookie`, en: `Preference Cookies`, it: `Cookie di preferenza`, es: `Cookies de preferencia` } as T,
  cat_preference_desc: { zh: `它们会记住您的设置，例如语言和主题偏好。`, en: `They remember your settings, such as language and theme preferences.`, it: `Ricordano le tue impostazioni, come lingua e preferenze di tema.`, es: `Recuerdan sus ajustes, como idioma y preferencias de tema.` } as T,
  pref_label: { zh: `用户偏好`, en: `User Preferences`, it: `Preferenze utente`, es: `Preferencias del usuario` } as T,
  pref_desc: { zh: `保存您的语言偏好和网站设置。`, en: `Saves your language preferences and website settings.`, it: `Salva le tue preferenze linguistiche e le impostazioni del sito.`, es: `Guarda su preferencia de idioma y ajustes del sitio.` } as T,

  cat_marketing: { zh: `营销 Cookie`, en: `Marketing Cookies`, it: `Cookie di marketing`, es: `Cookies de marketing` } as T,
  cat_marketing_desc: { zh: `它们用于展示相关广告并衡量广告活动的有效性。`, en: `They are used to display relevant advertisements and measure the effectiveness of ad campaigns.`, it: `Servono a mostrare annunci pertinenti e misurare l'efficacia delle campagne.`, es: `Se usan para mostrar anuncios relevantes y medir la efectividad de campañas.` } as T,
  ads_label: { zh: `个性化广告`, en: `Personalized Ads`, it: `Annunci personalizzati`, es: `Anuncios personalizados` } as T,
  ads_desc: { zh: `它可以根据你的兴趣为你展示相关的广告。`, en: `Shows you relevant ads based on your interests.`, it: `Mostra annunci pertinenti in base ai tuoi interessi.`, es: `Muestra anuncios relevantes según sus intereses.` } as T,
  deactivated: { zh: `停用`, en: `Inactive`, it: `Inattivo`, es: `Inactiva` } as T,

  consent_title: { zh: `同意管理`, en: `Consent Management`, it: `Gestione del consenso`, es: `Gestión del consentimiento` } as T,
  consent_desc: { zh: `您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的功能。`, en: `You can change your cookie settings at any time. Please note that disabling certain cookies may affect the website's functionality.`, it: `Puoi cambiare le impostazioni dei cookie in qualsiasi momento. Disattivare alcuni cookie può influire sulle funzionalità del sito.`, es: `Puede cambiar sus ajustes de cookies en cualquier momento. Desactivar algunas puede afectar la funcionalidad del sitio.` } as T,
  savePrefs: { zh: `保存偏好设置`, en: `Save Preferences`, it: `Salva preferenze`, es: `Guardar preferencias` } as T,
  rejectAll: { zh: `拒绝一切`, en: `Reject All`, it: `Rifiuta tutto`, es: `Rechazar todo` } as T,
  backLink: { zh: `← 返回首页`, en: `← Back to home`, it: `← Torna alla home`, es: `← Volver al inicio` } as T,
};

// ── Meta ──
// SERP copy — Option B (landmark / viewpoint positioning).
// Strategy (driven by GSC: high impressions, ~0% CTR):
//   1. lead with the landmark role word ("Mirador" / "Viewpoint" / "观景台"),
//      which is how people describe this place in their own words
//   2. keep the official entity name "Punto Panorámico" + "Circuito Chico"
//   3. anchor the geography in parentheses for local relevance
//   4. description sells the view (Lago Moreno + Llao Llao) and the 4.9★ proof,
//      then closes with the practical intent (how to get there + map)
// Titles stay near ~60 characters so Google does not truncate them in the SERP.
export const meta = {
  title: {
    zh: `Punto Panorámico 观景台 · 怎么去、地图与莫雷诺湖（巴里洛切小环线）`,
    en: `Punto Panorámico Bariloche: Directions, Map & Views`,
    it: `Belvedere Punto Panorámico Bariloche: Come Arrivare e Mappa`,
    es: `Punto Panorámico Bariloche: Cómo Llegar y Mapa | Circuito Chico`,
  } as T,
  description: {
    zh: `到访巴里洛切的 Punto Panorámico 观景台（4.9★），正对莫雷诺湖与 Llao Llao 的开阔视野。含最新交通方式、地图与游览建议。`,
    en: `Visit Punto Panorámico in Bariloche (4.9★): location, map, views over Lago Moreno, photos and tips to plan your visit.`,
    it: `Visita il Punto Panorámico a Bariloche (4.9★): posizione, mappa, viste sul lago Moreno, foto e consigli per organizzare la visita.`,
    es: `Visitá el Punto Panorámico del Circuito Chico en Bariloche: ubicación, mapa, vistas del lago Moreno, fotos y consejos para organizar tu visita.`,
  } as T,
};

// ── Entity Semantic Binding (single-attraction SEO) ──
export const entity = {
  sectionNum: { zh: `实体信息`, en: `Entity`, it: `Entità`, es: `Entidad` } as T,
  h1: {
    zh: `Punto Panorámico（巴里洛切 · 小环线）`,
    en: `Punto Panorámico Bariloche (Circuito Chico)`,
    it: `Punto Panorámico di Bariloche (Circuito Chico)`,
    es: `Punto Panorámico de Bariloche (Circuito Chico)`,
  } as T,
  officialNameLabel: { zh: `官方全称`, en: `Official name`, it: `Nome ufficiale`, es: `Nombre oficial` } as T,
  locationLabel: { zh: `所在地`, en: `Location`, it: `Località`, es: `Ubicación` } as T,
  breadcrumbHome: { zh: `首页`, en: `Home`, it: `Home`, es: `Inicio` } as T,
  breadcrumbAria: { zh: `地理面包屑导航`, en: `Geographic breadcrumb`, it: `Percorso geografico`, es: `Ruta geográfica` } as T,
  aboutHeading: {
    zh: `关于 Punto Panorámico - Circuito Chico`,
    en: `About Punto Panorámico - Circuito Chico`,
    it: `Informazioni su Punto Panorámico - Circuito Chico`,
    es: `Acerca de Punto Panorámico - Circuito Chico`,
  } as T,
  welcome: {
    zh: `欢迎来到 <strong>Punto Panorámico - Circuito Chico</strong>，它被广泛认可为核心 <strong>Mirador Chico</strong>（即本域名 miradorchico.com 的含义）。这里位于阿根廷内格罗河省圣卡洛斯-德巴里洛切的心脏地带，是旅人游览纳韦尔瓦皮地区时的主要枢纽。`,
    en: `Welcome to <strong>Punto Panorámico - Circuito Chico</strong>, widely recognized as the central <strong>Mirador Chico</strong> (the meaning behind miradorchico.com). Located in the heart of <strong>San Carlos de Bariloche</strong>, <strong>Río Negro</strong>, <strong>Argentina</strong>, this destination serves as a primary hub for travellers visiting the Nahuel Huapi region.`,
    it: `Benvenuti al <strong>Punto Panorámico - Circuito Chico</strong>, ampiamente riconosciuto come il centrale <strong>Mirador Chico</strong> (il significato di miradorchico.com). Situato nel cuore di <strong>San Carlos de Bariloche</strong>, <strong>Río Negro</strong>, <strong>Argentina</strong>, è un punto di riferimento per chi visita la regione del Nahuel Huapi.`,
    es: `Bienvenido a <strong>Punto Panorámico - Circuito Chico</strong>, ampliamente reconocido como el <strong>Mirador Chico</strong> central (el significado de miradorchico.com). Situado en el corazón de <strong>San Carlos de Bariloche</strong>, <strong>Río Negro</strong>, <strong>Argentina</strong>, es un punto de referencia para quienes visitan la región del Nahuel Huapi.`,
  } as T,
  historyHeading: {
    zh: `Punto Panorámico - Circuito Chico 的历史与意义`,
    en: `History & Significance of Punto Panorámico - Circuito Chico`,
    it: `Storia e significato di Punto Panorámico - Circuito Chico`,
    es: `Historia y significado de Punto Panorámico - Circuito Chico`,
  } as T,
  history: {
    zh: `如今被称作“小环线”（Circuito Chico）的观景公路，源自 20 世纪初阿根廷国家公园先驱 Ezequiel Bustillo 的规划——他把纳韦尔瓦皮湖沿岸最动人的观景点用一条公路串联起来。观景台本身不设闸口、不设围栏；作为纳韦尔瓦皮国家公园内的公共空间，它始终免费、全天候向所有人开放。`,
    en: `The scenic road now known as the Circuito Chico traces back to the early 20th century, when Argentine National Parks pioneer Ezequiel Bustillo linked the finest viewpoints along Nahuel Huapi Lake into a single drive. The viewpoint itself has no gate and no fence: as a public space inside Nahuel Huapi National Park, it stays free and open to everyone, all day.`,
    it: `La strada panoramica oggi nota come Circuito Chico risale all'inizio del XX secolo, quando il pioniere dei Parchi Nazionali argentini Ezequiel Bustillo collegò in un unico percorso i migliori belvedere lungo il lago Nahuel Huapi. Il belvedere non ha cancelli né recinzioni: come spazio pubblico dentro il Parco Nazionale Nahuel Huapi, resta libero e aperto a tutti, tutto il giorno.`,
    es: `El camino panorámico hoy conocido como Circuito Chico se remonta a principios del siglo XX, cuando el pionero de los Parques Nacionales argentinos Ezequiel Bustillo unió en un solo recorrido los mejores miradores del lago Nahuel Huapi. El mirador no tiene portón ni cerco: como espacio público dentro del Parque Nacional Nahuel Huapi, sigue siendo gratuito y abierto a todos, todo el día.`,
  } as T,
  landmarksHeading: {
    zh: `Punto Panorámico 周边的地标与景点`,
    en: `Landmarks & Attractions Around Punto Panorámico`,
    it: `Luoghi e attrazioni intorno al Punto Panorámico`,
    es: `Lugares y atractivos alrededor del Punto Panorámico`,
  } as T,
  landmarks: {
    zh: `在游览 <strong>Punto Panorámico - Circuito Chico</strong> 时，访客可以轻松探访周边的历史地标与兴趣点，包括 <strong>Llao Llao</strong> 与 <strong>Cerro Catedral</strong>，以及 Colonia Suiza、Bahía López 和 Puerto Pañuelo。`,
    en: `When visiting <strong>Punto Panorámico - Circuito Chico</strong>, visitors can easily explore surrounding historical landmarks and points of interest, including <strong>Llao Llao</strong> and <strong>Cerro Catedral</strong>, as well as Colonia Suiza, Bahía López and Puerto Pañuelo.`,
    it: `Visitando il <strong>Punto Panorámico - Circuito Chico</strong>, i visitatori possono esplorare facilmente i luoghi storici e i punti d'interesse vicini, tra cui <strong>Llao Llao</strong> e <strong>Cerro Catedral</strong>, oltre a Colonia Suiza, Bahía López e Puerto Pañuelo.`,
    es: `Al visitar <strong>Punto Panorámico - Circuito Chico</strong>, los visitantes pueden explorar fácilmente los lugares históricos y puntos de interés cercanos, como <strong>Llao Llao</strong> y <strong>Cerro Catedral</strong>, además de Colonia Suiza, Bahía López y Puerto Pañuelo.`,
  } as T,
  exploreLink: { zh: `查看 Punto Panorámico 周边景点 →`, en: `See attractions near Punto Panorámico →`, it: `Vedi le attrazioni vicino al Punto Panorámico →`, es: `Ver atracciones cerca del Punto Panorámico →` } as T,
  historyLink: { zh: `阅读完整深度百科 →`, en: `Read the full encyclopedia →`, it: `Leggi l'enciclopedia completa →`, es: `Leer la enciclopedia completa →` } as T,
  // Exact-match anchor links used to reinforce internal topical relevance
  // (avoids generic "click here" anchors).
  jumpHeading: { zh: `本页快捷导航`, en: `Jump to`, it: `Vai a`, es: `Ir a` } as T,
  jumpLinks: [
    { label: { zh: `如何前往观景台`, en: `How to get to Punto Panorámico`, it: `Come arrivare al Punto Panorámico`, es: `Cómo llegar al Punto Panorámico` } as T, href: '#transport' },
    { label: { zh: `地图与 GPS 坐标`, en: `Map and GPS coordinates`, it: `Mappa e coordinate GPS`, es: `Mapa y coordenadas GPS` } as T, href: '#location' },
    { label: { zh: `附近吃饭`, en: `Where to eat nearby`, it: `Dove mangiare vicino`, es: `Dónde comer cerca` } as T, href: '#dining' },
    { label: { zh: `常见问题`, en: `Visitor FAQ`, it: `Domande frequenti`, es: `Preguntas frecuentes` } as T, href: '#faq' },
  ],
};

// ── Dining (targets the "restaurant" / "donde comer" search intent) ──
// Editorial note: the terrace itself is a free public space with no kiosk; the
// Restaurant Punto Panorámico is a separate private business right beside it.
// Descriptions stay orientation-only — no prices, no commercial endorsement.
export const dining = {
  sectionNum: { zh: `餐饮`, en: `Food & Drink`, it: `Dove mangiare`, es: `Gastronomía` } as T,
  heading: {
    zh: `在 Punto Panorámico 附近<em class="text-[color:var(--color-emerald)]">吃饭与喝咖啡</em>`,
    en: `Where to eat<em class="text-[color:var(--color-emerald)]"> near Punto Panorámico</em>`,
    it: `Dove mangiare<em class="text-[color:var(--color-emerald)]"> vicino al Punto Panorámico</em>`,
    es: `Dónde comer<em class="text-[color:var(--color-emerald)]"> cerca del Punto Panorámico</em>`,
  } as T,
  subtitle: {
    zh: `观景台本身不设小卖部，但紧邻的 Restaurant Punto Panorámico 提供烤肉与披萨；沿小环线再往前，还有 Colonia Suiza 与 Llao Llao 两个餐饮片区。`,
    en: `The terrace itself has no kiosk, but the Restaurant Punto Panorámico next door serves Argentine grill and pizza; further along the Circuito Chico, Colonia Suiza and the Llao Llao area add more options.`,
    it: `La terrazza non ha un chiosco, ma il Restaurant Punto Panorámico accanto serve cucina argentina alla griglia e pizza; più avanti lungo il Circuito Chico, Colonia Suiza e la zona di Llao Llao offrono altre opzioni.`,
    es: `La terraza no tiene kiosco, pero el Restaurant Punto Panorámico que está al lado sirve parrilla argentina y pizzas; más adelante por el Circuito Chico, Colonia Suiza y la zona de Llao Llao suman más opciones.`,
  } as T,
  items: [
    {
      name: { zh: `Restaurant Punto Panorámico`, en: `Restaurant Punto Panorámico`, it: `Restaurant Punto Panorámico`, es: `Restaurant Punto Panorámico` } as T,
      type: { zh: `阿根廷菜 · 烤肉与披萨`, en: `Argentine cuisine · Grill and pizza`, it: `Cucina argentina · Griglia e pizza`, es: `Cocina argentina · Parrilla y pizzas` } as T,
      where: { zh: `紧邻观景台 · 步行 0 分钟`, en: `Right at the viewpoint · 0 min walk`, it: `Accanto al belvedere · 0 min a piedi`, es: `Junto al mirador · 0 min a pie` } as T,
      desc: {
        zh: `观景台上唯一可以坐下来吃饭的地方，餐桌正对湖景。它是独立经营的私人餐厅，与免费开放的公共观景台不是一回事；旺季与周末容易满座。`,
        en: `The only place to sit down and eat right at the mirador, with tables facing the lake. It is a privately run business, separate from the free public terrace, and it fills up in high season and at weekends.`,
        it: `L'unico locale dove sedersi a mangiare proprio al belvedere, con tavoli affacciati sul lago. È una attività privata, diversa dalla terrazza pubblica e gratuita; in alta stagione e nei weekend si riempie.`,
        es: `El único local para comer justo en el mirador, con mesas frente al lago. Es un emprendimiento privado, distinto de la terraza pública y gratuita; en temporada alta y los fines de semana suele llenarse.`,
      } as T,
    },
    {
      name: { zh: `Colonia Suiza（瑞士村）`, en: `Colonia Suiza`, it: `Colonia Suiza`, es: `Colonia Suiza` } as T,
      type: { zh: `手工 kuchen 蛋糕 · 炭火烤肉`, en: `Home-made kuchen · Open-fire asado`, it: `Kuchen fatto in casa · Asado alla griglia`, es: `Kuchen casero · Asado a la parrilla` } as T,
      where: { zh: `沿小环线继续前行`, en: `Further along the Circuito Chico`, it: `Più avanti lungo il Circuito Chico`, es: `Más adelante por el Circuito Chico` } as T,
      desc: {
        zh: `由瑞士移民建立的村落，以 kuchen（奶油蛋糕）和炭火烤肉闻名，是环线途中最有烟火气的一站。`,
        en: `A village founded by Swiss settlers, known for its kuchen (cream cake) and open-fire asado — the tastiest stop on the loop.`,
        it: `Villaggio fondato da coloni svizzeri, noto per il kuchen (torta alla crema) e l'asado alla griglia: la sosta più gustosa del giro.`,
        es: `Pueblo fundado por colonos suizos, famoso por su kuchen (torta de crema) y el asado a la parrilla: la parada más sabrosa del circuito.`,
      } as T,
    },
    {
      name: { zh: `Llao Llao 与 Puerto Pañuelo 一带`, en: `Llao Llao & Puerto Pañuelo`, it: `Llao Llao e Puerto Pañuelo`, es: `Llao Llao y Puerto Pañuelo` } as T,
      type: { zh: `咖啡馆 · 酒店餐厅`, en: `Cafés · Hotel restaurants`, it: `Caffè · Ristoranti d'hotel`, es: `Cafeterías · Restaurantes de hotel` } as T,
      where: { zh: `车程数分钟`, en: `A few minutes by car`, it: `Pochi minuti in auto`, es: `A pocos minutos en auto` } as T,
      desc: {
        zh: `Llao Llao 与 Puerto Pañuelo 一带聚集了咖啡馆与酒店餐厅，可望见海湾；适合在观景台前后喝杯咖啡或安静吃顿午饭。`,
        en: `The Llao Llao and Puerto Pañuelo area has cafés and hotel restaurants overlooking the bay — handy for a coffee or a quiet lunch before or after the viewpoint.`,
        it: `La zona di Llao Llao e Puerto Pañuelo offre caffè e ristoranti d'hotel con vista sulla baia: comodo per un caffè o un pranzo tranquillo prima o dopo il belvedere.`,
        es: `La zona de Llao Llao y Puerto Pañuelo reúne cafeterías y restaurantes de hotel con vista a la bahía: buena opción para un café o un almuerzo tranquilo antes o después del mirador.`,
      } as T,
    },
  ],
  transportLink: { zh: `如何前往 Punto Panorámico`, en: `How to get to Punto Panorámico`, it: `Come arrivare al Punto Panorámico`, es: `Cómo llegar al Punto Panorámico` } as T,
  disclaimer: {
    zh: `以上仅为餐饮区域的位置提示，不构成商业推荐。价格与营业时间常有变动，请以现场或 Google 地图信息为准。`,
    en: `This is orientation information on where to find food, not a commercial recommendation. Prices and opening hours change: check on site or on Google Maps.`,
    it: `Informazioni orientative su dove trovare da mangiare, non una raccomandazione commerciale. Prezzi e orari cambiano: verifica sul posto o su Google Maps.`,
    es: `Información orientativa sobre dónde encontrar comida, no una recomendación comercial. Precios y horarios cambian: verifíquelos en el lugar o en Google Maps.`,
  } as T,
};

// ── Location & Map ──
export const locationMap = {
  sectionNum: { zh: `位置与地图`, en: `Location`, it: `Posizione`, es: `Ubicación` } as T,
  heading: {
    zh: `位置与到访方式：圣卡洛斯-德巴里洛切的 Punto Panorámico`,
    en: `Location & How to Visit Punto Panorámico in San Carlos de Bariloche`,
    it: `Posizione e come visitare il Punto Panorámico a San Carlos de Bariloche`,
    es: `Ubicación y cómo visitar el Punto Panorámico en San Carlos de Bariloche`,
  } as T,
  subtitle: {
    zh: `Punto Panorámico - Circuito Chico 位于小环线（Cto. Chico / RP77）旁，距巴里洛切市中心约 24 公里。以下为官方地图定位与一致的名称、地址信息，方便您导航与核实。`,
    en: `Punto Panorámico - Circuito Chico sits beside the Circuito Chico (Cto. Chico / RP77), about 24 km from downtown Bariloche. Below is the official map location together with consistent name and address details for navigation and verification.`,
    it: `Il Punto Panorámico - Circuito Chico si trova accanto al Circuito Chico (Cto. Chico / RP77), a circa 24 km dal centro di Bariloche. Qui sotto la posizione ufficiale sulla mappa con nome e indirizzo coerenti per navigare e verificare.`,
    es: `Punto Panorámico - Circuito Chico está junto al Circuito Chico (Cto. Chico / RP77), a unos 24 km del centro de Bariloche. Abajo está la ubicación oficial en el mapa junto con el nombre y la dirección coherentes para navegar y verificar.`,
  } as T,
  addressLabel: { zh: `地址`, en: `Address`, it: `Indirizzo`, es: `Dirección` } as T,
  addressValue: { zh: `Cto. Chico, San Carlos de Bariloche, Río Negro R8400, 阿根廷`, en: `Cto. Chico, San Carlos de Bariloche, Río Negro R8400, Argentina`, it: `Cto. Chico, San Carlos de Bariloche, Río Negro R8400, Argentina`, es: `Cto. Chico, San Carlos de Bariloche, Río Negro R8400, Argentina` } as T,
  plusCodeLabel: { zh: `Plus Code`, en: `Plus Code`, it: `Plus Code`, es: `Plus Code` } as T,
  coordsLabel: { zh: `坐标`, en: `Coordinates`, it: `Coordinate`, es: `Coordenadas` } as T,
  hoursLabel: { zh: `开放时间`, en: `Hours`, it: `Orari`, es: `Horario` } as T,
  hoursValue: { zh: `全天 24 小时 · 免费`, en: `Open 24 h · Free`, it: `Aperto 24 h · Gratis`, es: `Abierto 24 h · Gratis` } as T,
  directionsLabel: { zh: `如何到达`, en: `Getting there`, it: `Come arrivare`, es: `Cómo llegar` } as T,
  directions: {
    zh: `从市中心沿小环线 RP77 向西南自驾约 25–35 分钟；也可打车 / remis 直达，或乘坐开往 Llao Llao 方向的公交并请司机在观景台附近停靠。全线为铺装柏油路。`,
    en: `Drive about 25–35 minutes southwest from downtown along the RP77 Circuito Chico; you can also arrive directly by taxi/remis, or take a bus toward Llao Llao and ask the driver to stop near the viewpoint. The road is fully paved.`,
    it: `In auto circa 25–35 minuti dal centro verso sud-ovest lungo la RP77 del Circuito Chico; puoi anche arrivare direttamente in taxi/remis, oppure prendere un autobus verso Llao Llao e chiedere all'autista di fermarsi vicino al belvedere. Strada tutta asfaltata.`,
    es: `En auto, unos 25–35 minutos desde el centro hacia el suroeste por la RP77 del Circuito Chico; también puede llegar directamente en taxi/remis, o tomar un colectivo hacia Llao Llao y pedirle al chofer que pare cerca del mirador. Camino totalmente pavimentado.`,
  } as T,
  openInMaps: { zh: `在 Google 地图中打开`, en: `Open in Google Maps`, it: `Apri in Google Maps`, es: `Abrir en Google Maps` } as T,
  mapTitle: { zh: `Punto Panorámico - Circuito Chico 谷歌地图位置`, en: `Google Map of Punto Panorámico - Circuito Chico`, it: `Mappa Google del Punto Panorámico - Circuito Chico`, es: `Mapa de Google de Punto Panorámico - Circuito Chico` } as T,
  officialText: {
    zh: `如需官方最新信息与区域旅游资讯，请访问 <a href="https://barilocheturismo.gob.ar/es/circuito-chico" target="_blank" rel="noopener noreferrer">阿根廷 / 内格罗河省官方旅游门户</a>，以及 <a href="https://www.argentina.gob.ar/parquesnacionales/nahuelhuapi" target="_blank" rel="noopener noreferrer">纳韦尔瓦皮国家公园官方页面</a>。`,
    en: `For official updates and regional tourism information, visit the <a href="https://barilocheturismo.gob.ar/es/circuito-chico" target="_blank" rel="noopener noreferrer">Argentina / Río Negro Official Tourism Portal</a> and the <a href="https://www.argentina.gob.ar/parquesnacionales/nahuelhuapi" target="_blank" rel="noopener noreferrer">official Nahuel Huapi National Park page</a>.`,
    it: `Per aggiornamenti ufficiali e informazioni turistiche regionali, visita il <a href="https://barilocheturismo.gob.ar/es/circuito-chico" target="_blank" rel="noopener noreferrer">Portale turistico ufficiale di Argentina / Río Negro</a> e la <a href="https://www.argentina.gob.ar/parquesnacionales/nahuelhuapi" target="_blank" rel="noopener noreferrer">pagina ufficiale del Parco Nazionale Nahuel Huapi</a>.`,
    es: `Para información oficial actualizada y turismo regional, visite el <a href="https://barilocheturismo.gob.ar/es/circuito-chico" target="_blank" rel="noopener noreferrer">Portal Oficial de Turismo de Argentina / Río Negro</a> y la <a href="https://www.argentina.gob.ar/parquesnacionales/nahuelhuapi" target="_blank" rel="noopener noreferrer">página oficial del Parque Nacional Nahuel Huapi</a>.`,
  } as T,
};

// ── Sources & Image Credits (E-E-A-T) ──
export const sources = {
  sectionNum: { zh: `资料来源`, en: `Sources`, it: `Fonti`, es: `Fuentes` } as T,
  heading: { zh: `资料来源与官方参考`, en: `Sources & Official References`, it: `Fonti e riferimenti ufficiali`, es: `Fuentes y referencias oficiales` } as T,
  intro: {
    zh: `本页信息由 miradorchico 独立科普团队根据公开的政府、旅游局与国家公园资料整理，用于增强内容的可核验性与专业性。下列外链仅用于公共信息核验，不构成任何商业推荐。`,
    en: `The information on this page was compiled by the independent miradorchico editorial team from public government, tourism and National Park sources, to strengthen the verifiability and expertise of the content. The external links below are for public-information verification only and are not commercial recommendations.`,
    it: `Le informazioni di questa pagina sono state raccolte dal team editoriale indipendente di miradorchico da fonti pubbliche di governo, turismo e Parchi Nazionali, per rafforzare la verificabilità e la competenza dei contenuti. I link esterni sotto servono solo alla verifica di informazioni pubbliche e non sono raccomandazioni commerciali.`,
    es: `La información de esta página fue compilada por el equipo editorial independiente de miradorchico a partir de fuentes públicas de gobierno, turismo y Parques Nacionales, para reforzar la verificabilidad y la idoneidad del contenido. Los enlaces externos de abajo son solo para verificar información pública y no son recomendaciones comerciales.`,
  } as T,
  officialLabel: { zh: `官方来源`, en: `Official sources`, it: `Fonti ufficiali`, es: `Fuentes oficiales` } as T,
  imageCreditTitle: { zh: `图片产权`, en: `Image credits`, it: `Diritti sulle immagini`, es: `Créditos de imagen` } as T,
  imageCredit: {
    zh: `本网站所展示的所有图片产权及版权均归原摄影者所有。图片仅用于介绍与说明 Punto Panorámico - Circuito Chico 这一公共景点，不用于任何商业用途。`,
    en: `The property rights and copyright of all images displayed on this website belong to their original photographers. Images are used solely to describe and illustrate the public attraction Punto Panorámico - Circuito Chico and are not used for any commercial purpose.`,
    it: `I diritti di proprietà e il copyright di tutte le immagini mostrate su questo sito appartengono ai rispettivi fotografi originali. Le immagini sono usate solo per descrivere e illustrare l'attrazione pubblica Punto Panorámico - Circuito Chico e non per scopi commerciali.`,
    es: `Los derechos de propiedad y los derechos de autor de todas las imágenes mostradas en este sitio pertenecen a sus fotógrafos originales. Las imágenes se usan solo para describir e ilustrar la atracción pública Punto Panorámico - Circuito Chico y no con fines comerciales.`,
  } as T,
  mapsListing: { zh: `Google 地图商户/地点条目`, en: `Google Maps place listing`, it: `Scheda luogo su Google Maps`, es: `Ficha del lugar en Google Maps` } as T,
  mapsNote: { zh: `用于核验名称、地址与评分等公开地点信息。`, en: `Used to verify the public place name, address and rating.`, it: `Usata per verificare nome, indirizzo e valutazione del luogo pubblico.`, es: `Se usa para verificar el nombre, la dirección y la valoración del lugar público.` } as T,
};

// ── Image credit (short, used in the footer) ──
export const imageCredit = {
  zh: `图片产权：本网站所展示的所有图片产权及版权均归原摄影者所有。`,
  en: `Image credits: the property rights and copyright of all images displayed on this website belong to their original photographers.`,
  it: `Diritti sulle immagini: i diritti di proprietà e il copyright di tutte le immagini di questo sito appartengono ai rispettivi fotografi originali.`,
  es: `Créditos de imagen: los derechos de propiedad y los derechos de autor de todas las imágenes de este sitio pertenecen a sus fotógrafos originales.`,
} as T;
