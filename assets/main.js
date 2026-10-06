// Initialize Nette Forms on page load
import netteForms from 'nette-forms';
// We need Naja package to use AJAX in nette project
import naja from 'naja';

netteForms.initOnLoad();
naja.initialize();
