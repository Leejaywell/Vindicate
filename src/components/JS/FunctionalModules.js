// 打字机显示文字效果
let times = null;
export const typeWriterModule = (text, element) => {
    clearInterval(times);
    element.value = '';
    const textArray = text.split('');
    let i = 0;
    times = setInterval(() => {
        if (textArray.length == i) { return clearInterval(times); };
        element.value += textArray[i];
        i++;
    }, 100);
};

