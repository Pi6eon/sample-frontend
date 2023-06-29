import { searchArt } from './art_helper';
import { validateSearchQuery } from './validation_helper';
import './style.css';

window.onload = ev => {
    init();
}

const init = () => {
    console.log('hello I am a sample index.js v5');
    document.getElementById('title-search-button').addEventListener('click', handleSearchClick);
}

const handleSearchClick = (ev) => {
    const title = document.getElementById('title-search-input').value;
    validateSearchQuery(title, 5, 10);
    searchArt({ title }).then(renderResults);
}

const renderResults = ({ artPieces }) => {
    document.getElementById('search-results').innerHTML = artPieces.join('');
}