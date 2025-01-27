const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming JSON requests
app.use(express.json());

// API route to handle fortune generation
app.post('/api/fortune', (req, res) => {
    const { name, zodiac } = req.body;
    const fortunes = {
        Aries: [
            "Today is your day to shine!",
            "Take bold steps forward and conquer the day."
        ],
        Taurus: [
            "Patience will bring great rewards.",
            "Believe in your strength and resilience."
        ],
        Gemini: [
            "Your curiosity will lead to amazing discoveries.",
            "Stay positive, the best is yet to come."
        ],
        Cancer: [
            "Trust your instincts; they will guide you.",
            "Your kindness will bring you success."
        ],
        Leo: [
            "Embrace your power, the world is yours.",
            "Be bold and ambitious today!"
        ],
        Virgo: [
            "Perfection is within your reach. Keep going!",
            "Your hard work will pay off soon."
        ],
        Libra: [
            "Balance is key, stay calm and focused.",
            "Great things are coming your way."
        ],
        Scorpio: [
            "Your strength lies in your determination.",
            "Embrace change, it’s leading to something wonderful."
        ],
        Sagittarius: [
            "Adventure awaits, take that leap of faith!",
            "Keep exploring, the journey is just as important."
        ],
        Capricorn: [
            "Your persistence will bring incredible rewards.",
            "Don’t stop now, success is around the corner."
        ],
        Aquarius: [
            "Your creativity will inspire those around you.",
            "The future is yours to shape."
        ],
        Pisces: [
            "Trust in your dreams, they are guiding you.",
            "Let your intuition lead the way."
        ]
    };

    const randomFortune = fortunes[zodiac]
        ? fortunes[zodiac][Math.floor(Math.random() * fortunes[zodiac].length)]
        : "You have the strength to overcome any challenge ahead.";

    res.status(200).json({ message: `${name}, your fortune is: ${randomFortune}` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
