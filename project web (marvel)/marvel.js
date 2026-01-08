/* 🎵 Background Music Play on First Click */
window.addEventListener("load", () =>
{
    document.body.addEventListener("click", () =>
    {
        const music = document.getElementById("bgMusic");
        if (music)
        {
            music.volume = 0.5;
            music.play();
        }
    }, { once: true });
});

/* 🔢 Counter Animation */
document.addEventListener("DOMContentLoaded", () =>
{
    let counters = document.querySelectorAll('.counter');

    counters.forEach(counter =>
    {
        let target = +counter.innerText;
        let count = 0;
        let speed = target / 100;

        let update = () =>
        {
            if (count < target)
            {
                count += speed;
                counter.innerText = Math.ceil(count);
                setTimeout(update, 20);
            }
            else
            {
                counter.innerText = target;
            }
        };

        update();
    });
});

/* ⌨️ Typewriter Effect */
document.addEventListener("DOMContentLoaded", () =>
{
    let texts = document.querySelectorAll(".type-text");

    texts.forEach((el, index) =>
    {
        let text = el.dataset.text;
        let i = 0;
        let line = el.nextElementSibling;
        let lineWidth = 0;

        function type()
        {
            if (i < text.length)
            {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 70);
            }
            else
            {
                growLine();
            }
        }

        function growLine()
        {
            if (!line) return;
            if (lineWidth < 260)
            {
                lineWidth += 5;
                line.style.width = lineWidth + "px";
                setTimeout(growLine, 15);
            }
        }

        setTimeout(type, index * 600);
    });

    let paragraphs = document.querySelectorAll(".type-text-paragraph");

    paragraphs.forEach((el, index) =>
    {
        let text = el.dataset.text;
        let i = 0;

        function typePara()
        {
            if (i < text.length)
            {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(typePara, 5);
            }
        }

        setTimeout(typePara, index * 200 + 200);
    });
});

/* 🔀 Scramble Text Effect */
document.addEventListener("DOMContentLoaded", () =>
{
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    const elements = document.querySelectorAll(".scramble-text");

    elements.forEach(el =>
    {
        const finalText = el.dataset.text;
        let iterations = 0;
        const maxIterations = finalText.length * 4;

        function scramble()
        {
            let display = "";
            for (let i = 0; i < finalText.length; i++)
            {
                if (i < iterations / 4)
                {
                    display += finalText[i];
                }
                else
                {
                    display += letters[Math.floor(Math.random() * letters.length)];
                }
            }

            el.innerText = display;

            if (iterations < maxIterations)
            {
                iterations++;
                setTimeout(scramble, 10);
            }
            else
            {
                el.innerText = finalText;
            }
        }

        scramble();
    });
});
