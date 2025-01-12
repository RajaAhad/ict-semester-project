
// JavaScript for BMI Calculation
document.getElementById('bmi-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get user input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values for both weight and height.');
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // BMI calculation formula
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display the BMI value and category
    const bmiValueElement = document.getElementById('bmi-value');
    const bmiCategoryElement = document.getElementById('bmi-category');

    bmiValueElement.textContent = `Your BMI: ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        bmiCategoryElement.textContent = "Category: Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategoryElement.textContent = "Category: Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategoryElement.textContent = "Category: Overweight";
    } else {
        bmiCategoryElement.textContent = "Category: Obese";
    }
});

