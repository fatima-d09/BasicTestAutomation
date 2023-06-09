
describe('Youtube', () => {

    it('Homepage Testing', async () => {

        browser.url("https://youtube.com")
        await $('[name="search_query"]').setValue('AMAU')
        browser.keys('Enter')
    })

    it('AMAU', async () => {
        browser.url("https://youtube.com/results?search_query=AMAU")
        await $('#img').click()
    })

    it('Scrolling through AMAU Youtube Homepage', async () => {
        browser.url("https://youtube.com/@AMAUofficial")
        console.log(await browser.execute(
            () => window.scrollY //returns 0
        ))
        await browser.scroll(0, 1000)
        console.log(await browser.execute(
            () => window.scrollY //returns 200
        ))
    })

    it('Click a header: Podcasts', async () => {
        await $('div[class="tab-title style-scope ytd-c4-tabbed-header-renderer"]').click()
        await $('img[class="yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded"]').click()
    })

    it('Video Plays', async () => {
        browser.url("https://www.youtube.com/watch?v=WHphwLPA3j0&list=PL2dRQaGGWZODjTcaqEnzBszTBLu6yv1XD&ab_channel=AlMadrasatuAlUmariyyah");
        //causes problems:
        // await $('button[class="ytp-play-button ytp-button ytp-play-button-playlist"]').click()
    });

    // it('Playlist', async () => {
    //     console.log(await $('#items').execute(
    //         () => window.scrollY //returns 0
    //     ))

    //     await $('#items').scroll(0, 500)
    //     console.log(await $('#items').execute(
    //         () => window.scrollY //returns 500
    //     ))
    // })


})