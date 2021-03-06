const comment =
    'This is a code playground\nWe run three languages typescript, javascript, c++, c and python';

export const LANGUAGES = {
    javascript: {
        ext: '.js',
        initialContent: `/*${comment}*/`,
    },
    python: {
        ext: '.py',
        initialContent: `'''${comment}'''`,
    },
    typescript: {
        ext: '.ts',
        initialContent: `/*${comment}*/`,
    },
    c: {
        ext: '.c',
        initialContent: `/*${comment}*/`,
    },
    cpp: {
        ext: '.cpp',
        initialContent: `/*${comment}*/`,
    },
};

export const DEFAULT_THEME = 'amy';
export const EXTENSIONS = Object.values(LANGUAGES).map((l) => l.ext);
