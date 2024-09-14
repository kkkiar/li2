
 // Получает случайное действие с API и возвращает его.

export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error('Ошибка при получении активности:', error);
        return 'К сожалению, произошла ошибка';
    }
}
