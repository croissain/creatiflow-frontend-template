import './test.scss';
export class Test{
    constructor() {
        console.log('___run Test')
        const h1 = document.querySelector<HTMLHeadingElement>('h1');
        h1.style.color = 'black';
    }
}
