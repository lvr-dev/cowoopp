import { IonicModule } from '@ionic/angular';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/', true, /\.stories\.ts$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

const wrap = templateFn => storyFn => {
    const story = storyFn();
    return {
        ...story,
        template: templateFn(story.template)
    };
};
const ionicWrap = wrap(content => `<ion-app>${ content }</ion-app>`);

addDecorator(ionicWrap);
addDecorator(
    moduleMetadata({
        imports: [IonicModule]
    })
)

configure(loadStories, module);
