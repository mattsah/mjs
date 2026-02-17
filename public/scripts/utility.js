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


document.addEventListener('DOMContentLoaded', function () {
    const query = new URLSearchParams(window.location.search);

    if (query.has('unlock')) {
        const secret = query.get('unlock');
        const locked = document.querySelectorAll('[data-lock]').forEach(
            (item) => {
                var parts = item.attributes['href'].value.split(':');
                var value = CryptoJS.RC4.decrypt(parts[1], secret).toString(CryptoJS.enc.Utf8);

                item.innerText = value;
                item.setAttribute('href', parts[0] + ':' + value);
                item.classList.toggle('blur-sm')
            }
        );
    }
});
