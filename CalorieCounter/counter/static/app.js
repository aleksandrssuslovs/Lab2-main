console.log("JavaScript file loaded");

let totalCalories = 0;

function addMeal() {
    const mealName = document.getElementById('meal-name').value;
    const mealCalories = parseFloat(document.getElementById('meal-calories').value);

    if (mealName && !isNaN(mealCalories)) {
        // Add meal to daily log
        const log = document.createElement('div');
        log.className = 'd-flex justify-content-between py-2 border-bottom';
        log.innerHTML = `<span class="fw-bold">${mealName}</span> <span>+${mealCalories} cal</span>`;
        document.getElementById('daily-log').appendChild(log);

        // Update total calories
        totalCalories += mealCalories;
        document.getElementById('total-calories').textContent = `Total Calories: ${totalCalories}`;

        // Clear input fields
        document.getElementById('meal-name').value = '';
        document.getElementById('meal-calories').value = '';
    } else {
        alert("Please enter a valid meal name and calorie amount.");
    }
}

function addExercise() {
    const exerciseName = document.getElementById('exercise-name').value;
    const exerciseCalories = parseFloat(document.getElementById('exercise-calories').value);

    if (exerciseName && !isNaN(exerciseCalories)) {
        // Add exercise to daily log
        const log = document.createElement('div');
        log.className = 'd-flex justify-content-between py-2 border-bottom';
        log.innerHTML = `<span class="fw-bold">${exerciseName}</span> <span class="text-danger">-${exerciseCalories} cal</span>`;
        document.getElementById('daily-log').appendChild(log);

        // Update total calories by subtracting the exercise calories
        totalCalories -= exerciseCalories;
        document.getElementById('total-calories').textContent = `Total Calories: ${totalCalories}`;

        // Clear input fields
        document.getElementById('exercise-name').value = '';
        document.getElementById('exercise-calories').value = '';
    } else {
        alert("Please enter a valid exercise name and calories burned.");
    }
}
