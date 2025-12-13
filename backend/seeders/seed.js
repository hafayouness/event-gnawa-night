import "dotenv/config";
import sequelize, { EventInfo, Artist, Booking } from "../config/database.js";

const seedDatabase = async () => {
  try {
    console.log("🌱 Starting database seeding...");

    await sequelize.sync({ force: true });
    console.log("✅ Database synced");

    // ------------------------------------
    // EVENTS
    // ------------------------------------
    const eventsData = [
      {
        title: "Soirée Gnawa - Maalem Mahmoud Guinea",
        description:
          "Une soirée magique avec Maalem Mahmoud Guinea. Rythmes ancestraux et transes collectives.",
        date: "2025-04-29",
        price: 150,
        image:
          "https://images.unsplash.com/photo-1596158019512-77d9b9b0c528?fit=crop&w=800&q=80",
      },
      {
        title: "Concert Gnawa - Maalem Mustapha Baqbou",
        description:
          "Concert exceptionnel de Maalem Mustapha Baqbou avec ses musiciens. Voyage sonore hypnotique.",
        date: "2025-04-30",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1506973035872-a4c637ebf2a2?fit=crop&w=800&q=80",
      },
      {
        title: "Festival Gnawa - Lmaalem Hamid El Kasri",
        description:
          "Grand festival Gnawa avec Lmaalem Hamid El Kasri. Rythmes traditionnels et influences modernes.",
        date: "2025-05-01",
        price: 200,
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fit=crop&w=800&q=80",
      },
    ];

    const [event1, event2, event3] = await Promise.all(
      eventsData.map((d) => EventInfo.create(d))
    );
    console.log("✅ 3 Events created");

    // ------------------------------------
    // ARTISTS
    // ------------------------------------
    const artistsData = [
      {
        name: "Maalem Mahmoud Guinea",
        bio: "Virtuose du guembri et maître de la tradition Gnawa.",
        photo_url:
          "https://www.musicamacondo.com/wp-content/uploads/2017/07/Portrait-1.jpg",
      },
      {
        name: "Maalem Mustapha Baqbou",
        bio: "Gardien des rituels ancestraux de la musique Gnawa.",
        photo_url:
          "https://www.festival-gnaoua.net/wp-content/uploads/2024/03/Maalem-Mustapha-Baqbou-Photo-4--scaled.jpg",
      },
      {
        name: "Lmaalem Hamid El Kasri",
        bio: "Légende vivante de la musique Gnawa, voix profonde et charisme scénique.",
        photo_url:
          "https://www.songlines.co.uk/media/5520/maalem_hamid_el_kasri-7.jpg?center=0.19083969465648856,0.48469387755102039&mode=crop&width=1200&height=600&rnd=132973666070000000",
      },
    ];

    const [artist1, artist2, artist3] = await Promise.all(
      artistsData.map((d) => Artist.create(d))
    );
    console.log("✅ 3 Artists created");

    // ------------------------------------
    // BOOKINGS with bookingId & ticketId
    // ------------------------------------
    const bookingsData = [
      // Event 1
      {
        bookingId: "BKG001",
        ticketId: "TKT001",
        name: "Ahmed Benjelloun",
        email: "ahmed@example.com",
        phone: "+212612345678",
        code: "GN29A1",
        eventId: event1.id,
      },
      {
        bookingId: "BKG002",
        ticketId: "TKT002",
        name: "Laila Amrani",
        email: "laila@example.com",
        phone: "+212623456789",
        code: "GN29A2",
        eventId: event1.id,
      },

      // Event 2
      {
        bookingId: "BKG003",
        ticketId: "TKT003",
        name: "Rachid Alaoui",
        email: "rachid@example.com",
        phone: "+212612987654",
        code: "GN30B1",
        eventId: event2.id,
      },
      {
        bookingId: "BKG004",
        ticketId: "TKT004",
        name: "Zineb Chaoui",
        email: "zineb@example.com",
        phone: "+212622987654",
        code: "GN30B2",
        eventId: event2.id,
      },

      // Event 3
      {
        bookingId: "BKG005",
        ticketId: "TKT005",
        name: "Mohammed Chraibi",
        email: "mohammed@example.com",
        phone: "+212612111222",
        code: "GN01C1",
        eventId: event3.id,
      },
      {
        bookingId: "BKG006",
        ticketId: "TKT006",
        name: "Fatima Ouazzani",
        email: "fatima@example.com",
        phone: "+212623111222",
        code: "GN01C2",
        eventId: event3.id,
      },
    ];

    await Booking.bulkCreate(bookingsData);
    console.log(`✅ ${bookingsData.length} Bookings created`);

    console.log("\n🎉 Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
