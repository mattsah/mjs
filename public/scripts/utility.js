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

    return normalizedLines.join('\n').trim();
}

document.addEventListener('DOMContentLoaded', function () {
    const hljsTags = document.querySelectorAll('pre > code');

    hljsTags.forEach((hljsTag, index) => {
        let
            pre = hljsTag.parentElement;

        hljsTag.textContent = normalizeIndentation(hljsTag.textContent);
        pre.innerHTML = '';
        pre.append(hljsTag);
    })

    hljs.highlightAll();
});
