
import { getRandomActivity } from './activity.js';


  //Обновляет текст активности на странице.
async function updateActivity() {
    const activityElement = document.getElementById('activity');
    activityElement.textContent = 'Загрузка...';
    const activity = await getRandomActivity();
    activityElement.textContent = activity;
}

// Запускает обновление активности каждую минуту.
 
function startAutoUpdate() {
    updateActivity(); 
    setInterval(updateActivity, 60000); 
}

startAutoUpdate();
