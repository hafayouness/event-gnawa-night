import "dotenv/config";
import sequelize, { Artist, Booking, EventInfo } from "../config/database.js";

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
        name: "Soirée Gnawa - Maalem Mahmoud Guinea",
        date: "2025-04-29",
        price: 150.0,
      },
      {
        name: "Concert Gnawa - Maalem Mustapha Baqbou",
        date: "2025-04-30",
        price: 180.0,
      },
      {
        name: "Festival Gnawa - Lmaalem Hamid El Kasri",
        date: "2025-05-01",
        price: 200.0,
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
        bio: "Virtuose du guembri reconnu internationalement, fusionne les rythmes traditionnels avec jazz et world music.",
        photo_url:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
      },
      {
        name: "Maalem Mustapha Baqbou",
        bio: "Maître Gnawa renommé internationalement, spécialiste des rituels hypnotiques et de la tradition ancestrale.",
        photo_url:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      },
      {
        name: "Lmaalem Hamid El Kasri",
        bio: "Légende vivante de la musique Gnawa, plus de 50 ans d'expérience, maîtrise du guembri et Krakebs.",
        photo_url:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
      },
    ];

    const [artist1, artist2, artist3] = await Promise.all(
      artistsData.map((d) => Artist.create(d))
    );
    console.log("✅ 3 Artists created");

    // ------------------------------------
    // BOOKINGS
    // ------------------------------------
    const bookingsData = [
      // -------- Event 1 --------
      {
        full_name: "Ahmed Benjelloun",
        email: "ahmed@example.com",
        phone: "+212612345678",
        confirmation_code: "GN29A1",
        artist_id: artist1.id,
        event_id: event1.id,
      },
      {
        full_name: "Laila Amrani",
        email: "laila@example.com",
        phone: "+212623456789",
        confirmation_code: "GN29A2",
        artist_id: artist1.id,
        event_id: event1.id,
      },
      {
        full_name: "Karim El Fassi",
        email: "karim@example.com",
        phone: "+212634567891",
        confirmation_code: "GN29A3",
        artist_id: artist1.id,
        event_id: event1.id,
      },
      {
        full_name: "Samira Bennani",
        email: "samira@example.com",
        phone: "+212645678912",
        confirmation_code: "GN29A4",
        artist_id: artist1.id,
        event_id: event1.id,
      },
      {
        full_name: "Omar Tazi",
        email: "omar@example.com",
        phone: "+212656789123",
        confirmation_code: "GN29A5",
        artist_id: artist1.id,
        event_id: event1.id,
      },
      {
        full_name: "Nadia Berrada",
        email: "nadia@example.com",
        phone: "+212667891234",
        confirmation_code: "GN29A6",
        artist_id: artist1.id,
        event_id: event1.id,
      },

      // -------- Event 2 --------
      {
        full_name: "Rachid Alaoui",
        email: "rachid@example.com",
        phone: "+212612987654",
        confirmation_code: "GN30B1",
        artist_id: artist2.id,
        event_id: event2.id,
      },
      {
        full_name: "Zineb Chaoui",
        email: "zineb@example.com",
        phone: "+212622987654",
        confirmation_code: "GN30B2",
        artist_id: artist2.id,
        event_id: event2.id,
      },
      {
        full_name: "Hassan Mernissi",
        email: "hassan@example.com",
        phone: "+212633987654",
        confirmation_code: "GN30B3",
        artist_id: artist2.id,
        event_id: event2.id,
      },
      {
        full_name: "Malika Azizi",
        email: "malika@example.com",
        phone: "+212644987654",
        confirmation_code: "GN30B4",
        artist_id: artist2.id,
        event_id: event2.id,
      },
      {
        full_name: "Youssef Kettani",
        email: "youssef@example.com",
        phone: "+212655987654",
        confirmation_code: "GN30B5",
        artist_id: artist2.id,
        event_id: event2.id,
      },
      {
        full_name: "Aicha Sefrioui",
        email: "aicha@example.com",
        phone: "+212666987654",
        confirmation_code: "GN30B6",
        artist_id: artist2.id,
        event_id: event2.id,
      },

      // -------- Event 3 --------
      {
        full_name: "Mohammed Chraibi",
        email: "mohammed@example.com",
        phone: "+212612111222",
        confirmation_code: "GN01C1",
        artist_id: artist3.id,
        event_id: event3.id,
      },
      {
        full_name: "Fatima Ouazzani",
        email: "fatima@example.com",
        phone: "+212623111222",
        confirmation_code: "GN01C2",
        artist_id: artist3.id,
        event_id: event3.id,
      },
      {
        full_name: "Said Benabdellah",
        email: "said@example.com",
        phone: "+212634111222",
        confirmation_code: "GN01C3",
        artist_id: artist3.id,
        event_id: event3.id,
      },
      {
        full_name: "Khadija Benjelloun",
        email: "khadija@example.com",
        phone: "+212645111222",
        confirmation_code: "GN01C4",
        artist_id: artist3.id,
        event_id: event3.id,
      },
      {
        full_name: "Amine Filali",
        email: "amine@example.com",
        phone: "+212656111222",
        confirmation_code: "GN01C5",
        artist_id: artist3.id,
        event_id: event3.id,
      },
      {
        full_name: "Sanaa Lahlou",
        email: "sanaa@example.com",
        phone: "+212667111222",
        confirmation_code: "GN01C6",
        artist_id: artist3.id,
        event_id: event3.id,
      },
    ];

    await Booking.bulkCreate(bookingsData);
    console.log("✅ 18 Bookings created");

    console.log("\n🎉 Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
