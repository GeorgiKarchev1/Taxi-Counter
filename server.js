const express = require('express');
const path = require('path');
const app = express();

// Сервиране на статични файлове от папка Taxi-Counter
app.use(express.static(path.join(__dirname, 'Taxi-Counter')));

// Добавяне на маршрут за началната страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'taxi.html'));
});

// Други маршрути и настройки на вашето приложение

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
