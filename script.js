const eventSearch = document.querySelector('#event-search');
const clearSearchButton = document.querySelector('#clear-search');
const resultsCount = document.querySelector('#results-count');
const noResultsMessage = document.querySelector('#no-results');
const eventCards = Array.from(document.querySelectorAll('.event-card'));

if (eventSearch && clearSearchButton && resultsCount && noResultsMessage) {
    const updateEvents = () => {
        const query = eventSearch.value.trim().toLocaleLowerCase('tr-TR');
        let visibleCount = 0;

        eventCards.forEach((card) => {
            const matches = card.textContent.toLocaleLowerCase('tr-TR').includes(query);
            card.hidden = !matches;
            if (matches) visibleCount += 1;
        });

        resultsCount.textContent = `${visibleCount} etkinlik gösteriliyor`;
        noResultsMessage.hidden = visibleCount !== 0;
        clearSearchButton.disabled = query.length === 0;
    };

    eventSearch.addEventListener('input', updateEvents);
    clearSearchButton.addEventListener('click', () => {
        eventSearch.value = '';
        updateEvents();
        eventSearch.focus();
    });

    updateEvents();
}