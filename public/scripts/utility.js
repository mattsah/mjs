function normalizeIndentation(text) {
    const lines = text.split('\n');

    while (lines.length > 0 && lines[0].trim() === '') {
        lines.shift();
    }

    while (lines.length > 0 && lines[lines.length - 1].trim() === '') {
        lines.pop();
    }

    if (lines.length === 0) {
        return '';
    }

    let minIndent = Infinity;

    for (const line of lines) {
        if (line.trim() === '') {
            continue; // Skip empty lines
        }

        const leadingSpaces = line.match(/^[ \t]*/)[0].length;
        minIndent = Math.min(minIndent, leadingSpaces);
    }

    const normalizedLines = lines.map(line => {
        if (line.trim() === '') {
            return '';
        }

        return line.substring(minIndent);
    });

    return normalizedLines.join('\n');
}

function convertScriptToPre(scriptTag) {
    const lang = scriptTag.getAttribute('type');
    const code = document.createElement('code');
    const pre = document.createElement('pre');
    const normalizedContent = normalizeIndentation(scriptTag.textContent);

    for (attribute of scriptTag.attributes) {
        if (attribute.name != 'type') {
            pre.setAttribute(attribute.name, attribute.value);
        }
    };

    code.className = `language-${lang}`;
    code.textContent = normalizedContent;
    pre.appendChild(code);
    scriptTag.after(pre);
    scriptTag.remove();

    hljs.highlightElement(code);
}

document.addEventListener('DOMContentLoaded', function () {
    const scriptTags = document.querySelectorAll('script[type]:not([type="text/javascript"])');

    scriptTags.forEach((scriptTag, index) => {
        convertScriptToPre(scriptTag);
    })
});
