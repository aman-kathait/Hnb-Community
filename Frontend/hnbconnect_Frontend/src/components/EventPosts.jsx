export default function EventPosts() {
    const events = [
      {
        id: 1,
        title: "Tech Seminar: AI in 2024",
        description: "Join us for an insightful seminar on the future of AI.",
        date: "March 15, 2024",
        image: "https://img.freepik.com/premium-photo/abstract-people-lecture-seminar-room-education-training-concept_124865-3750.jpg?semt=ais_hybrid",
      },
      {
        id: 2,
        title: "Cultural Fest 2024",
        description: "Experience the vibrant cultural diversity of our university.",
        date: "March 20, 2024",
        image: "event2.jpg",
      },
      {
        id: 3,
        title: "Workshop: Web Development Basics",
        description: "Learn the fundamentals of web development in this hands-on workshop.",
        date: "March 25, 2024",
        image: "https://via.placeholder.com/600x400",
      },
    ];
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">University Events</h1>
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 rounded-lg shadow mb-4">
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            )}
            <div className="p-4">
              <h2 className="font-bold text-xl">{event.title}</h2>
              <p className="text-gray-700 mt-2">{event.description}</p>
              <p className="text-gray-500 text-sm mt-2">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }