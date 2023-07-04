// import { MetaInfo } from 'vue-meta'

interface MyMetaInfo {
    title?: string,
    content?: string,
    image?: string,
    url?: string,
    type?: string

}

const devMode = process.env.NODE_ENV === 'development'

export class General {

    appLogo(color: string, cssClasses?: string /* provide the respective css class to decide how the logo is displayed */) {
        return `
        <img src="/defaults/logo/${color === 'white' ? 'orbrift-wh.png' : color === 'cyan' ? 'orbrift-cy.png' : 'orbrift-fill.jpg'}" class="logo-base ${cssClasses ? cssClasses : ''}">
        </img>
                `
    }

    // !Load google recaptcha
    loadScript(scriptUrl: string = "https://www.google.com/recaptcha/api.js?render=6LfWRMQbAAAAAG0QCV3Blkn1lFuPB64l-zjYnRmU", tagId: string = "gRcptSrt") {
        return new Promise(function (resolve, reject) {
            if (!devMode) {
                let script = document.createElement('script');
                script.src = scriptUrl;
                script.id = tagId;
                script.type = 'text/javascript';
                script.onerror = reject;
                script.async = true;
                script.onload = resolve;
                let oldTag = document.head.querySelector('#' + tagId)
                if (oldTag) {
                    oldTag.parentNode.replaceChild(script, oldTag)
                } else
                    document.head.appendChild(script);
            }
            reject//('dev')
        })
    }

    async hideCaptchaBadge() {
        if (!devMode) {
            let retries = 0
            function invis() {
                const el = (document.querySelector('.grecaptcha-badge') as HTMLElement);
                if (el) {
                    el.style.display = 'none'
                }
                else {
                    setTimeout(() => {
                        retries++
                        if (retries <= 6)
                            invis()
                    }, 7000);
                }
            }
            invis()
        }
    }

    async insertLinks() {
        // if (!devMode) {
        var linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900';
        linkTag.type = 'text/css';
        var insertPosition = document.getElementsByTagName('link')[0];
        insertPosition.parentNode.insertBefore(linkTag, insertPosition);
        // }
    }

    /* vue-meta abstraction method */
    metaInfo(data: MyMetaInfo) {
        const defaults = {
            title: 'Samuel Adeniyi - Fullstack Developer - ',
            content: "Crafting innovative websites, applications, and digital solutions for creative brands. Enhanced user experiences with stunning, user-friendly interfaces that engage and convert.",
            image: 'https://orbrift.com/defaults/pgs/software_websites_design_web_apps_development.jpg',
            url: 'https://orbrift.com/',
            type: 'website'
        }


        return {
            title: data.title || defaults.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: data.content ? data.content.slice(0, 250) + '...' : defaults.content
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: data.title || defaults.title
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: data.content || defaults.content
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: data.url || defaults.url
                },
                {
                    hid: 'og:image',
                    property: 'og:image',/* reccomended aspect-ratio 1200x630 */
                    content: data.image || defaults.image
                },
                {
                    hid: 'og:type',
                    property: 'og:type',
                    content: data.type || defaults.type
                },
                {
                    hid: 'twitter:card',
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    name: 'robots',
                    content: 'index, follow'
                }
            ]
        }
    }

}
