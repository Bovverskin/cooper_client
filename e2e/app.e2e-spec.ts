import { Page } from './app.po';

describe('App', () => {
    let page: Page;

    beforeEach(() => {
        page = new Page();
    });

    describe('default srceen', () => {
        beforeEach(() => {
            page.navigateTo('/');
        });

        it('fill in form', () => {
            page.fillInForm(1000, 'Femaile', 20);
            expect(page.results_card_header()).toContain('Cooper Test Result');
            expect(page.results_card_content()).toContain('Gender: female, Age: 20 Result: Poor');
        });
    });
})