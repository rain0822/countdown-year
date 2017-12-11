import Component from '@ember/component';

export default Component.extend({
    test: true,
    playerVars: {
        autoplay: 1,
        showinfo: 0,
        controls: 0,
        modestbranding: 1
    },
    actions: {
        test() {
            this.set('test', !this.get('test'));
        }
    }
});
