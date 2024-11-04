input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (input.value.trim() !== '') {
            tasksByDate[date].push({ text: '', completed: false });
            createTaskElement(tasksByDate[date][tasksByDate[date].length - 1], date, tasksByDate[date].length - 1);
        }
    }
});
