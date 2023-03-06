describe('My Login Demo', () => {
beforeEach(async () => {
//Access the hamburguer/toggle button by its accessibility id
await $('~More button').click();
// await driver.pause(3000)
});

it('should not login with invalid credentials', async () => {
await driver.pause(3000);
});
});
