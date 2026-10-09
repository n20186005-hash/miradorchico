import type { Lang } from './utils';

type T = { zh: string; en: string; it: string; es: string };

export type TopicSlug = 'como-llegar' | 'circuito-chico-recorrido' | 'vistas-lago-moreno';

export interface TopicSection {
  heading: T;
  body: T;
}
export interface TopicFaq {
  q: T;
  a: T;
}
export interface Topic {
  slug: TopicSlug;
  label: T; // short label for the related-guides list
  h1: T;
  description: T; // meta description
  intro: T;
  sections: TopicSection[];
  faq: TopicFaq[];
}

export const TOPICS: Topic[] = [
  {
    slug: 'como-llegar',
    label: {
      zh: `如何前往观景台`,
      en: `How to get there`,
      it: `Come arrivare`,
      es: `Cómo llegar`,
    },
    h1: {
      zh: `如何前往 Punto Panorámico（巴里洛切）`,
      en: `How to get to Punto Panorámico (Bariloche)`,
      it: `Come arrivare al Punto Panorámico (Bariloche)`,
      es: `Cómo llegar al Punto Panorámico (Bariloche)`,
    },
    description: {
      zh: `如何前往巴里洛切小环线上的 Punto Panorámico：距离、自驾、公交、打车与停车建议。`,
      en: `How to get to Punto Panorámico on the Circuito Chico in Bariloche: distance, car, bus, taxi and where to park.`,
      it: `Come arrivare al Punto Panorámico sul Circuito Chico a Bariloche: distanza, auto, bus, taxi e dove parcheggiare.`,
      es: `Cómo llegar al Punto Panorámico del Circuito Chico en Bariloche: distancia, auto, colectivo, taxi y dónde estacionar.`,
    },
    intro: {
      zh: `Punto Panorámico 位于小环线（Circuito Chico / RP77）旁，距巴里洛切市中心约 24 公里，自驾通常约 25–35 分钟。全线为铺装柏油路，是巴里洛切最经典的观景公路之一。`,
      en: `Punto Panorámico sits beside the Circuito Chico (RP77), about 24 km from downtown Bariloche — usually a 25–35 minute drive. The road is fully paved and is one of Bariloche's classic scenic drives.`,
      it: `Il Punto Panorámico si trova accanto al Circuito Chico (RP77), a circa 24 km dal centro di Bariloche — di solito 25–35 minuti in auto. La strada è tutta asfaltata ed è uno degli itinerari panoramici classici di Bariloche.`,
      es: `El Punto Panorámico está junto al Circuito Chico (RP77), a unos 24 km del centro de Bariloche — normalmente 25–35 minutos en auto. El camino está totalmente pavimentado y es una de las rutas panorámicas clásicas de Bariloche.`,
    },
    sections: [
      {
        heading: {
          zh: `自驾 / 摩托车`,
          en: `By car or motorbike`,
          it: `In auto o moto`,
          es: `En auto o moto`,
        },
        body: {
          zh: `沿 RP77 小环线向西南行驶约 24 公里，观景台在山路右侧一处弯道旁，设有路边停车带。全程铺装柏油，普通轿车亦可轻松到达。建议上午或黄昏前往，以避开午后旅行团。`,
          en: `Drive about 24 km southwest along the RP77 Circuito Chico; the viewpoint is by a bend on the right with a roadside pull-off. Fully paved — an ordinary car manages it easily. Mornings or dusk avoid the afternoon tour groups.`,
          it: `Guida circa 24 km a sud-ovest lungo la RP77 del Circuito Chico; il belvedere è accanto a una curva a destra, con uno spazio di sosta. Tutto asfaltato: un'auto normale arriva facilmente. Vai al mattino o al tramonto per evitare i gruppi del pomeriggio.`,
          es: `Conduce unos 24 km al suroeste por la RP77 del Circuito Chico; el mirador queda junto a una curva a la derecha, con un espacio de estacionamiento junto a la ruta. Totalmente pavimentado: un auto común llega sin problema. Vaya por la mañana o al atardecer para evitar las excursiones de la tarde.`,
        },
      },
      {
        heading: {
          zh: `公交、出租与半日游`,
          en: `Bus, taxi & tours`,
          it: `Bus, taxi e tour`,
          es: `Colectivo, taxi y tours`,
        },
        body: {
          zh: `巴里洛切的公交线路（如开往 Llao Llao / 半岛方向的 Línea 20）沿 Av. Bustillo 与小环线走廊运行，但观景台附近没有独立站点；乘车时请提前请司机在观景台附近停靠，或参加小环线半日游直达。无车旅客也可选择 remis / taxi。`,
          en: `Bariloche's public buses (e.g. the Línea 20 toward Llao Llao / the peninsula) run along Av. Bustillo and the Circuito Chico corridor, but there is no dedicated stop at the viewpoint — ask the driver to drop you off nearby, or join a Circuito Chico half-day tour. Car-free travellers can also use a remis / taxi.`,
          it: `Gli autobus di Bariloche (es. la Línea 20 verso Llao Llao / la penisola) percorrono Av. Bustillo e il corridoio del Circuito Chico, ma non c'è una fermata dedicata al belvedere: chiedi all'autista di farti scendere vicino o unisciti a un tour di mezza giornata del Circuito Chico. Chi è senza auto può usare un remis / taxi.`,
          es: `Los colectivos de Bariloche (p. ej. la Línea 20 hacia Llao Llao / la península) recorren Av. Bustillo y el corredor del Circuito Chico, pero no hay una parada dedicada en el mirador: pídele al chofer que te baje cerca o únete a un tour de medio día por el Circuito Chico. Quienes no tienen auto también pueden usar un remis / taxi.`,
        },
      },
      {
        heading: {
          zh: `停车建议`,
          en: `Parking tips`,
          it: `Dove parcheggiare`,
          es: `Consejos de estacionamiento`,
        },
        body: {
          zh: `观景台旁设有路边停车带。请靠边安全停放，切勿停在弯道视线盲区，也不要阻塞小环线交通。旺季与周末车位较紧张，建议上午或黄昏前往。`,
          en: `There is a roadside pull-off beside the viewpoint. Park well to the side, never in a blind corner, and do not block Circuito Chico traffic. Spaces fill up on weekends and in high season, so mornings or dusk are best.`,
          it: `C'è uno spazio di sosta lungo la strada accanto al belvedere. Parcheggia bene a lato, mai in un punto cieco, e non bloccare il traffico del Circuito Chico. Nei weekend e in alta stagione si riempie: meglio al mattino o al tramonto.`,
          es: `Hay un espacio de estacionamiento junto a la ruta, al lado del mirador. Estacione bien al costado, nunca en una curva ciega, y no bloquee el tránsito del Circuito Chico. Se llena los fines de semana y en temporada alta: mejor por la mañana o al atardecer.`,
        },
      },
    ],
    faq: [
      {
        q: {
          zh: `从市中心要开多久？`,
          en: `How long does the drive take from downtown?`,
          it: `Quanto dura il tragitto dal centro?`,
          es: `¿Cuánto dura el viaje desde el centro?`,
        },
        a: {
          zh: `约 25–35 分钟，具体取决于你走小环线的哪一段。观景台约在距市中心 24 公里处。`,
          en: `About 25–35 minutes, depending on the stretch of the Circuito Chico you take. The viewpoint is roughly 24 km from downtown.`,
          it: `Circa 25–35 minuti, a seconda del tratto del Circuito Chico. Il belvedere è a circa 24 km dal centro.`,
          es: `Unos 25–35 minutos, según el tramo del Circuito Chico que tomes. El mirador está a unos 24 km del centro.`,
        },
      },
      {
        q: {
          zh: `公交能直达吗？`,
          en: `Does the bus stop right there?`,
          it: `L'autobus ferma proprio lì?`,
          es: `¿El colectivo llega hasta allí?`,
        },
        a: {
          zh: `观景台附近没有独立公交站点。开往 Llao Llao 方向的公交沿小环线走廊运行，可请司机在观景台附近停靠；更稳妥的方式是参加小环线半日游或打车。`,
          en: `There is no dedicated bus stop at the viewpoint. Buses toward Llao Llao run along the Circuito Chico corridor — ask the driver to stop nearby; a Circuito Chico tour or taxi is the more reliable option.`,
          it: `Non c'è una fermata dedicata al belvedere. Gli autobus verso Llao Llao percorrono il corridoio del Circuito Chico: chiedi all'autista di fermarsi vicino; un tour del Circuito Chico o un taxi sono l'opzione più sicura.`,
          es: `No hay una parada dedicada en el mirador. Los colectivos hacia Llao Llao recorren el corredor del Circuito Chico: pídele al chofer que pare cerca; un tour del Circuito Chico o un taxi son la opción más segura.`,
        },
      },
      {
        q: {
          zh: `可以骑自行车去吗？`,
          en: `Can I cycle there?`,
          it: `Posso andarci in bicicletta?`,
          es: `¿Se puede ir en bicicleta?`,
        },
        a: {
          zh: `可以。小环线是巴里洛切经典的公路骑行路线，铺装良好；但安第斯西风常形成强逆风，请预留体力并穿戴防风装备。`,
          en: `Yes. The Circuito Chico is Bariloche's classic road-cycling loop — well paved; but the Andean westerlies often mean a strong headwind, so save energy and wear wind gear.`,
          it: `Sì. Il Circuito Chico è il classico giro in bici da corsa di Bariloche: ben asfaltato; ma il vento occidentale andino è spesso un forte contrario, quindi risparmia energia e indossa abbigliamento anti-vento.`,
          es: `Sí. El Circuito Chico es el clásico recorrido en bicicleta de Bariloche: bien pavimentado; pero el viento oeste andino suele ser un fuerte viento de frente, así que guarde energía y use ropa cortaviento.`,
        },
      },
    ],
  },

  {
    slug: 'circuito-chico-recorrido',
    label: {
      zh: `小环线全程路线`,
      en: `Circuito Chico route`,
      it: `Itinerario del Circuito Chico`,
      es: `Recorrido del Circuito Chico`,
    },
    h1: {
      zh: `小环线（Circuito Chico）路线`,
      en: `Circuito Chico route (Bariloche)`,
      it: `Itinerario del Circuito Chico (Bariloche)`,
      es: `Recorrido del Circuito Chico (Bariloche)`,
    },
    description: {
      zh: `巴里洛切小环线：一条约 27 公里的环形景观公路，途经 Llao Llao、Colonia Suiza 与 Punto Panorámico。`,
      en: `Bariloche's Circuito Chico: a ~27 km scenic loop through Llao Llao, Colonia Suiza and Punto Panorámico.`,
      it: `Il Circuito Chico di Bariloche: un anello panoramico di ~27 km tra Llao Llao, Colonia Suiza e il Punto Panorámico.`,
      es: `El Circuito Chico de Bariloche: un recorrido panorámico de ~27 km por Llao Llao, Colonia Suiza y el Punto Panorámico.`,
    },
    intro: {
      zh: `小环线（Circuito Chico）是一条约 27 公里的环形景观公路，从 Av. Bustillo（RP77）向外延伸再回到原点。20 世纪初，阿根廷国家公园先驱 Ezequiel Bustillo 把纳韦尔瓦皮湖沿岸最动人的观景点串联成一条公路，Punto Panorámico 便是其中一站。`,
      en: `The Circuito Chico is a ~27 km scenic loop that branches off Av. Bustillo (RP77) and returns to the same point. In the early 20th century, Argentine National Parks pioneer Ezequiel Bustillo linked the finest viewpoints along Nahuel Huapi Lake into a single drive — and Punto Panorámico is one of its stops.`,
      it: `Il Circuito Chico è un anello panoramico di ~27 km che si stacca da Av. Bustillo (RP77) e vi ritorna. All'inizio del XX secolo, il pioniere dei Parchi Nazionali argentini Ezequiel Bustillo unì in un unico percorso i migliori belvedere lungo il lago Nahuel Huapi — e il Punto Panorámico è una delle sue tappe.`,
      es: `El Circuito Chico es un circuito panorámico de ~27 km que sale de Av. Bustillo (RP77) y vuelve al mismo punto. A principios del siglo XX, el pionero de los Parques Nacionales argentinos Ezequiel Bustillo unió en un solo recorrido los mejores miradores del lago Nahuel Huapi — y el Punto Panorámico es una de sus paradas.`,
    },
    sections: [
      {
        heading: {
          zh: `起源与历史`,
          en: `Origin & history`,
          it: `Origine e storia`,
          es: `Origen e historia`,
        },
        body: {
          zh: `如今被称为"小环线"的观景公路，源自 20 世纪初 Ezequiel Bustillo 的规划——他把纳韦尔瓦皮湖沿岸最动人的观景点用一条公路串联起来。观景台本身作为纳韦尔瓦皮国家公园内的公共空间，始终免费、全天候向所有人开放。`,
          en: `The scenic road now known as the Circuito Chico traces back to the early 20th century, when Ezequiel Bustillo linked the finest viewpoints along Nahuel Huapi Lake into a single drive. The viewpoint itself, a public space inside Nahuel Huapi National Park, stays free and open to everyone, all day.`,
          it: `La strada panoramica oggi nota come Circuito Chico risale all'inizio del XX secolo, quando Ezequiel Bustillo collegò in un unico percorso i migliori belvedere lungo il lago Nahuel Huapi. Il belvedere, spazio pubblico dentro il Parco Nazionale Nahuel Huapi, resta libero e aperto a tutti, tutto il giorno.`,
          es: `El camino panorámico hoy conocido como Circuito Chico se remonta a principios del siglo XX, cuando Ezequiel Bustillo unió en un solo recorrido los mejores miradores del lago Nahuel Huapi. El mirador, como espacio público dentro del Parque Nacional Nahuel Huapi, sigue siendo gratuito y abierto a todos, todo el día.`,
        },
      },
      {
        heading: {
          zh: `主要停靠点`,
          en: `Main stops`,
          it: `Principali tappe`,
          es: `Principales paradas`,
        },
        body: {
          zh: `从巴里洛切出发，沿途通常包括 Playa Bonita、正对莫雷诺湖与劳劳半岛的 Punto Panorámico、劳劳酒店与高尔夫球场、以奶油蛋糕闻名的 Colonia Suiza、湖湾短徒步的 Bahía López，以及小环线尽头的乘船港口 Puerto Pañuelo。`,
          en: `Starting from Bariloche, the route typically includes Playa Bonita, Punto Panorámico facing Lago Moreno and the Llao Llao peninsula, the Llao Llao hotel and golf course, Colonia Suiza (famous for cream cake), Bahía López with its short hike, and Puerto Pañuelo, the boat port at the loop's end.`,
          it: `Partendo da Bariloche, il percorso include di solito Playa Bonita, il Punto Panorámico di fronte al lago Moreno e alla penisola di Llao Llao, l'hotel e il campo da golf di Llao Llao, Colonia Suiza (famosa per la torta alla crema), Bahía López con la sua breve passeggiata e Puerto Pañuelo, il porto delle barche alla fine dell'anello.`,
          es: `Partiendo de Bariloche, el recorrido suele incluir Playa Bonita, el Punto Panorámico frente al lago Moreno y la península de Llao Llao, el hotel y el campo de golf de Llao Llao, Colonia Suiza (famosa por su torta de crema), Bahía López con su corta caminata y Puerto Pañuelo, el puerto de embarcaciones al final del circuito.`,
        },
      },
      {
        heading: {
          zh: `如何游览`,
          en: `How to drive it`,
          it: `Come percorrerlo`,
          es: `Cómo recorrerlo`,
        },
        body: {
          zh: `最方便的方式是自驾或参加半日游，全程铺装柏油。若连同 Llao Llao、Colonia Suiza 等停靠点一起，轻松安排半日。观景台约在距市中心 24 公里处，沿途弯道较多，请注意车速与风向。`,
          en: `The easiest way is by car or a half-day tour; the road is fully paved. Pair it with Llao Llao, Colonia Suiza and other stops and you have an easy half-day. The viewpoint is roughly 24 km from downtown, and the many bends call for care with speed and wind.`,
          it: `Il modo più semplice è in auto o con un tour di mezza giornata; la strada è tutta asfaltata. Unendola a Llao Llao, Colonia Suiza e altre tappe completi facilmente mezza giornata. Il belvedere è a circa 24 km dal centro e le molte curve richiedono prudenza con velocità e vento.`,
          es: `Lo más práctico es en auto o con un tour de medio día; el camino está totalmente pavimentado. Sumando Llao Llao, Colonia Suiza y otras paradas completas media tarde. El mirador está a unos 24 km del centro y sus muchas curvas piden cuidado con la velocidad y el viento.`,
        },
      },
    ],
    faq: [
      {
        q: {
          zh: `小环线有多少公里？`,
          en: `How long is the Circuito Chico?`,
          it: `Quanti km ha il Circuito Chico?`,
          es: `¿Cuántos km tiene el Circuito Chico?`,
        },
        a: {
          zh: `约 27 公里的环形公路，从 Av. Bustillo 向外延伸再回到原点。Punto Panorámico 位于这条环线之上。`,
          en: `About 27 km as a loop that branches off Av. Bustillo and returns to the same point. Punto Panorámico sits on this loop.`,
          it: `Circa 27 km come anello che si stacca da Av. Bustillo e vi ritorna. Il Punto Panorámico si trova su questo anello.`,
          es: `Unos 27 km en forma de circuito que sale de Av. Bustillo y vuelve al mismo punto. El Punto Panorámico está sobre este circuito.`,
        },
      },
      {
        q: {
          zh: `Punto Panorámico 在小环线上吗？`,
          en: `Is Punto Panorámico on the loop?`,
          it: `Il Punto Panorámico è nel circuito?`,
          es: `¿El Punto Panorámico está en el circuito?`,
        },
        a: {
          zh: `是的，它就在小环线（RP77 / Circuito Chico）旁，正对莫雷诺湖与劳劳半岛。`,
          en: `Yes — it sits right beside the Circuito Chico (RP77), facing Lago Moreno and the Llao Llao peninsula.`,
          it: `Sì — si trova proprio accanto al Circuito Chico (RP77), di fronte al lago Moreno e alla penisola di Llao Llao.`,
          es: `Sí — está justo junto al Circuito Chico (RP77), frente al lago Moreno y la península de Llao Llao.`,
        },
      },
      {
        q: {
          zh: `走完要多久？`,
          en: `How long does it take?`,
          it: `Quanto tempo richiede?`,
          es: `¿Cuánto tiempo lleva?`,
        },
        a: {
          zh: `若只驾车快速通过约 1 小时；若连同主要停靠点游玩，轻松安排半日。`,
          en: `A quick drive-through is about an hour; with the main stops it easily fills a half-day.`,
          it: `Solo in auto, circa un'ora; con le tappe principali riempie facilmente mezza giornata.`,
          es: `Solo en auto, unos una hora; con las paradas principales completa fácilmente media tarde.`,
        },
      },
    ],
  },

  {
    slug: 'vistas-lago-moreno',
    label: {
      zh: `莫雷诺湖观景`,
      en: `Lago Moreno views`,
      it: `Viste del lago Moreno`,
      es: `Vistas del lago Moreno`,
    },
    h1: {
      zh: `从 Punto Panorámico 看莫雷诺湖`,
      en: `Views of Lago Moreno from Punto Panorámico`,
      it: `Viste del lago Moreno dal Punto Panorámico`,
      es: `Vistas del lago Moreno desde el Punto Panorámico`,
    },
    description: {
      zh: `从 Punto Panorámico 能看到什么：莫雷诺湖、劳劳半岛、纳韦尔瓦皮湖与特罗纳多峰，以及最佳拍摄时间。`,
      en: `What you see from Punto Panorámico: Lago Moreno, the Llao Llao peninsula, Nahuel Huapi Lake and Cerro Tronador — plus the best time for photos.`,
      it: `Cosa si vede dal Punto Panorámico: il lago Moreno, la penisola di Llao Llao, il lago Nahuel Huapi e il Cerro Tronador — e il momento migliore per fotografare.`,
      es: `Qué se ve desde el Punto Panorámico: el lago Moreno, la península de Llao Llao, el lago Nahuel Huapi y el Cerro Tronador, además del mejor momento para fotografiar.`,
    },
    intro: {
      zh: `Punto Panorámico 正对莫雷诺湖（Lago Moreno）与劳劳半岛（Península Llao Llao）的开阔水面，侧旁可见纳韦尔瓦皮湖，远处是海拔 3,554 米的特罗纳多峰与劳劳酒店。晴朗黄昏时，雪峰会被夕阳染成金红。`,
      en: `Punto Panorámico faces the open water of Lago Moreno and the Llao Llao peninsula, with Lago Nahuel Huapi beside it and snow-capped Cerro Tronador (3,554 m) rising beyond, along with the historic Llao Llao hotel. On a clear dusk the peak turns gold-red.`,
      it: `Il Punto Panorámico è di fronte alle acque aperte del lago Moreno e della penisola di Llao Llao, con il lago Nahuel Huapi accanto e il Cerro Tronador (3.554 m) più in là, insieme all'storico hotel di Llao Llao. In un tramonto sereno la cima si tinge d'oro e rosso.`,
      es: `El Punto Panorámico tiene enfrente las aguas abiertas del lago Moreno y la península de Llao Llao, con el lago Nahuel Huapi al lado y el Cerro Tronador (3.554 m) al fondo, junto al histórico hotel de Llao Llao. En un atardecer despejado la cumbre se tiñe de oro y rojo.`,
    },
    sections: [
      {
        heading: {
          zh: `莫雷诺湖与劳劳半岛`,
          en: `Lago Moreno & Llao Llao`,
          it: `Lago Moreno e Llao Llao`,
          es: `Lago Moreno y Llao Llao`,
        },
        body: {
          zh: `观景台正对莫雷诺湖的开阔水面，近处湖湾层次分明，对岸即是劳劳半岛与半山腰的劳劳酒店。这是官方旅游资料中对该观景点最核心的景致描述。`,
          en: `The viewpoint faces the open water of Lago Moreno, with layered bays up close and the Llao Llao peninsula and its hillside hotel across the water — the core view official tourism describes for this spot.`,
          it: `Il belvedere è di fronte alle acque aperte del lago Moreno, con le baie scalinate in primo piano e la penisola di Llao Llao con il suo hotel a mezza collina: la veduta centrale che il turismo ufficiale descrive per questo punto.`,
          es: `El mirador está frente a las aguas abiertas del lago Moreno, con bahías escalonadas en primer plano y la península de Llao Llao con su hotel a media ladera: la vista central que el turismo oficial describe para este punto.`,
        },
      },
      {
        heading: {
          zh: `远景：纳韦尔瓦皮湖与特罗纳多峰`,
          en: `Beyond: Nahuel Huapi & Tronador`,
          it: `Più in là: Nahuel Huapi e Tronador`,
          es: `Al fondo: Nahuel Huapi y Tronador`,
        },
        body: {
          zh: `侧旁可见纳韦尔瓦皮湖的一角，远处安第斯山脉中海拔 3,554 米的特罗纳多峰终年积雪。它们是巴里洛切天际线的远景注脚，而非观景台正对的主角。`,
          en: `A corner of Nahuel Huapi Lake is visible beside it, and the snow-capped Cerro Tronador (3,554 m) rises in the Andes beyond. They are the distant backdrop of Bariloche's skyline rather than the main subject the viewpoint faces.`,
          it: `Un angolo del lago Nahuel Huapi è visibile accanto, e il Cerro Tronador (3.554 m) coperto di neve si eleva oltre, nelle Ande. Sono lo sfondo lontano del profilo di Bariloche, non il soggetto principale di fronte al belvedere.`,
          es: `Un rincón del lago Nahuel Huapi es visible al lado, y el Cerro Tronador (3.554 m), cubierto de nieve, se eleva más allá, en los Andes. Son el telón de fondo lejano del perfil de Bariloche, no el sujeto principal frente al que mira el mirador.`,
        },
      },
      {
        heading: {
          zh: `最佳拍摄时间`,
          en: `Best time for photos`,
          it: `Il momento migliore per fotografare`,
          es: `Mejor hora para fotografiar`,
        },
        body: {
          zh: `白天晴朗时湖蓝与雪峰最清晰；日落前约 60 分钟，特罗纳多峰会被夕阳染成金红，是摄影的黄金窗口。观景台完全无遮挡，安第斯西风强劲，请做好防风保暖并扶稳器材。`,
          en: `On a clear day the blue lake and snow peaks are sharpest; about 60 minutes before sunset Cerro Tronador glows gold-red — the golden window for photography. The terrace is fully exposed and the Andean westerlies are strong, so dress for wind and hold your gear steady.`,
          it: `In giornata serena il lago blu e le cime nevate si vedono nitidi; circa 60 minuti prima del tramonto il Cerro Tronador splende d'oro e rosso: la finestra dorata per la fotografia. La terrazza è totalmente esposta e il vento andino è forte, quindi vestiti a prova di vento e reggi fermo.`,
          es: `En un día despejado, el lago azul y las cumbres nevadas se ven nítidos; unos 60 minutos antes de la puesta, el Cerro Tronador se tiñe de oro y rojo: la ventana dorada para fotografiar. La terraza está totalmente expuesta y el viento oeste andino es fuerte, así que abríguese y sostenga firme su equipo.`,
        },
      },
    ],
    faq: [
      {
        q: {
          zh: `从观景台能看到哪个湖？`,
          en: `Which lake do you see?`,
          it: `Quale lago si vede?`,
          es: `¿Qué lago se ve?`,
        },
        a: {
          zh: `正对莫雷诺湖（Lago Moreno），侧旁可见纳韦尔瓦皮湖（Lago Nahuel Huapi）。`,
          en: `Lago Moreno is straight ahead, with Lago Nahuel Huapi beside it.`,
          it: `Il lago Moreno è di fronte, con il lago Nahuel Huapi accanto.`,
          es: `El lago Moreno está enfrente, con el lago Nahuel Huapi al lado.`,
        },
      },
      {
        q: {
          zh: `什么时候光线最好？`,
          en: `When is the light best?`,
          it: `Quando la luce è migliore?`,
          es: `¿Cuándo está mejor la luz?`,
        },
        a: {
          zh: `日落前约 60 分钟，雪峰被夕阳染成金红，是摄影的黄金窗口；白天晴朗时湖蓝与雪峰也最清晰。`,
          en: `About 60 minutes before sunset the snow peak turns gold-red — the golden window; on a clear day the blue lake and peaks are also sharpest.`,
          it: `Circa 60 minuti prima del tramonto la cima si tinge d'oro e rosso: la finestra dorata; in giornata serena lago blu e cime sono anche più nitidi.`,
          es: `Unos 60 minutos antes de la puesta la cumbre se tiñe de oro y rojo: la ventana dorada; en un día despejado el lago azul y las cumbres también se ven más nítidos.`,
        },
      },
      {
        q: {
          zh: `观景台有设施吗？`,
          en: `Are there facilities?`,
          it: `Ci sono servizi?`,
          es: `¿Hay servicios?`,
        },
        a: {
          zh: `公共观景台本身没有任何设施（无饮水点、无小卖部）。请自备饮水与食物，并带走所有垃圾；旁边有一家独立经营的 Restaurant Punto Panorámico 可就餐。`,
          en: `The public terrace itself has no facilities (no water point, no kiosk). Bring your own water and food and carry out all litter; right beside it, the separate Restaurant Punto Panorámico serves meals.`,
          it: `La terrazza pubblica non ha servizi (né acqua, né chiosco). Porta acqua e cibo e porta via i rifiuti; proprio accanto, il separato Restaurant Punto Panorámico serve da mangiare.`,
          es: `La terraza pública no tiene servicios (ni agua, ni kiosco). Traiga agua y comida y lleve su basura; justo al lado, el Restaurant Punto Panorámico (negocio aparte) sirve comida.`,
        },
      },
    ],
  },
];

export const TOPIC_SLUGS: TopicSlug[] = TOPICS.map((t) => t.slug);

export function getTopic(slug: string, lang: Lang): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}
