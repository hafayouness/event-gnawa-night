import "dotenv/config";
import sequelize, { EventInfo, Artist, Booking } from "../config/database.js";

const seedDatabase = async () => {
  try {
    console.log("🌱 Starting database seeding...");

    await sequelize.sync({ force: true });
    console.log("✅ Database synced");

    // ------------------------------------
    // EVENTS GNAWA
    // ------------------------------------
    const eventsData = [
      {
        title: "Soirée Gnawa - Maalem Mahmoud Guinea",
        description:
          "Une soirée magique avec Maalem Mahmoud Guinea. Rythmes ancestraux et transes collectives.",
        date: "2025-12-20",
        price: 150,
        image:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      },
      {
        title: "Concert Gnawa - Maalem Mustapha Baqbou",
        description:
          "Concert exceptionnel de Maalem Mustapha Baqbou avec ses musiciens.",
        date: "2025-12-21",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
      },
      {
        title: "Festival Gnawa - Lmaalem Hamid El Kasri",
        description:
          "Grand festival Gnawa avec Lmaalem Hamid El Kasri. Rythmes traditionnels et influences modernes.",
        date: "2025-12-22",
        price: 200,
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
      },
      {
        title: "Nuit Gnawa - Maalem Hassan Boussou",
        description:
          "Une nuit mystique avec Maalem Hassan Boussou. Voyage spirituel à travers les rythmes sacrés.",
        date: "2025-12-25",
        price: 170,
        image:
          "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800",
      },
      {
        title: "Gnawa Fusion - Maalem Aziz Sahmaoui",
        description:
          "Rencontre entre tradition Gnawa et sonorités contemporaines avec Maalem Aziz Sahmaoui.",
        date: "2025-12-28",
        price: 190,
        image:
          "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800",
      },
      {
        title: "Festival des Maîtres Gnawa",
        description:
          "Grand rassemblement des maîtres Gnawa du Maroc. Une soirée exceptionnelle à ne pas manquer.",
        date: "2025-12-31",
        price: 250,
        image:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      },
    ];

    const events = await Promise.all(
      eventsData.map((d) => EventInfo.create(d))
    );
    console.log(`✅ ${events.length} Events created`);

    // ------------------------------------
    // ARTISTS GNAWA avec bio longue
    // ------------------------------------
    const artistsData = [
      {
        name: "Maalem Mahmoud Guinea",
        bio: `Maalem Mahmoud Guinea est un maître reconnu de la tradition musicale Gnawa. Depuis son enfance à Essaouira, il a été initié aux rythmes et aux chants mystiques de cette musique ancestrale par son père et son grand-père, tous deux maalems réputés. Ses performances sont réputées pour leur intensité émotionnelle, mêlant chants, guembri et percussions traditionnelles dans des cérémonies qui peuvent durer toute une nuit. 

Mahmoud a participé à de nombreux festivals internationaux prestigieux, de Glastonbury au Festival Gnaoua d'Essaouira, collaborant avec des artistes de différents horizons musicaux - du jazz au rock, en passant par la musique électronique - tout en restant fidèle aux racines spirituelles de la musique Gnawa. Il a enregistré plusieurs albums salués par la critique internationale et a partagé la scène avec des légendes comme Randy Weston et Archie Shepp.

Son approche unique combine un savoir-faire traditionnel rigoureux, transmis de génération en génération, et une créativité contemporaine audacieuse qui fait évoluer l'art Gnawa sans le dénaturer. Chaque concert est une cérémonie vivante où la transe collective, les rythmes hypnotiques du guembri et les chants sacrés offrent à chaque public une expérience immersive et transcendante. Mahmoud est également un pédagogue passionné qui organise des masterclasses pour transmettre cet héritage précieux aux jeunes générations.`,
        photo_url:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      },
      {
        name: "Maalem Mustapha Baqbou",
        bio: `Maalem Mustapha Baqbou est considéré comme l'un des gardiens les plus authentiques des rituels ancestraux de la musique Gnawa. Issu d'une lignée prestigieuse d'artistes gnawa remontant à plusieurs générations, il a été immergé dès sa naissance dans l'univers des rythmes sacrés, des cérémonies nocturnes et des chants de guérison. Il a appris dès son plus jeune âge le guembri, les chants rituels, les danses sacrées et les secrets spirituels transmis oralement de maître à disciple.

Ses concerts et ses lila (cérémonies de transe) sont de véritables voyages sonores et spirituels où se mêlent transe mystique, méditation profonde et énergie collective purificatrice. Mustapha maîtrise parfaitement les sept couleurs musicales du répertoire Gnawa, chacune associée à un esprit protecteur et à des vertus thérapeutiques spécifiques. Sa voix puissante et son jeu virtuose au guembri créent des atmosphères envoûtantes qui transportent les participants dans des états de conscience modifiée.

Mustapha a travaillé avec de nombreux musiciens internationaux de renom, intégrant parfois des influences jazz, blues ou world music dans ses créations, tout en conservant intacte l'âme pure et l'essence spirituelle de la tradition gnawa millénaire. Passionné par la transmission de ce patrimoine immatériel de l'humanité, il organise régulièrement des ateliers, des conférences et des résidences artistiques pour initier les jeunes générations du Maroc et du monde entier à cet héritage unique et précieux.`,
        photo_url:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",
      },
      {
        name: "Lmaalem Hamid El Kasri",
        bio: `Lmaalem Hamid El Kasri est une figure absolument emblématique et incontournable de la musique Gnawa contemporaine au Maroc et dans le monde. Originaire de Marrakech, berceau d'une riche tradition musicale, il est universellement reconnu pour sa voix profonde et envoûtante, son charisme scénique magnétique et incomparable, ainsi que pour son interprétation passionnée des chants sacrés qui émeuvent profondément tous ceux qui l'écoutent.

Depuis plus de trois décennies, Hamid El Kasri parcourt inlassablement le monde entier pour partager la richesse spirituelle et culturelle de cette musique sacrée millénaire. Il a participé aux festivals les plus prestigieux de la planète, du Festival Gnaoua d'Essaouira au WOMAD, en passant par le Festival de jazz de Montréal et de nombreuses scènes européennes, américaines et asiatiques. Il a collaboré avec des artistes internationaux de légende comme Pat Metheny, Marcus Miller, et bien d'autres géants du jazz et de la world music.

Sa maîtrise extraordinaire du guembri, instrument à cordes à la résonance grave et hypnotique, et sa capacité rare à improviser spontanément des chants en état de transe font de chacune de ses performances un moment absolument unique de communion spirituelle, d'émotion pure et de connexion transcendante entre l'artiste et son public. Hamid El Kasri est également un pédagogue profondément engagé dans la préservation et la transmission de ce patrimoine, enseignant son savoir et sa passion aux jeunes musiciens marocains et internationaux désireux de perpétuer authentiquement la tradition Gnawa pour les générations futures.`,
        photo_url:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
      },
      {
        name: "Maalem Hassan Boussou",
        bio: `Maalem Hassan Boussou est reconnu comme l'un des piliers fondamentaux et des gardiens les plus respectés de la musique Gnawa à Essaouira, ville mythique considérée comme le berceau spirituel de cette tradition mystique. Héritier direct d'une très longue tradition familiale qui remonte à plusieurs siècles, Hassan a été formé dans les règles de l'art dès son plus jeune âge par les plus grands maîtres de sa lignée, perfectionnant son art au fil des décennies auprès des légendes vivantes du Gnawa.

Sa technique exceptionnelle au guembri est unanimement reconnue dans tout le Maroc et au-delà pour sa précision chirurgicale, sa puissance évocatrice et sa profondeur spirituelle qui touche directement l'âme des auditeurs. Hassan est tout particulièrement apprécié et recherché pour ses lila - ces cérémonies nocturnes sacrées qui commencent au coucher du soleil et se poursuivent jusqu'à l'aube - où il guide les participants avec maestria dans un voyage spirituel profond et transformateur, invoquant les esprits protecteurs et créant des états de transe collective purificatrice.

Son répertoire musical impressionnant inclut l'intégralité des chants sacrés traditionnels transmis oralement depuis des générations, ainsi que des compositions originales personnelles qui témoignent de la vitalité créative et de la capacité d'évolution de la culture Gnawa. Au-delà de ses performances scéniques et rituelles, Hassan est profondément impliqué dans la préservation, la documentation académique et la transmission vivante de ce patrimoine immatériel de l'humanité reconnu par l'UNESCO, organisant des formations pour les jeunes et travaillant avec des ethnomusicologues du monde entier.`,
        photo_url:
          "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
      },
      {
        name: "Maalem Aziz Sahmaoui",
        bio: `Maalem Aziz Sahmaoui est un artiste visionnaire et innovant qui a brillamment réussi à créer des ponts audacieux entre la tradition ancestrale Gnawa et les musiques contemporaines du monde entier. Né dans une famille de musiciens gnawa à Marrakech, Aziz a été formé rigoureusement aux techniques ancestrales du guembri, aux chants sacrés rituels et aux secrets spirituels transmis de maître à disciple, tout en développant parallèlement une curiosité insatiable pour d'autres univers musicaux.

Cette double formation exceptionnelle - d'un côté les racines profondes du Gnawa mystique, de l'autre l'ouverture vers le jazz moderne, les musiques électroniques, le funk, le reggae et bien d'autres genres - lui permet de proposer des créations musicales absolument uniques, audacieuses et captivantes qui respectent scrupuleusement l'essence spirituelle et les codes sacrés de la musique Gnawa tout en l'ouvrant magistralement à de nouveaux horizons sonores contemporains inexplorés.

Aziz Sahmaoui collabore régulièrement avec des musiciens internationaux de très haut niveau venus des quatre coins du monde, et ses albums - véritables œuvres d'art sonic - sont systématiquement salués avec enthousiasme par la critique musicale mondiale spécialisée. Il a notamment travaillé avec des légendes comme Joe Zawinul, et son groupe University of Gnawa a révolutionné la scène de la world music fusion. Aziz incarne parfaitement une nouvelle génération de maîtres Gnawa, résolument tournée vers l'avenir et l'innovation sans jamais renier ou oublier ses racines spirituelles et culturelles profondes, prouvant que tradition et modernité peuvent coexister harmonieusement dans un dialogue créatif fructueux.`,
        photo_url:
          "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400",
      },
      {
        name: "Maalem Abdellah El Gourd",
        bio: `Maalem Abdellah El Gourd est une véritable légende vivante, un trésor national et une référence absolue de la musique Gnawa au Maroc et dans le monde entier. Originaire d'Essaouira, ville sacrée et capitale spirituelle incontestée du Gnawa, il a littéralement consacré l'intégralité de sa longue vie à la préservation méticuleuse, à la pratique quotidienne et à la transmission passionnée de cet art ancestral millénaire qu'il considère comme un héritage sacré à protéger pour les générations futures.

Son jeu légendaire au guembri est empreint d'une profondeur spirituelle extrêmement rare, fruit de plus de soixante années de pratique intensive et de communion avec les forces mystiques invoquées par cette musique sacrée. Abdellah possède cette capacité extraordinaire et presque surnaturelle de transporter instantanément les auditeurs dans des états de conscience modifiés et transcendants, créant des expériences de transe collective où le temps semble se suspendre et où les frontières entre le monde matériel et spirituel s'estompent mystérieusement.

Abdellah El Gourd a formé personnellement plusieurs générations de disciples et de maalems qui perpétuent aujourd'hui son enseignement aux quatre coins du Maroc et du monde, et il a participé durant sa carrière impressionnante à d'innombrables festivals internationaux prestigieux à travers tous les continents. Sa connaissance véritablement encyclopédique des milliers de chants traditionnels, des rituels complexes, des codes spirituels et de l'histoire orale du Gnawa en fait une référence académique incontournable consultée régulièrement par les chercheurs et ethnomusicologues du monde entier. Malgré son âge très avancé et la sagesse qu'apportent les décennies, il continue avec une énergie étonnante de se produire régulièrement en concert et d'enseigner aux nouvelles générations avec la même passion intacte qu'à ses débuts.`,
        photo_url:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
      },
    ];

    const artists = await Promise.all(artistsData.map((d) => Artist.create(d)));
    console.log(`✅ ${artists.length} Artists created`);

    // ------------------------------------
    // BOOKINGS GNAWA
    // ------------------------------------
    const bookingsData = [
      {
        bookingId: "BKG001",
        ticketId: "TKT001",
        name: "Ahmed Benjelloun",
        email: "ahmed@example.com",
        phone: "+212612345678",
        code: "GN20A1",
        eventId: events[0].id,
      },
      {
        bookingId: "BKG002",
        ticketId: "TKT002",
        name: "Laila Amrani",
        email: "laila@example.com",
        phone: "+212623456789",
        code: "GN20A2",
        eventId: events[0].id,
      },
      {
        bookingId: "BKG003",
        ticketId: "TKT003",
        name: "Rachid Alaoui",
        email: "rachid@example.com",
        phone: "+212612987654",
        code: "GN21B1",
        eventId: events[1].id,
      },
      {
        bookingId: "BKG004",
        ticketId: "TKT004",
        name: "Zineb Chaoui",
        email: "zineb@example.com",
        phone: "+212622987654",
        code: "GN21B2",
        eventId: events[1].id,
      },
      {
        bookingId: "BKG005",
        ticketId: "TKT005",
        name: "Mohammed Chraibi",
        email: "mohammed@example.com",
        phone: "+212612111222",
        code: "GN22C1",
        eventId: events[2].id,
      },
      {
        bookingId: "BKG006",
        ticketId: "TKT006",
        name: "Fatima Ouazzani",
        email: "fatima@example.com",
        phone: "+212623111222",
        code: "GN22C2",
        eventId: events[2].id,
      },
      {
        bookingId: "BKG007",
        ticketId: "TKT007",
        name: "Youssef Tazi",
        email: "youssef@example.com",
        phone: "+212612333444",
        code: "GN25D1",
        eventId: events[3].id,
      },
      {
        bookingId: "BKG008",
        ticketId: "TKT008",
        name: "Samira Bennis",
        email: "samira@example.com",
        phone: "+212623333444",
        code: "GN25D2",
        eventId: events[3].id,
      },
      {
        bookingId: "BKG009",
        ticketId: "TKT009",
        name: "Karim Fassi",
        email: "karim@example.com",
        phone: "+212612555666",
        code: "GN28E1",
        eventId: events[4].id,
      },
      {
        bookingId: "BKG010",
        ticketId: "TKT010",
        name: "Nadia Kettani",
        email: "nadia@example.com",
        phone: "+212623555666",
        code: "GN28E2",
        eventId: events[4].id,
      },
      {
        bookingId: "BKG011",
        ticketId: "TKT011",
        name: "Omar Idrissi",
        email: "omar@example.com",
        phone: "+212612777888",
        code: "GN31F1",
        eventId: events[5].id,
      },
      {
        bookingId: "BKG012",
        ticketId: "TKT012",
        name: "Houda Lahlou",
        email: "houda@example.com",
        phone: "+212623777888",
        code: "GN31F2",
        eventId: events[5].id,
      },
    ];

    await Booking.bulkCreate(bookingsData);
    console.log(`✅ ${bookingsData.length} Bookings created`);

    console.log("\n🎉 Database seeding completed successfully!");
    console.log(`📊 Summary:`);
    console.log(`   - Events: ${events.length}`);
    console.log(`   - Artists: ${artists.length}`);
    console.log(`   - Bookings: ${bookingsData.length}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
