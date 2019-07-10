import { setCORS } from 'google-translate-api-browser';

// setting up cors-anywhere server address
const translate = setCORS('http://cors-anywhere.herokuapp.com/');

export default (text) => {
    const [ to = 'en' ] = window.navigator.language.split('-')

    return translate(text, { to })
        .then(res => res.text)
        .catch(() => text) // Swallow error, return the input text
}