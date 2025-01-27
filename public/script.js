document.getElementById('getFortune').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const zodiac = document.getElementById('zodiac').value;

    if (!name || !zodiac) {
        alert('Please enter both your name and zodiac sign.');
        return;
    }

    try {
        const response = await fetch('/api/fortune', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, zodiac })
        });

        const result = await response.json();

        if (result.message) {
            document.getElementById('fortuneMessage').innerText = result.message;
        } else {
            document.getElementById('fortuneMessage').innerText = 'Sorry, something went wrong. Please try again.';
        }
    } catch (error) {
        document.getElementById('fortuneMessage').innerText = 'Sorry, something went wrong. Please try again.';
    }
});
